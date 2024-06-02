const request = require('supertest');
const app = require('../app');
let id;
let token;


test('POST /users', async () => {
    const newUser = {
        firstName: 'test',
        lastName: 'user',
        email:'testuser@gmail.com',
        password:'test123',
        gender: 'other',
    }
    const res = await request(app).post('/users').send(newUser);
    id= res.body.id;
    expect(res.status).toBe(201);
    expect(res.body.id).toBeDefined();
    expect(res.body.firstName).toBe(newUser.firstName)
});

test('POST /users/login', async () => {
    const credentials = {
        email: 'testuser@gmail.com',
        password: 'test123',
    }
    const res = await request(app).post('/users/login').send(credentials);
    token = res.body.token;
    expect(res.status).toBe(200);
    expect(res.body.token).toBeDefined();
    expect(res.body.user.email).toBe(credentials.email);
});

test('GET /users', async () => {
    const res = await request(app).get('/users').set("Authorization",`Bearer ${token}`);
    expect(res.status).toBe(200);
    expect(res.body).toBeInstanceOf(Array);
});



test('POST /users/login', async () => {
    const credentials = {
        email: 'incorrecto@gmail.com',
        password: 'incorrecto123',
    }
    const res = await request(app).post('/users/login').send(credentials);
    expect(res.status).toBe(401);
    
});


test('DELETE /users/:id', async () => {
    const res = await request(app).delete(`/users/${id}`).set("Authorization",`Bearer ${token}`);
    expect(res.status).toBe(204); 
});

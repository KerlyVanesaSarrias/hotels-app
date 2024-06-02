const request = require('supertest');
const app = require('../app');
let token;

beforeAll(async() =>{
    const credentials = {
        email:'kerly@gmail.com',
        password:'KVSR123',
    }

    const res =  await request(app).post('/users/login').send(credentials);
    token = res.body.token;
})


test('GET /cities', async () => {
    const res = await request(app).get('/cities');
    expect(res.status).toBe(200);
    expect(res.body).toBeInstanceOf(Array);
});

test('POST /cities', async () => {

    const newCity = {
        name: 'Bogotá',
        country: 'Colombia',
        countryId:'CO',
    
    }
    const res = await request(app).post('/cities').send(newCity).set("Authorization",`Bearer ${token}`);
    id= res.body.id;
    expect(res.status).toBe(201);
    expect(res.body.id).toBeDefined();
    expect(res.body.name).toBe(newCity.name)
});

test('DELETE /cities/:id', async () => {
    const res = await request(app).delete(`/cities/${id}`).set("Authorization",`Bearer ${token}`);
    expect(res.status).toBe(204); 
});
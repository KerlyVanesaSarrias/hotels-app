const request = require('supertest');
const app = require('../app');
let token;
let id;

beforeAll(async() =>{
    const credentials = {
        email:'kerly@gmail.com',
        password:'KVSR123',
    }

    const res =  await request(app).post('/users/login').send(credentials);
    token = res.body.token;
})

test('GET /hotels', async () => {
    const res = await request(app).get('/hotels');
    expect(res.status).toBe(200);
    expect(res.body).toBeInstanceOf(Array);
});

test('POST /hotels', async () => {

    const newHotels = {
        name: 'name test',
        description: 'description test',
        price:'1000',
        address:'address test' ,
        lat: '123',
        lon:'123' ,
    
    }
    const res = await request(app).post('/hotels').send(newHotels).set("Authorization",`Bearer ${token}`);
    id= res.body.id;
    expect(res.status).toBe(201);
    expect(res.body.id).toBeDefined();
    expect(res.body.name).toBe(newHotels.name)
});

test('DELETE /hotels/:id', async () => {
    const res = await request(app).delete(`/hotels/${id}`).set("Authorization",`Bearer ${token}`);
    expect(res.status).toBe(204); 
});
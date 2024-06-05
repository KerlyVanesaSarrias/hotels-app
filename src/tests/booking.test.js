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

test('GET /bookings', async () => {
    const res = await request(app).get('/bookings').set("Authorization",`Bearer ${token}`);
    expect(res.status).toBe(200);
    expect(res.body).toBeInstanceOf(Array);
});


test('POST /bookings', async () => {

    const newbookings = {
        checkIn: "2024-05-05T00:00:00.000Z",
        checkOut: "2024-05-06T00:00:00.000Z"
    }
    const res = await request(app).post('/bookings').send(newbookings).set("Authorization",`Bearer ${token}`);
    id= res.body.id;
    expect(res.status).toBe(201);
    expect(res.body.id).toBeDefined();
    expect(res.body.checkIn).toBe(newbookings.checkIn)
});

test('DELETE /bookings/:id', async () => {
    const res = await request(app).delete(`/bookings/${id}`).set("Authorization",`Bearer ${token}`);
    expect(res.status).toBe(204); 
});
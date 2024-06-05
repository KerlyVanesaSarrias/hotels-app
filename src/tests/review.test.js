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

test('GET /reviews', async () => {
    const res = await request(app).get('/reviews').set("Authorization",`Bearer ${token}`);
    expect(res.status).toBe(200);
    expect(res.body).toBeInstanceOf(Array);
});


test('POST /reviews', async () => {

    const newReviews = {
        rating: "5",
        comment: 'This is a test review',
    }
    const res = await request(app).post('/reviews').send(newReviews).set("Authorization",`Bearer ${token}`);
    id= res.body.id;
    expect(res.status).toBe(201);
    expect(res.body.id).toBeDefined();
    expect(res.body.rating).toBe(newReviews.rating)
});

test('DELETE /reviews/:id', async () => {
    const res = await request(app).delete(`/reviews/${id}`).set("Authorization",`Bearer ${token}`);
    expect(res.status).toBe(204); 
});
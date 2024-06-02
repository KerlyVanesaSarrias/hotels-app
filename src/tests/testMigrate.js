const sequelize = require('../utils/connection');
const request = require('supertest');
const app = require('../app');

const main = async() => {
    try{
        // Acciones a ejecutar antes de los tests
        sequelize.sync();

        const testUser = {
            firstName: 'Kerly',
            lastName: 'Sarrias',
            email:'kerly@gmail.com',
            password:'KVSR123',
            gender: 'female',
        }
        await request(app).post('/users').send(testUser);
        process.exit();
    } catch(error){
        console.log(error);
    }
}

main();
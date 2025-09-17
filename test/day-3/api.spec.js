// describe('API Tests', () => { api login
// context('GET /users', () => { field username
// it -> username valid
// it -> username tidak valid
// it -> username kosong
// it -> username salah
const expect = require('chai').expect;
const request = require('supertest');

let a = 1;
const method = 'GET';
const url = 'https://fakerestapi.azurewebsites.net';
const endpoint = '/api/v1/Activities';
const body = {
    "id": 43,
    "title": "string",
    "dueDate": "2024-06-24T07:51:49.905Z",
    "completed": true
};

const parameter = {
    // 'origin': 1,
    // limit: 10
};
const headers = {
    // 'Authorization
    'x-access-token': 'string',
    'Content-Type': 'application/json'
};

describe('API Automation Activity', function() {
    // context('API GET', function() {
    //     it('success, 200', async function() {
    //         const response = await request(url).get(endpoint).send(body);

    //         expect(response.statusCode).to.equal(200);
    //         expect(response.body[0].title).to.equal('Activity 1');
    //     });
    // });
    // context('API POST', function() {
    //     it('failed', async function() {
    //         const response = await request(url).post(endpoint).send(body);
            
    //         console.log('response.body');
    //         console.log(response.body);
    //     });
    // })
    context('API POST', function() {
        it('success, 201', async function() {
            const response = await request(url).post(endpoint).send(body);

            expect(response.statusCode).to.equal(201);
            expect(response.body.title).to.equal('string');
        });
    });
});

// describe ('API Autimation activity', function() {
//     context('API GET', function() {
//         // it ('success, 200', function() {
//         //     console.log('success, 200');
//         //     expect(a).to.equal(1);
//         // });
//         // it ('failed, 400', function() {
//         //     console.log('gagal, 400');
//         // })
//         // it ('failed, 401', function() {
//         //     expect(a).to.equal(34);
//         // })

//         it ('success, 200', async function(){
//             const response = await request (url).get(endpoint);
//             // console.log('response.statusCode');
//             // console.log(response.statusCode);
//             // console.log('response.body');
//             // console.log(response.body);

//             expect(response.statusCode).to.equal(200);
//             expect(response.body[0].title).to.equal('Activity 1');
        
//         it ('failed', async function() {
//             const response = await request (url).get(endpoint);
            
//             expect(response.body[0].title).to.equal('Activity 3');
//         })

//         })
//     })
// })
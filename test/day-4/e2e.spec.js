const request = require('supertest');
const expect = require('chai').expect;

const url = 'https://restful-booker.herokuapp.com';
const endpoint1 = '/auth';
const endpoint2 = '/booking/425';
const body = {
    "username" : "admin",
    "password" : "password123"
};

describe('e2e api testing', async function() {
    it ('createToken', async function() {
        const response = await request(url).post(endpoint1);
        
        // console.log(response.body.token)
        token = 'Basic YWRtaW46cGFzc3dvcmQxMjM='
    });

    it ('deteleBooking', async function() {
        let id = 1145;
        const endpoint2 = `/booking/${id}`;
        const headers = {
            Authorization : token
        };

        const response2 = await request(url).delete(endpoint2)
            .set(headers);
        
    });
});
require('dotenv').config();
const request = require('supertest');
const expect = require('chai').expect;

const BASE_URL = 'https://restful-booker.herokuapp.com';

describe('E2E API Testing - Auth & Delete Booking', function() {
    let token = '';

    it('should get auth token', async function() {
        const response = await request(BASE_URL)
            .post('/auth')
            .send({
                username: process.env.API_USERNAME,
                password: process.env.API_PASSWORD
            })
            .set('Accept', 'application/json');
        expect(response.status).to.equal(200);
        expect(response.body).to.have.property('token');
        token = response.body.token;
    });

    it('should delete booking with token', async function() {
        const bookingId = 1; // Ganti dengan ID booking yang valid
        const response = await request(BASE_URL)
            .delete(`/booking/${bookingId}`)
            .set('Cookie', `token=${token}`);
        // Status code: 201 (deleted), 403 (forbidden), 405 (method not allowed)
        expect([201, 403, 405]).to.include(response.status);
    });
});
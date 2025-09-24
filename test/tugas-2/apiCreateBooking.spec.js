const request = require('supertest');
const expect = require('chai').expect;
const bookingData = require('../../cypress/fixtures/bookingData.json');

const BASE_URL = 'https://restful-booker.herokuapp.com';

describe('E2E API Testing - Create Booking', function() {
    it('should create a new booking and return bookingId', async function() {
        const response = await request(BASE_URL)
            .post('/booking')
            .send(bookingData)
            .set('Accept', 'application/json');

        // Expect status code sesuai dokumentasi (200)
        expect(response.status).to.equal(200);

        // Expect response ada bookingid dan booking
        expect(response.body).to.have.property('bookingid');
        expect(response.body).to.have.property('booking');

        // Expect isi body booking sesuai dengan data request
        // Beberapa API bisa mengubah tipe data (misal: "totalprice" jadi string), gunakan include untuk fleksibilitas
        Object.keys(bookingData).forEach(key => {
            expect(response.body.booking).to.have.property(key);
            expect(response.body.booking[key]).to.deep.equal(bookingData[key]);
        });
    });
});
const request = require('supertest');
const expect = require('chai').expect;
const bookingData = require('../../cypress/fixtures/bookingData');

const BASE_URL = 'https://restful-booker.herokuapp.com';

describe('E2E API Testing - Create & Get Booking', function() {
    let bookingId;

    it('should create a new booking and return bookingId', async function() {
        const response = await request(BASE_URL)
            .post('/booking')
            .send(bookingData)
            .set('Accept', 'application/json');

        expect(response.status).to.equal(200);
        expect(response.body).to.have.property('bookingid');
        expect(response.body).to.have.property('booking');
        bookingId = response.body.bookingid;

        // Pastikan data booking sama dengan request
        Object.keys(bookingData).forEach(key => {
            expect(response.body.booking).to.have.property(key);
            expect(response.body.booking[key]).to.deep.equal(bookingData[key]);
        });
    });

    it('should get booking and ensure data is same as created', async function() {
        const response = await request(BASE_URL)
            .get(`/booking/${bookingId}`)
            .set('Accept', 'application/json');

        expect(response.status).to.equal(200);

        // Pastikan isi body sama dengan data saat create
        Object.keys(bookingData).forEach(key => {
            expect(response.body).to.have.property(key);
            expect(response.body[key]).to.deep.equal(bookingData[key]);
        });
        expect(response.body).to.have.property('firstname');
        console.log('Firstname:', response.body.firstname);
    });
});
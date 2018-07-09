const request = require('supertest');
const { expect } = require('chai');

const app = require('../index');

describe('API Tests', () => {
    it('POST /api/questions', (done) => {
        request(app)
            .post('/api/questions')
            .send({ text: 'test question', subject: 'test', author: 'supertest' })
            .set('Accept', 'application/json')
            .expect(200)
            .end(function (err, res) {
                if (err) return done(err);
                done();
            });
    });
});



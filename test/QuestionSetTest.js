const request = require('supertest');
const { expect } = require('chai');

const app = require('../index');

describe('API Tests', () => {
    it('POST /api/questionSets', (done) => {
        request(app)
            .post('/api/questionSets')
            .send({ question1: 'test question 1', question2: 'test question 2', subject: 'test', author: 'supertest' })
            .set('Accept', 'application/json')
            .expect(200)
            .end(function (err, res) {
                if (err) return done(err);
                done();
            });
    });
});



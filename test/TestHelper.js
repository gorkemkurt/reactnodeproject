const mongoose = require('mongoose');
const keys = require('../config/keys');

// mongoose.Promise = global.Promise;

before((done) => {
    mongoose.connect(keys.mongoTestURI);
    mongoose.connection
        .once('open', () => {
            done();
            console.log('Connected to test db.');
        })
        .on('error', (error) => console.warn('Warning', error));
});


beforeEach((done) => {
    // const { questions } = mongoose.connection.collections;
    // questions.drop(() => {
        done();
    // });
});
const mongoose = require('mongoose');
const keys = require('../config/keys');

mongoose.connect(keys.mongoTestURI);
mongoose.connection
    .once('open', () => console.log('Good To Go'))
    .on('error', (error) => console.warn('Warning', error));
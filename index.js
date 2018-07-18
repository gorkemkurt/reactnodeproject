const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const passport= require('passport');
const GoogleStrategy = require('passport-google-oauth20').Strategy;
const keys = require('./config/keys');
require('./models/QuestionSet');
require('./models/UserIpQuestionSet');
const router = require('./router/index');

mongoose.Promise = global.Promise;
mongoose.connect(keys.mongoURI);

const app = express();

passport.use(new GoogleStrategy());
//clienId 722242298510-2sa5ug4ctcpcki5jd805t48ckh23mcvr.apps.googleusercontent.com
//clientSecret syJnmqUgifKCrItSapr1Ac6O
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({     // to support URL-encoded bodies
    extended: true
}));
app.use((req, res, next) => {
    res.header('Content-Type', 'application/json');
    res.header('Access-Control-Allow-Origin', "*");
    // res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE');
    // res.header('Access-Control-Allow-Headers', 'Content-Type');
    next();
});

router(app);

app.listen(5000);

module.exports = app;
const mongoose = require('mongoose');
const validateQuestionSet = require('../../middlewares/validateQuestionSet');

const QuestionSet = mongoose.model('questionSets');
const UserIpQuestionSet = mongoose.model('userIpQuestionSets');

module.exports = app => {
    app.get('/api/questionSets', async (req, res) => {
        // let clientIp = req.ip;
        // if (clientIp.substr(0, 7) == "::ffff:") {
        //     clientIp = clientIp.substr(7);
        // }
        // read client ip and answered questions from database, and fetch an unanswered question
        // const questionSetIds = await UserIpQuestionSet.find({ userIp: clientIp }).select();
        // const questionSet = await QuestionSet.findOne({ "_id": { "$nin": questionSetIds } }).select();
        // console.log(questionSet);
        // res.send({ questionSet: questionSet });
    });

    app.post('/api/questionSets', validateQuestionSet, async (req, res) => {
        const { question1, question2, subject, author } = req.body;
        const questionSet = await new QuestionSet({ question1, question2, subject, author }).save();
        res.send({ result: 'Question Set is created.' });
    })
};
const mongoose = require('mongoose');
const validateQuestionSet = require('../../middlewares/validateQuestionSet');

const QuestionSet = mongoose.model('questionSets');
const UserIdQuestionSet = mongoose.model('userIdQuestionSets');
const QuestionSetResult = mongoose.model('questionSetResult');

module.exports = app => {
    app.get('/api/questionSets', async (req, res) => {
        const userId = req.user.id ? req.user.id : "";
        // read client ip and answered questions from database, and fetch an unanswered question
        const questionSetIds = await UserIdQuestionSet.find({ userId: userId }).select();
        const questionSet = await QuestionSet.findOne({ "_id": { "$nin": questionSetIds } }).select();
        console.log(questionSet);
        res.send({ questionSet: questionSet });
        // let clientIp = req.ip;
        // if (clientIp.substr(0, 7) == "::ffff:") {
        //     clientIp = clientIp.substr(7);
        // }
    });

    app.post('/api/questionSets', validateQuestionSet, async (req, res) => {
        const { question1, question2, subject, author } = req.body;
        const questionSet = await new QuestionSet({ question1, question2, subject, author }).save();
        res.send({ result: 'Question Set is created.' });
    });

    app.post('/api/questionAnswer', async (req, res) => {
        const { questionSet, answer } = req.body;
        if (answer === '1') {
            if (questionSet.result1) {

            } else {
                questionSet.result1 = new QuestionSetResult({ totalVote: 1 });
            }
        } else if (answer === '2') {

        }
        console.log(questionSet.result1);
        // const questionSet = await new QuestionSet({ question1, question2, subject, author }).save();
        res.send({ result: 'Question Set is created.' });
    })
};
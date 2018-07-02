const mongoose = require('mongoose');

const Question = mongoose.model('questions');

module.exports = app => {
    app.post('/api/questions', async (req, res) => {
        const { text, subject, author } = req.body;
        const question = await new Question({ text, subject, author }).save();
        res.json(question._id);
    })
};
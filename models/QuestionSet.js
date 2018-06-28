const mongoose = require('mongoose');
const { Schema } = mongoose;
const QuestionSchema = require('./Question');

const questionSetSchema = new Schema({
  questions: [QuestionSchema]
});

mongoose.model('questionSets', questionSetSchema);

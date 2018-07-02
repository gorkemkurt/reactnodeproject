const mongoose = require('mongoose');
const { Schema } = mongoose;
// const QuestionSchema = require('./Question');

const questionSetSchema = new Schema({
  // questions: [QuestionSchema],
  createdDate: {type: Date, default: Date.now}
});

mongoose.model('questionSets', questionSetSchema);

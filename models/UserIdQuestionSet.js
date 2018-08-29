const mongoose = require('mongoose');
const { Schema } = mongoose;

const userIdQuestionSetSchema = new Schema({
  userId: { type: String, unique: true },
  questionSetIds: [String]
});

mongoose.model('userIdQuestionSets', userIdQuestionSetSchema);

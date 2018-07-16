const mongoose = require('mongoose');
const { Schema } = mongoose;

const userIpQuestionSetSchema = new Schema({
  userIp: { type: String, unique: true },
  questionSetIds: [String]
});

mongoose.model('userIpQuestionSets', userIpQuestionSetSchema);

const mongoose = require('mongoose');
const { Schema } = mongoose;

const questionSchema = new Schema({
  text: { type: String, required: true },
  subject: String
});

mongoose.model('questions', questionSchema);

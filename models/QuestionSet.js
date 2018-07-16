const mongoose = require('mongoose');
const { Schema } = mongoose;

const questionSetSchema = new Schema({
  question1: String,
  question2: String,
  subject: String,
  author: String,
  likes: Number,
  dislikes: Number,
  shareCount: Number,
  createdDate: { type: Date, default: Date.now }
});

questionSetSchema.methods.toJSON = function () {
  var obj = this.toObject();
  delete obj.createdDate;
  delete obj._id;
  delete obj.__v;
  return obj;
}

mongoose.model('questionSets', questionSetSchema);

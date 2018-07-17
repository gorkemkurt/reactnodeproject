const mongoose = require('mongoose');
const { Schema } = mongoose;

const questionSetResultSchema = new Schema({
  totalVote: Number,
  countryMap: {
    type: Map,
    of: Number
  }
});

mongoose.model('questionSetResults', questionSetResultSchema);

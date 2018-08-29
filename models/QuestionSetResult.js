const mongoose = require('mongoose');
const { Schema } = mongoose;

const questionSetResultSchema = new Schema({
  totalVote: {
    type: Number,
    default: 0
  },
  countryMap: {
    type: Map,
    of: Number
  }
});

mongoose.model('questionSetResults', questionSetResultSchema);

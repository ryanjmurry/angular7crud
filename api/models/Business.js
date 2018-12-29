const mongoose = require('mongoose');
const Scheme = mongoose.Schema;

let Business = new Schema(
  {
    person_name: {
      type: String
    },
    business_name: {
      type: String
    },
    business_gst_number: {
      type: Number
    }
  },
  {
    collection: 'business'
  }
);

module.exports = mongoose.model('Business', Business);
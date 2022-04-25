const { Schema, model } = require('mongoose');
const dateFormat = require('../utils/dateFormat');


const message = new Schema(
  {
    username: {
      type: String,
      required: true,
      unique: false,
      trim: true
    },
    email: {
      type: String,
      required: true,
      unique: false,
      match: [/.+@.+\..+/, 'Must match an email address!']
    },
    messageText: {
      type: String,
      required: 'You need to leave a thought!',
      minlength: 1,
      maxlength: 280
    },
    createdAt: {
      type: Date,
      default: Date.now,
      get: timestamp => dateFormat(timestamp)
    },
  },
  {
    toJSON: {
      getters: true
    }
  }
);

const Message = model('Message', message);

module.exports = Message;

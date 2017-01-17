const mongoose = require('mongoose');

const UserArticles = new mongoose.Schema({
  url: {
    type: String,
    required: true,
    unique: true
  },
  title: {
    type: String,
    required: true,
    unique: true
  },
  author: String,
  date: {
    type: Date,
    required: true,
    unique: false
  },
  created_at: {
    type: Date,
    default: Date.now
  }
});

module.exports = mongoose.model('user_articles', UserArticles);

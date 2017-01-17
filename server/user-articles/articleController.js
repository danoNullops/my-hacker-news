const Q = require('q');
const UserArticles = require('./articleModel');

const getUserArticles = Q.nbind(UserArticles.find, UserArticles);
const createUserArticle = Q.nbind(UserArticles.create, UserArticles);

module.exports.findUserArticles = (req, res, next) => {
  getUserArticles()
    .then(articles => {
      if (!articles) {
        next(new Error('No user saved articles exists.'));
      }
      res.send(JSON.stringify(articles));
    })
    .fail(err => {
      next(err);
    });
};

module.exports.addArticle = (req, res, next) => {
  const {
    url,
    title,
    author,
    date,
    created_at
  } = req.body;

  createUserArticle({ url, title, author, date, created_at })
    .then(resp => {
      console.log('Save Article Response: ', resp);
      res.send(resp);
    })
    .fail(err => {
      next(err);
    });
};

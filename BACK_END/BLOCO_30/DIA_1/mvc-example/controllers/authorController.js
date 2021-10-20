const Author = require('../models/Author');

const listAuthors = async (req, res) => {
  const authors = await Author.getAll();

  res.status(200).render('authors/index', { authors, me: 'Gustavo Sousa' });
};

module.exports = {
  listAuthors
}
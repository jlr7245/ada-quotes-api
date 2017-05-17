const db = require('../db/config');

const Category = {};

Category.findAll = () => {
  return db.query('SELECT genres.genre_type, genres.id, COUNT(*) AS num_quotes FROM genres JOIN quotes ON quotes.genre_id = genres.id GROUP BY genres.genre_type, genres.id ORDER BY genres.id ASC');
};

Category.findById = id => {
  return db.query('SELECT quotes.content, quotes.author, genres.genre_type, quotes.id FROM quotes JOIN genres ON genres.id = quotes.genre_id WHERE genres.id = $1', [id]);
};

module.exports = Category;
const db = require('../db/config');

const Quote = {};

Quote.findAll = () => {
  return db.query('SELECT quotes.content, quotes.author, quotes.id, genres.genre_type FROM quotes JOIN genres ON quotes.genre_id = genres.id ORDER BY quotes.id ASC');
};

Quote.findById = id => {
  return db.oneOrNone('SELECT quotes.content, quotes.author, quotes.id, genres.genre_type FROM quotes JOIN genres ON quotes.genre_id = genres.id WHERE quotes.id = $1', [id]);
};

Quote.create = quote => {
  return db.one(
    `
      INSERT INTO quotes
      (content, author, genre_id)
      VALUES ($1, $2, $3) RETURNING *
    `,
    [quote.content, quote.author, quote.genre_id]
  );
};

Quote.update = (quote, id) => {
  return db.one(
    `
      UPDATE quotes SET
      content = $1,
      author = $2,
      genre_id = $3
      WHERE id = $4
      RETURNING *
    `,
    [quote.content, quote.author, quote.genre_id, id]
  );
};

Quote.destroy = id => {
  return db.none(
    `
      DELETE FROM quotes
      WHERE id = $1
    `,
    [id]
  );
};

module.exports = Quote;

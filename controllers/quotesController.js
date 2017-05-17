const Quote = require('../models/quote');

const quotesController = {};

quotesController.index = (req, res) => {
  Quote.findAll()
    .then(quotes => {
      res.json({ message: 'ok',
        quotesData: quotes,
      });
    })
    .catch(err => {
      console.log(err);
      res.status(400).json({message: '400', err});
    });
};

quotesController.show = (req, res) => {
  Quote.findById(req.params.id)
    .then(quote => {
      res.json({
        message: 'ok',
        quote: quote,
      });
    })
    .catch(err => {
      res.status(400).json({message: '400', err});
    });
};

quotesController.create = (req, res) => {
  Quote.create({
      content: req.body.content,
      author: req.body.author,
      genre_id: req.body.genre_id,
    })
    .then(quote => {
      res.json({message: 'ok', quote: quote});
    })
    .catch(err => {
      res.status(400).json({message: '400', err});
    });
};

quotesController.edit = (req, res) => {
  Quote.findById(req.params.id)
    .then(quote => {
      console.log(quote);
      res.json({
        message: 'ok',
        quote: quote,
        id: req.params.id,
      });
    })
    .catch(err => {
      res.status(400).json({message: '400', err});
    });
};

quotesController.update = (req, res) => {
  Quote.update({
      content: req.body.content,
      author: req.body.author,
      genre_id: req.body.genre_id,
    }, req.params.id)
    .then(quote => {
      res.json({message: 'ok', quote: quote});
    })
    .catch(err => {
      res.status(400).json(err);
    });
};

quotesController.destroy = (req, res) => {
  Quote.destroy(req.params.id)
    .then(() => {
      res.json({message: 'quote deleted'});
    })
    .catch(err => {
      res.status(400).json(err);
    });
};

module.exports = quotesController;

const express = require('express');
const quotesController = require('../controllers/quotesController');

const quoteRoutes = express.Router();

quoteRoutes.get('/', quotesController.index);
quoteRoutes.get('/edit/:id', quotesController.edit);
quoteRoutes.get('/:id', quotesController.show);
quoteRoutes.post('/', quotesController.create);
quoteRoutes.put('/:id', quotesController.update);
quoteRoutes.delete('/:id', quotesController.destroy);

module.exports = quoteRoutes;

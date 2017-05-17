const express = require('express');
const categoriesController = require('../controllers/categoriesController');

const categoriesRoutes = express.Router();

categoriesRoutes.get('/', categoriesController.index);
categoriesRoutes.get('/:id', categoriesController.show);

module.exports = categoriesRoutes;
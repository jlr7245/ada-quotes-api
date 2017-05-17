const Categories = require('../models/categories');

const categoriesController = {};

categoriesController.index = (req, res) => {
  Categories.findAll()
    .then(categories => {
      res.json({
        message: 'ok',
        categoriesData: categories,
      });
    })
    .catch(err => {
      console.log(err);
      res.status(400).json(err);
    });
};

categoriesController.show = (req, res) => {
  Categories.findById(req.params.id)
    .then(category => {
      res.json({
        message: 'ok',
        category: category,
      });
    });
};

module.exports = categoriesController;
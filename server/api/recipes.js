const router = require('express').Router();
const { Recipe, RecipeIngredient } = require('../db/models');

router.get('/', (req, res, next) => {
  Recipe.findAll()
    .then(recipe => res.json(recipe))
    .catch(next)
})

router.get('/:id', (req, res, next) => {
  Recipe.findById(req.params.id)
  .then(recipe => res.json(recipe))
  .catch(next)
})

router.post('/', function (req, res, next) {
  Recipe.create(req.body)
  .then(recipe => res.json(recipe))
  .catch(next)
})

module.exports = router;

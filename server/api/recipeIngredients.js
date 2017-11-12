const router = require('express').Router();
const { RecipeIngredient } = require('../db/models');

router.get('/', (req, res, next) => {
  RecipeIngredient.findAll()
    .then(recipe => res.json(recipe))
    .catch(next)
})

router.get('/recipe/:recipeId', (req, res, next) => {
  RecipeIngredient.findAll({
      where: {recipeId: req.params.recipeId}
    })
  .then(recipes => res.json(recipes))
  .catch(next)
})

router.post('/', function (req, res, next) {
  RecipeIngredient.create(req.body)
  .then(recipe => res.json(recipe))
  .catch(next)
})

module.exports = router;

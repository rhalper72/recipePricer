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
  .then(recipeIngredients => {
    console.log('!!!!!!!!!!!!!!!!!!!!', recipeIngredients)
    res.json(recipeIngredients)
  })
  .catch(next)
})

router.post('/', function (req, res, next) {
  RecipeIngredient.create(req.body)
  .then(recipeIng => res.json(recipeIng))
  .catch(next)
})

router.put('/:id', (req, res, next) => {
  RecipeIngredient.update(req.body, {
    where: {id: req.params.id}, returning: true
  })
  .then((recipeIng) => res.json(recipeIng))
  .catch(next)
})

module.exports = router;

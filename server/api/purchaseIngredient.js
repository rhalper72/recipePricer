const router = require('express').Router();
const { PurchaseIngredient } = require('../db/models');

router.get('/', (req, res, next) => {
  PurchaseIngredient.findAll()
    .then(purchIngredients => res.json(purchIngredients))
    .catch(next)
})

router.get('/ingredient/:ingredientId', (req, res, next) => {
  PurchaseIngredient.findOne({
      where: {ingredientId: req.params.ingredientId}
    })
  .then(purchIngredient => res.json(purchIngredient))
  .catch(next)
})

router.post('/', function (req, res, next) {
  PurchaseIngredient.create(req.body)
  .then(purchIngredient => res.json(purchIngredient))
  .catch(next)
})

module.exports = router;

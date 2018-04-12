const router = require('express').Router();
const { PurchaseIngredient } = require('../db/models');

router.get('/', (req, res, next) => {
  PurchaseIngredient.findAll()
    .then(ingredients => res.json(ingredients))
    .catch(next)
})

router.post('/', function (req, res, next) {
  PurchaseIngredient.create(req.body)
  .then(ingredient => res.json(ingredient))
  .catch(next)
})

module.exports = router;

const router = require('express').Router();
const { Ingredient } = require('../db/models');

router.get('/', (req, res, next) => {
  Ingredient.findAll()
    .then(recipe => res.json(recipe))
    .catch(next)
})

module.exports = router;

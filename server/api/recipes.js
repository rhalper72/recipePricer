const router = require('express').Router();
const { Recipe } = require('../db/models');

router.get('/', function (req, res, next) {
  Recipe.findAll()
    .then(recipe => res.json(recipe))
    .catch(next)
})

router.post('/', function (req, res, next) {
  Recipe.create(req.body)
  .then(recipe => res.json(recipe))
  .catch(next)
})

module.exports = router;

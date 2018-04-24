const User = require('./user')
const Ingredient = require('./ingredient');
const RecipeIngredient = require('./recipeIngredient');
const PurchaseIngredient = require('./purchaseIngredient');
const Recipe = require('./recipe');
const RecipePrice = require('./recipePrice');

//Associations
//one (Recipe) to many (Recipe Ingredients)
RecipeIngredient.belongsTo(Recipe);
Recipe.hasMany(RecipeIngredient, {Cascade: true});
//one(Ingredient) to many (Recipe Ingredients)... do I want cascade delete???
RecipeIngredient.belongsTo(Ingredient);
Ingredient.hasMany(RecipeIngredient, {Cascade: true});
//one(Ingredient) to many (Purchase Ingredients)... do I want cascade delete???
PurchaseIngredient.belongsTo(Ingredient);
Ingredient.hasMany(PurchaseIngredient, {Cascade: true});
//one (User) to many (Purchase Ingredients)
PurchaseIngredient.belongsTo(User);
User.hasMany(PurchaseIngredient, {Cascade: true});
//one (User) to many (Recipes)
Recipe.belongsTo(User);
User.hasMany(Recipe, {Cascade: true});
//one (Recipe) to many (RecipePrices)
RecipePrice.belongsTo(Recipe);
Recipe.hasMany(RecipePrice, {Cascade: true});

//Still need models/associations Collection

module.exports = {
  User,
  Ingredient,
  Recipe,
  PurchaseIngredient,
  RecipeIngredient,
  RecipePrice
}

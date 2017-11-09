const User = require('./user')
const Ingredient = require('./ingredient');
const RecipeIngredient = require('./recipeIngredient');
const PurchaseIngredient = require('./purcahseIngredient');
const Recipe = require('./recipe');

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

//Still need models/associations for Conversion and Collection

//OLD CODE TO DELETE
// Ingredient.belongsToMany(Recipe, {through: 'recipe_ingredient'});
// FinalProduct.belongsToMany(Recipe, {through: 'finalProduct_recipe'});
// User.hasMany(Recipe);
// Ingredient.hasOne(Conversion);

module.exports = {
  User,
  Conversion,
  FinalProduct,
  Ingredient,
  Recipe,
  PurchaseIngredient,
  RecipeIngredient,
}

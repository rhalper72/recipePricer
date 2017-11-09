const Sequelize = require('sequelize');
const db = require('../db')

const RecipeIngredient = db.define('recipeIngredient', {
    recipeQuantity: {
        type: Sequelize.DECIMAL,
        allowNull: false
    },
    recipeUnit: {
        type: Sequelize.ENUM('Cups', 'Ounces', 'Tablespoons'),
    },

});

module.exports = RecipeIngredient;

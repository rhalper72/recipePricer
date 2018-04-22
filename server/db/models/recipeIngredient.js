const Sequelize = require('sequelize');
const db = require('../db')

const RecipeIngredient = db.define('recipeIngredient', {
    recipeQuantity: {
        type: Sequelize.DECIMAL,
        allowNull: false
    },
    recipeUnit: {
        type: Sequelize.ENUM('Cups (C)', 'Teaspoons (t)', 'Tablespoons (T)', 'Grams (g)', 'Ounces (oz)', 'Pounds (lbs)', 'Each (per)'),
    },

}, {
    defaultScope: {
        include: [{all: true}]
    }
});

module.exports = RecipeIngredient;

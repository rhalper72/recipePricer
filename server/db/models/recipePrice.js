const Sequelize = require('sequelize');
const db = require('../db')

const RecipePrice = db.define('recipePrice', {
    pricePerBatch: {
        type: Sequelize.FLOAT,
        allowNull: false
    },
    serving: {
        type: Sequelize.DECIMAL,
    },
    batches: {
        type: Sequelize.DECIMAL,
    }
});

module.exports = RecipePrice;

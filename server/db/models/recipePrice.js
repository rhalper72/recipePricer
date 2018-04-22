const Sequelize = require('sequelize');
const db = require('../db')

const RecipePrice = db.define('recipePrice', {
    pricePerBatch: {
        type: Sequelize.FLOAT,
        allowNull: false
    },
    serving: {
        type: Sequelize.DECIMAL,
        defaultValue: 1,
    },
    batches: {
        type: Sequelize.DECIMAL,
        defaultValue: 1,
    }
});

module.exports = RecipePrice;

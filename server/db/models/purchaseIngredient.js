const Sequelize = require('sequelize');
const db = require('../db')

const PurchaseIngredient = db.define('purchaseIngredient', {
    purchasePrice: {
        type: Sequelize.DECIMAL,
        defaultValue: 0,
    },
    purchaseQuantity: {
        type: Sequelize.DECIMAL,
        defaultValue: 0,
    },
    purchaseUnit: {
        type: Sequelize.ENUM('Pounds', 'Ounces', 'Cups', 'Each'),
        defaultValue: 'Ounces',
    },

});

module.exports = PurchaseIngredient;

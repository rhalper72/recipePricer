const Sequelize = require('sequelize');
const db = require('../db')

const Recipe = db.define('recipe', {
    name: {
        type: Sequelize.STRING,
        allowNull: false
    },
    image: {
        type: Sequelize.TEXT,
        defaultValue: 'https://us.123rf.com/450wm/pixelbliss/pixelbliss1503/pixelbliss150300041/37890588-open-blank-recipe-book-surrounded-with-ingredients.jpg?ver=6'
    },
    serving: {
        type: Sequelize.DECIMAL,
    },
    batches: {
        type: Sequelize.DECIMAL,
    },
});

module.exports = Recipe;

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
        defaultValue: 1,
    },
    batches: {
        type: Sequelize.DECIMAL,
        defaultValue: 1,
    },
}, {
    defaultScope: {
        inclue: [{all: true}]
    }
});

module.exports = Recipe;

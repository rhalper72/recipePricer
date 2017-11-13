const Sequelize = require('sequelize');
const db = require('../db')

const Conversion = db.define('conversion', {
    source: {
        type: Sequelize.STRING,
        allowNull: false
    },
    target: {
        type: Sequelize.STRING,
        allowNull: false
    },
    conversion: {
        type: Sequelize.DECIMAL,
        allowNull: false
    },
});

module.exports = Conversion;

const { DataTypes } = require('sequelize');
const sequelize = require('../utils/connection');

const Image = sequelize.define('images', {
    url: {
        type: DataTypes.STRING,
        allowNull: false
    },

    //hotelId
});

module.exports = Image;
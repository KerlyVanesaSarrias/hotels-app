const { DataTypes } = require('sequelize');
const sequelize = require('../utils/connection');

const Review = sequelize.define('Reviews', {
    rating: {
        type: DataTypes.DECIMAL,
        allowNull: false
    },
    comment: {
        type: DataTypes.STRING,
        allowNull: false
    },

    //userId
//hotelId
});

module.exports = Review;
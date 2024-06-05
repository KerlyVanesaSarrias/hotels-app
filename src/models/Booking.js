const { DataTypes } = require('sequelize');
const sequelize = require('../utils/connection');

const Booking = sequelize.define('bookings', {
    checkIn: {
        type: DataTypes.DATE,
        allowNull: false
    },
    checkOut: {
        type: DataTypes.DATE,
        allowNull: false
    },

//userId
//hotelId
});

module.exports = Booking;
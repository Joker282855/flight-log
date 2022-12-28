// name the model we are going to use
const { Model, DataTypes } = require('sequelize');

// import the library that will define our model
const sequelize = require('../config/connection.js');

// inital the model we are using
class Airline extends Model {}

// set up the parameters for our models information and initialize database
Airline.init(
    {
        id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true
        },
        destination_name: {
            type: DataTypes.STRING,
            allowNull: false
        }
    },
    { 
        sequelize,
        timestamps: false,
        freezeTableName: true,
        underscored: true,
        modelName: 'airline'
    }
);

module.exports = Airline;
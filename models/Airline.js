// name the model we are going to use
const { Model, DataTypes } = require('sequelize');

// import the library that will define our model
const sequelize = require('../config/connection');

// inital the model we are using
class Airline extends Model {}

// set up the parameters for our models information and initialize database
Airline.init({
        id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true
        },
        airline_name: {
            type: DataTypes.STRING,
            allowNull: false
        },
        price: {
            type: DataTypes.DECIMAL,
            alowNull: false,
            validate: {
                isDecimal: true
            }
        },
        how_many: {
            type: DataTypes.INTEGER,
            allowNull: false,
            defaultValue: 15,
            validate: {
                isNumeric: true
            }        
        },
    },
    {
        sequelize,
        timestamps: false,
        freezeTableName: false,
        underscored: true,
        modelName: 'airline,'
    }
)

module.exports = Airline;
const { Model, DataTypes } = require('sequelize');

const sequelize = require('../config/connection');

class Weather extends Model {}

Weather.init(
    {
        id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true
        },
        weather_condition: {
            type: DataTypes.STRING,
            allowNull: true
        }
    },
    {
        sequelize,
        freezeTableName: false,
        underscored: true,
        modelName: 'weather'
    }
)

module.exports = Weather;
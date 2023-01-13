const { Model, DataTypes } = require('sequelize');

const sequelize = require('../config/connection');

class Forecast extends Model {}

// initiating the model and its components

Forecast.init(
        {
        id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true
        },
        destination_id: {
            type: DataTypes.INTEGER,
            refereces: {
                model: 'destination',
                key: 'id'
            }
        },
        weather_id: {
            type: DataTypes.INTEGER,
            references: {
                model: 'weather',
                key: 'id'
            }
        }
    },
    {
        sequelize,
        freezeTableName: false,
        underscored: true,
        modelName: 'forecast'
    }
);

module.exprts = Forecast
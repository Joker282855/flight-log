const { Model, DataTypes, INTEGER } = require('sequelize');

const sequelize = require('../config/connection');

class Destination extends Model {}

Destination.init ({
    id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true
    },
    desitnation_name: {
        type: DataTypes.STRING,
        allowNull: false
    },   
},
{
    sequelize,
    timestamps: false,
    freezeTableName: false,
    underscored: true,
    modelName: 'destination'
}
)

module.exports = Destination;
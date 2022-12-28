const { Model, DataTypes } = require('sequelize');

const sequelize = require('../config/connection.js');

class Destination extends Model {}

Destination.init ({
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
        allowNull: false,
        validate: {
            isDecimal: true
        }
    },
    quantity: {
        type: DataTypes.INTEGER,
        allowNull: false,
        validate: {
            isNumeric: true
        }
    },
    airline_id: {
        type: DataTypes.INTEGER,
        references: {
            model: 'airline',
            key: 'id'
        }
    }
},
{
    sequelize,
    freezeTableName: false,
    underscored: true,
    modelName: 'destination'
}
);

module.exports = Destination;
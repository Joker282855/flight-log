const Airline = require('./Airline');

const Destination = require('./Destination');

Airline.belongsTo(Destination, {
    foreignKey: 'destination_id'
});

Destination.hasMany(Airline, {
    foreignKey: 'destination_id'
});

module.exports = { Airline, Destination };
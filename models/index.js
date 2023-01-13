const Airline = require('./Airline');

const Destination = require('./Destination')

const Weather = require('./Weather');

Airline.hasMany(Destination, {
    foreignKey: 'airline_id'
});

Destination.belongsTo(Airline, {
    foreignKey: 'airline_id'
});


module.exports = { Airline, Destination, Weather };
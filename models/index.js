const Airline = require('./Airline');

const Destination = require('./Destination');

Airline.belongsTo(Destination, {
    foreignKey: 'airline_id'
});

Destination.hasMany(Airline, {
    foreignKey: 'airline_id'
})


module.exports = { Airline, Destination };
const Airline = require('./Airline');

const Destination = require('./Destination')

const Weather = require('./Weather');

const Forecast = require('./Forecast');

Airline.hasMany(Destination, {
    foreignKey: 'airline_id'
});

Destination.belongsTo(Airline, {
    foreignKey: 'airline_id'
});

Destination.belongsToMany(Weather, {
    through: Forecast,
    as: 'weather_forecasted',
    foreignKey: 'destination_id'
});

Weather.belongsToMany(Destination, {
    through: Forecast,
    as: 'weather_forecasted',
    foreignKey: 'weather_id'
})

module.exports = { Airline, Destination, Weather, Forecast };
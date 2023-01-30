const { Weather } = require('../models');

const weatherData = [
    {
        weather_condition: 'Sunny',
    },
    {
        weather_condition: 'Coudy',
    },
    {
        weather_condition: 'Partly Cloudy',
    },
    {
        weather_condition: 'Humid',
    },
    {
        weather_condition: 'Windy',
    },
    {
        weather_condition: 'Mostly Sunny',
    },
    {
        weather_condition: 'Sunny',
    },
    {
        weather_condition: 'Rainy',
    },
    {
        weather_condition: 'Mostly Sunny',
    },
    {
        weather_condition: 'Rainy',
    },
];

const seedWeather = () => Weather.bulkCreate(weatherData);

module.exports = seedWeather;
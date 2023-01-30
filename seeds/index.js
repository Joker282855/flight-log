const seedAirline = require('./airline');
const seedDestination = require('./destination');
const seedForecast = require('./forecast');
const seedWeather = require('./weather');

const sequelize = require('../config/connection');

const seedAll = async () => {
    await sequelize.sync({ force: true });
    console.log('DATABASE SYNCED');

    await seedAirline();
    console.log('Airline Seeded');

    await seedDestination();
    console.log('Destination Seeded');

    await seedWeather();
    console.log('Weather Seeded');

    await seedForecast();
    console.log('Forecast Seeded');

    process.exit(0);
};

seedAll();
const router = require('express').Router();

const airlineRoutes = require('./airlline-routes');

const destinationRoutes = require('./destination-routes');

const weatherRoutes = require('./weather-routes');

router.use('/airlines', airlineRoutes)

router.use('/destinations', destinationRoutes)

router.use('/weather', weatherRoutes)

module.exports = router;
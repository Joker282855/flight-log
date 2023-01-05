const router = require('express').Router();

const airlineRoutes = require('./airlline-routes');

const destinationRoutes = require('./destination-routes');

router.use('/airlines', airlineRoutes)

router.use('/destinations', destinationRoutes)

module.exports = router;
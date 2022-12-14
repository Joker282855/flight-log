const router = require('express').Router();

const airlineRoutes = require('./airlline-routes');

router.use('/airlines', airlineRoutes)

module.exports = router;
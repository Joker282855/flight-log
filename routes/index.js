const router = require('express').Router();

const apiRoutes= require('../routes/api');

router.use('/api', apiRoutes);

// this is a way to meaure for errors when the other routes are being collected from the api folder
router.use((req, res) => {

    res.status(404).end();

});

module.exports = router;
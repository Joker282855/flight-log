const router = requrie('express').Router();
const { Airline } = require('../../models');

// gets all of the information for the ariline
router.get('/', (req, res) => {
    Airline.findAll()

        .then(dbAirlineData => res.json(dbAirlineData))
        
        .catch(err => {
            console.log(err);

            res.status(500).json(err);

        })
});

// allows us to get information for a specific flight
router.get('/:id', (req, res) => {

});

// allows us to add infomration into the Airline talbe
router.post('/', (req, res) => {

});

// allows us to update existing information
router.put('/:id', (req, res) => {

});

// allows us to delete unveccessary information
router.delete('/:id');
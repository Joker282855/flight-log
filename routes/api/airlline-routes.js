const router = require('express').Router();
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

    Airline.findOne({
        
        where: {

            id: req.params.id

        }
    })
        .then(dbAirlineData => {

            if (!dbAirlineData) {

                res.json({ message: 'No airline found with this id' });

                return;
            }

            res.json(dbAirlineData);
        })

        .catch(err => {
            
            console.log(err);
           
            res.status(500).json(err);

        });
});

// allows us to add infomration into the Airline talbe
router.post('/', (req, res) => {

    Airline.create({

        destination_name: req.body.destination_name

    })

        .then(dbAirlineData => res.json(dbAirlineData))

        .catch(err => {

            console.log(err);

            res.status(500).json(err);

        });
});

// allows us to update existing information
router.put('/:id', (req, res) => {

    Airline.update(req.body, {

        where: {

            id: req.params.id

        }
    })

        .then(dbAirlineData => {

            if (!dbAirlineData[0]) {

                res.status(404).json({ message: 'No Airline found with this id' });

                return;
            }

            res.json(dbAirlineData);

        })

            .catch(err => {

                console.log(err);

                res.status(500).json(err);

            });
});

// allows us to delete unveccessary information
router.delete('/:id', (req, res) => {

    Airline.destroy({

        where: {

            id: req.params.id

        }
    })

        .then(dbAirlineData => {

            if (!dbAirlineData) {

                res.status(404).json({ message: 'No Airline found with this id' });

                return;
            }

            res.json(dbAirlineData);

        })

            .catch(err => {

                console.log(err);

                res.status(500).json(err);

            });

});

module.exports = router;
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

        ariline_name: req.body.airline_name,

        price: req.body.price,

        how_many: req.body.how_many,

    })

        .then(dbAirlineData => res.json(dbAirlineData))

        .catch(err => {

            console.log(err);

            res.status(500).json(err);

        });
});

// allows us to update existing information
router.put('/:id', (req, res) => {

});

// allows us to delete unveccessary information
router.delete('/:id');
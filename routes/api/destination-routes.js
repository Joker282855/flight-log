const router = require('express').Router();

const { Destination, Airline } = require('../../models');

router.get('/', (req, res) => {
    Destination.findAll({

        attributes: ['id', 'airline_name', 'price', 'qunatity', 'created_at' ],
        
        include: [
            {
                
                model: Airline,

                attributes: ['destination_name']

            }
        ]
    })
    
    .then(dbDestinationData => res.json(dbDestinationData))

    .catch(err => {
        
        console.log(err);

        res.status(500).json(err);

    });
});

module.exports = router;
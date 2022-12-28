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
});

module.exports = router;
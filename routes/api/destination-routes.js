const router = require('express').Router();

const { Destination, Airline, Weather, Forecast } = require('../../models');

router.get('/', (req, res) => {

    Destination.findAll({

        attributes: ['id', 'airline_name', 'price', 'quantity', 'created_at' ],

        order: [['created_at', 'DESC']],
        
        include: [
            {
                
                model: Airline,

                attributes: ['destination_name']

            },
            {
                model: Weather,
                attributes: ['weather_condition'],
                through: Forecast,
                as: 'weather_forecasted' 
            }
        ]
    })
    
    .then(dbDestinationData => res.json(dbDestinationData))

    .catch(err => {
        
        console.log(err);

        res.status(500).json(err);

    });
});

router.get('/:id', (req, res ) => {

    Destination.findOne({

        where: {

            id: req.params.id
        },

        attributes: ['id', 'airline_name', 'price', 'quantity', 'airline_id', 'created_at' ],

        include: [
            {
                model: Airline,

                attributes: ['destination_name']
            },
            {
                model: Weather,
                attributes: ['weather_condition'],
                through: Forecast,
                as: 'weather_forecasted'
            }
        ]

    })
    
    .then(dbDestinationData => {

        if (!dbDestinationData) {
            
            res.json(404).json({ message: 'No destination found with this id' });

            return;
        }

        res.json(dbDestinationData);
    })

    .catch(err => {

        console.log(err);

        res.status(500).json(err)
    });

});

router.post('/', (req, res) => {

    Destination.create({

        airline_name: req.body.airline_name,

        price: req.body.price,

        quantity: req.body.quantity,

        airline_id: req.body.airline_id

    })

    .then(dbDestinationData => res.json(dbDestinationData))

    .catch(err => {

        console.log(err);

        res.status(500).json(err);
    });

});

router.put('/:id', (req, res) => {

    Destination.update(req.body, 
    {
        where: {
            
            id: req.params.id
        }
    })

    .then(dbDestinationData => {

        if (!dbDestinationData) {

            res.status(404).json({ message: 'No destination found with this id' });

            return;

        }

        res.json(dbDestinationData);

    })

    .catch(err => {

        console.log(err);

        res.status(500).json(err);
    });
});

router.delete('/:id', (req, res) => {

    Destination.destroy({

        where: {

            id: req.params.id

        }
    })

    .then(dbDestinationData => {

        if (!dbDestinationData) {

            res.status(404).json({ message: 'No destination found with this id' });

            return;

        }

        res.json(dbDestinationData);
    })

    .catch(err => {

        console.log(err);

        res.status(500).json(err);

    });
});

module.exports = router;
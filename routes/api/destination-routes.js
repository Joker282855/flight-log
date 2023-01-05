const router = require('express').Router();

const { Destination, Airline } = require('../../models');

router.get('/', (req, res) => {

    Destination.findAll({

        attributes: ['id', 'airline_name', 'price', 'quantity', 'created_at' ],
        
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

router.get('/:id', (req, res ) => {

    Destination.findOne({

        where: {

            id: req.params.id
        },

        attributes: ['id', 'airline_name', 'price', 'quantity', 'created_at' ],

        include: [
            {
                model: Airline,

                attributes: ['destination_name']
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

    Destination.update({

        destination_name: req.body.destination_name
    },
    {

        where: {

            id: req.params.id
        }
    }
    )

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
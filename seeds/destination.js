const { Destination } = require('../models');

const destinationData = [
    {
        airline_name: 'Delta Airlines',
        price: 680.94,
        quantity: 12,
        airline_id: 1,
    },
    {
        airline_name: 'Southwest Airlines',
        price: 344.69,
        quantity: 8,
        airline_id: 2,
    },
    {
        airline_name: 'Delta Airlines',
        price: 144.58,
        quantity: 4,
        airline_id: 3,
    },
    {
        airline_name: 'Continential Airlines',
        price: 245.79,
        quantity: 5,
        airline_id: 4,
    },
    {
        airline_name: 'Southwest Airlines',
        price: 446.78,
        quantity: 7,
        airline_id: 5,
    },
    {
        airline_name: 'JetBlue Airlines',
        price: 324.56,
        quantity: 2,
        airline_id: 6,
    },
    {
        airline_name: 'Continential Airlines',
        price: 220.47,
        quantity: 10,
        airline_id: 6,
    },
    {
        airline_name: 'JetBlue Airlines',
        price: 95.67,
        quantity: 3,
        airline_id: 7,
    },
    {
        airline_name: 'United Airlines',
        price: 167.89,
        quantity: 8,
        airline_id: 8,
    },
    {
        airline_name: 'Emirate Airlines',
        price: 225.46,
        quantity: 5,
        airline_id: 9,
    },
    {
        airline_name: 'United Airlines',
        price: 189.79,
        quantity: 11,
        airline_id: 10,
    },
];

const seedDestination = () => Destination.bulkCreate(destinationData);

module.exports = seedDestination;
const router = require('express').Router();

// importing the models into the routes
const { Destination, Weather, Forecast } = require('../../models')

// creating routes to retrieve the wanted infromation
router.get('/', (req, res) => {
    Weather.findAll({
        attributes: ['id', 'weather_condition'],
        include: [
            {
                model: Destination,
                attributes: ['airline_name'],
                through: Forecast,
                as: 'weather_forecasted'
            }
        ]
    })
    .then(dbWeatherData => res.json(dbWeatherData))
    .catch(err => {
        console.log(err),
        res.status(500).json(err)
    })
});

router.get('/:id', (req, res) => {
    Weather.findOne({
        where : {
            id: req.params.id
        },
        include: [
            {
                model: Destination,
                attributes: ["arinline_name"],
                through: Forecast,
                as: 'weather_forecasted'
            }
        ]
    })
    .then(dbWeatherData => {
        if (!dbWeatherData) {
            res.status(404).json({ message: 'No airline found with this id' });
            return;
        }
        res.json(dbWeatherData);
    })
    .catch(err => {
        console.log(err),
        res.status(500).json(err)
    })
});

router.post('/', (rez, res) => {
    Weather.create({
        weather_condition: req.body.weather_condition
    })
    .then(dbWeatherData => res.json(dbWeatherData))
    .catch(err => {
        console.log(err)
        res.status(504).json(err)
    })
});

router.put('/:id', (req, res) => {
    Weather.update({
        where: {
            id: req.paramsid
        }
    })
    .then(dbWeatherData => {
        if (!dbWeatherData) {
            res.status(404).json({ message: 'No airline found with this id' });
            return;
        }
        res.json(dbWeatherData)
    })
    .catch(err => {
        console.log(err)
        res.status(500).json(err)
    })
});

router.destroy('/:id', (req, res) => {

});

module.exports = router;


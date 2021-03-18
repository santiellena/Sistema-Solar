const router = require('express').Router();

router.get('/', (req, res) => {
    
    res.render('index.hbs');
});

router.get('/simulacion', (req, res) => {

    res.render('content/solar-system.hbs')
});

router.get('/tierra/geosfera', (req, res) => {

    res.render('content/earth-geosphere.hbs');
});

router.get('/tierra/atmosfera', (req, res) => {

    res.render('content/earth-atmosphere.hbs');
});

router.get('/tierra/hidrosfera', (req, res) => {
    
    res.render('content/earth-hidrosphere.hbs');
});

router.get('/tierra/simulacion', (req, res) => {

    res.render('content/earth-simulation.hbs')
});



module.exports = router;
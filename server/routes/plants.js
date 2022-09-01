// all specific routes will be here and all CRUD functionalities

const express = require('express');
const plantController = require('../controllers/plantController');
const router = express.Router();

router.post('/', plantController.addPlant, (req, res) => {
    return res.status(200).send(res.locals.message);
});

// implement get with query string
router.get('/:id', plantController.getPlant, (req, res) => {
    return res.status(200).send(res.locals.plantInfo);
})

router.get('/', plantController.getPlants, (req, res) => {
    return res.status(200).send(res.locals.plantsInfo);
})

router.patch('/:id', plantController.updatePlant, (req, res) => {
    return res.status(200).send(res.locals.newPlantObj);
})


router.delete('/:id', plantController.deletePlant, (req, res) => {
    return res.status(200);
})



module.exports = router;
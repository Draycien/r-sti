const express = require('express');
const router = express.Router();
const carModel = require('../models/carModel');

router.get('/', (req, res) => {
    carModel.getAllCars((error, results) => {
        if (error) throw error;
        res.send(results);
    });
});

router.get('/:id', (req, res) => {
    const id = req.params.id;
    carModel.getCarById(id, (error, result) => {
        if (error) throw error;
        res.send(result);
    });
});

router.post('/', (req, res) => {
    const car = req.body;
    carModel.addCar(car, (error, result) => {
        if (error) throw error;
        res.status(201).send(result);
    });
});

router.put('/:id', (req, res) => {
    const id = req.params.id;
    const car = req.body;
    carModel.updateCar(id, car, (error, result) => {
        if (error) throw error;
        res.send(result);
    });
});

router.delete('/:id', (req, res) => {
    const id = req.params.id;
    carModel.deleteCar(id, (error, result) => {
        if (error) throw error;
        res.send(result);
    });
});

module.exports = router;
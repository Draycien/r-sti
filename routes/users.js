const express = require('express');
const router = express.Router();
const userModel = require('../models/userModel');

router.get('/', (req, res) => {
    userModel.getAllUsers((error, results) => {
        if (error) throw error;
        res.send(results);
    });
});

router.get('/:id', (req, res) => {
    const id = req.params.id;
    userModel.getUserById(id, (error, result) => {
        if (error) throw error;
        res.send(result);
    });
});

router.post('/', (req, res) => {
    const user = req.body;
    userModel.addUser(user, (error, result) => {
        if (error) throw error;
        res.status(201).send(result);
    });
});

router.put('/:id', (req, res) => {
    const id = req.params.id;
    const user = req.body;
    userModel.updateUser(id, user, (error, result) => {
        if (error) throw error;
        res.send(result);
    });
});

router.delete('/:id', (req, res) => {
    const id = req.params.id;
    userModel.deleteUser(id, (error, result) => {
        if (error) throw error;
        res.send(result);
    });
});

module.exports = router;
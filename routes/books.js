const express = require('express');
const router = express.Router();
const bookModel = require('../models/bookModel');

router.get('/', (req, res) => {
    bookModel.getAllBooks((error, results) => {
        if (error) throw error;
        res.send(results);
    });
});

router.get('/:id', (req, res) => {
    const id = req.params.id;
    bookModel.getBookById(id, (error, result) => {
        if (error) throw error;
        res.send(result);
    });
});

router.post('/', (req, res) => {
    const book = req.body;
    bookModel.addBook(book, (error, result) => {
        if (error) throw error;
        res.status(201).send(result);
    });
});

router.put('/:id', (req, res) => {
    const id = req.params.id;
    const book = req.body;
    bookModel.updateBook(id, book, (error, result) => {
        if (error) throw error;
        res.send(result);
    });
});

router.delete('/:id', (req, res) => {
    const id = req.params.id;
    bookModel.deleteBook(id, (error, result) => {
        if (error) throw error;
        res.send(result);
    });
});

module.exports = router;
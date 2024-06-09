const connection = require('../db');

const getAllBooks = (callback) => {
    connection.query('SELECT * FROM book', callback);
};

const getBookById = (id, callback) => {
    connection.query('SELECT * FROM book WHERE id_book = ?', [id], callback);
};

const addBook = (book, callback) => {
    connection.query('INSERT INTO book SET ?', book, callback);
};

const updateBook = (id, book, callback) => {
    connection.query('UPDATE book SET ? WHERE id_book = ?', [book, id], callback);
};

const deleteBook = (id, callback) => {
    connection.query('DELETE FROM book WHERE id_book = ?', [id], callback);
};

module.exports = {
    getAllBooks,
    getBookById,
    addBook,
    updateBook,
    deleteBook
};
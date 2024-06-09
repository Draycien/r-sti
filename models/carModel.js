const connection = require('../db');

const getAllCars = (callback) => {
    connection.query('SELECT * FROM car', callback);
};

const getCarById = (id, callback) => {
    connection.query('SELECT * FROM car WHERE id = ?', [id], callback);
};

const addCar = (car, callback) => {
    connection.query('INSERT INTO car SET ?', car, callback);
};

const updateCar = (id, car, callback) => {
    connection.query('UPDATE car SET ? WHERE id = ?', [car, id], callback);
};

const deleteCar = (id, callback) => {
    connection.query('DELETE FROM car WHERE id = ?', [id], callback);
};

module.exports = {
    getAllCars,
    getCarById,
    addCar,
    updateCar,
    deleteCar
};
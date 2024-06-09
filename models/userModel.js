const connection = require('../db');

const getAllUsers = (callback) => {
    connection.query('SELECT * FROM user', callback);
};

const getUserById = (id, callback) => {
    connection.query('SELECT * FROM user WHERE id_user = ?', [id], callback);
};

const addUser = (user, callback) => {
    connection.query('INSERT INTO user SET ?', user, callback);
};

const updateUser = (id, user, callback) => {
    connection.query('UPDATE user SET ? WHERE id_user = ?', [user, id], callback);
};

const deleteUser = (id, callback) => {
    connection.query('DELETE FROM user WHERE id_user = ?', [id], callback);
};

module.exports = {
    getAllUsers,
    getUserById,
    addUser,
    updateUser,
    deleteUser
};
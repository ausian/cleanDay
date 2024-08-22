const express = require('express');
const { createUser, getUserByTgId, updateUser, deleteUser, getAllUsers } = require('../controllers/usersController');
const router = express.Router();

// Маршрут для создания пользователя
router.post('/', createUser);

// Маршрут для получения пользователя по tg_id
router.get('/:tg_id', getUserByTgId);

// Маршрут для получения всех пользователей
router.get('/', getAllUsers);

// Маршрут для обновления пользователя
router.put('/:tg_id', updateUser);

// Маршрут для удаления пользователя
router.delete('/:tg_id', deleteUser);

module.exports = router;

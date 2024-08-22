const express = require('express');
const { addEvent, deleteEvent, updateEvent } = require('../controllers/eventsController');
const router = express.Router();

// Маршрут для добавления события
router.post('/:tg_id/', addEvent);

// Маршрут для удаления события
router.delete('/:id', deleteEvent);

// Маршрут для обновления события
router.put('/:id', updateEvent);

module.exports = router;

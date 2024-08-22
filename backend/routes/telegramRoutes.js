const express = require('express');
const { handleTelegramWebhook } = require('../controllers/telegramController'); // путь к вашему контроллеру
const router = express.Router();

// Маршрут для обработки вебхуков от Telegram
router.post('/webhook', handleTelegramWebhook);

module.exports = router;

const axios = require('axios');
const User = require('../models/User'); // путь к вашей модели

exports.handleTelegramWebhook = async (req, res) => {
  const { message } = req.body;

  if (!message || !message.from) {
    return res.sendStatus(200);
  }

  const tg_id = message.from.id.toString();
  const name = message.from.first_name || 'User';

  try {
    // Проверка, существует ли пользователь
    let user = await User.findOne({ where: { tg_id } });

    if (!user) {
      // Если пользователя нет, создаем его
      user = await User.create({ name, tg_id, dates: [], birthday: null });
      await axios.post(`https://api.telegram.org/bot${process.env.BOT_TOKEN}/sendMessage`, {
        chat_id: tg_id,
        text: `Привет, ${name}! Ваш профиль создан.`,
      });
    } else {
      // Если пользователь уже существует, отправляем приветственное сообщение
      await axios.post(`https://api.telegram.org/bot${process.env.BOT_TOKEN}/sendMessage`, {
        chat_id: tg_id,
        text: `Добро пожаловать обратно, ${name}!`,
        reply_markup: {
          inline_keyboard: [
            [{ text: 'Открыть мини-приложение', web_app: { url: 'https://de44-185-237-97-187.ngrok-free.app' } }]
          ]
        }
      });
    }

    res.sendStatus(200);
  } catch (error) {
    console.error('Error handling Telegram webhook:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
};

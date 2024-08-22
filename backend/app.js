const express = require('express');
const cors = require('cors');
const usersRoutes = require('./routes/users');
const telegramRoutes = require('./routes/telegramRoutes');
const eventsRoutes = require('./routes/events'); // Импорт маршрутов событий
require('dotenv').config();
require('./models/associations'); // Импортируем файл с ассоциациями

const app = express();

app.use(cors({
    origin: '*',
    methods: ['GET', 'POST', 'PUT', 'DELETE'],
    allowedHeaders: ['Content-Type', 'Authorization', 'X-Requested-With'],
    credentials: true
  }));
  
app.use(express.json());

app.use('/api/users', usersRoutes);
app.use('/api/telegram', telegramRoutes); // Используем маршрут для вебхуков Telegram
app.use('/api/events', eventsRoutes);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));

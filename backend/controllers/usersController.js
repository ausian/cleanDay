const User = require('../models/User');
const Event = require('../models/Event');

// Создание нового пользователя
exports.createUser = async (req, res) => {
  try {
    const { name, tg_id, dates, birthday } = req.body;
    const user = await User.create({ name, tg_id, dates, birthday });
    res.status(201).json(user);
  } catch (err) {
    console.error(err.message);
    res.status(500).json({ error: 'Server error' });
  }
};

// Получение данных пользователя по tg_id с включенными событиями
exports.getUserByTgId = async (req, res) => {
  try {
    const user = await User.findOne({
      where: { tg_id: req.params.tg_id },
      include: [{ model: Event }], // Включаем связанные события
    });
    if (user) {
      res.json(user);
    } else {
      res.status(404).json({ error: 'User not found' });
    }
  } catch (err) {
    console.error(err.message);
    res.status(500).json({ error: 'Server error' });
  }
};

// Обновление пользователя
exports.updateUser = async (req, res) => {
  try {
    const { name, dates, birthday } = req.body;
    const [updated] = await User.update({ name, dates, birthday }, {
      where: { tg_id: req.params.tg_id }
    });
    if (updated) {
      const updatedUser = await User.findOne({ where: { tg_id: req.params.tg_id } });
      res.json(updatedUser);
    } else {
      res.status(404).json({ error: 'User not found' });
    }
  } catch (err) {
    console.error(err.message);
    res.status(500).json({ error: 'Server error' });
  }
};

// Удаление пользователя
exports.deleteUser = async (req, res) => {
  try {
    const deleted = await User.destroy({
      where: { tg_id: req.params.tg_id }
    });
    if (deleted) {
      res.status(204).send();
    } else {
      res.status(404).json({ error: 'User not found' });
    }
  } catch (err) {
    console.error(err.message);
    res.status(500).json({ error: 'Server error' });
  }
};


// Получение всех пользователей с включенными событиями
exports.getAllUsers = async (req, res) => {
  try {
    const users = await User.findAll({
      include: [{ model: Event }], // Включаем связанные события
    });
    res.json(users);
  } catch (err) {
    console.error(err.message);
    res.status(500).json({ error: 'Server error' });
  }
};
const User = require('./User');
const Event = require('./Event');

// Определяем ассоциации
User.hasMany(Event, { foreignKey: 'tg_id', onDelete: 'CASCADE' });
Event.belongsTo(User, { foreignKey: 'tg_id' });

// Синхронизация ассоциаций
(async () => {
  await User.sync();
  await Event.sync();
})();

const { DataTypes } = require('sequelize');
const sequelize = require('../config/db');
const User = require('./User'); // Не забудьте импортировать модель User

const Event = sequelize.define('Event', {
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  },
  eventName: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  date: {
    type: DataTypes.DATEONLY,
    allowNull: false,
  },
  tg_id: {
    type: DataTypes.STRING,
    allowNull: false,
    references: {
      model: User,
      key: 'tg_id',
    },
    onDelete: 'CASCADE',
  },
}, {
  timestamps: true, 
});

module.exports = Event;

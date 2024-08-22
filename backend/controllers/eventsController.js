const Event = require('../models/Event');

exports.addEvent = async (req, res) => {
  try {
    const { eventName, date } = req.body;
    const { tg_id } = req.params;

    const newEvent = await Event.create({ eventName, date, tg_id });
    res.status(201).json(newEvent);
  } catch (err) {
    console.error(err.message);
    res.status(500).json({ error: 'Server error' });
  }
};

exports.deleteEvent = async (req, res) => {
  try {
    const { id } = req.params;

    const deleted = await Event.destroy({ where: { id } });
    if (deleted) {
      res.status(204).send();
    } else {
      res.status(404).json({ error: 'Event not found' });
    }
  } catch (err) {
    console.error(err.message);
    res.status(500).json({ error: 'Server error' });
  }
};

exports.updateEvent = async (req, res) => {
  try {
    const { id } = req.params;
    const { eventName, date } = req.body;

    const [updated] = await Event.update({ eventName, date }, { where: { id } });
    if (updated) {
      const updatedEvent = await Event.findOne({ where: { id } });
      res.json(updatedEvent);
    } else {
      res.status(404).json({ error: 'Event not found' });
    }
  } catch (err) {
    console.error(err.message);
    res.status(500).json({ error: 'Server error' });
  }
};

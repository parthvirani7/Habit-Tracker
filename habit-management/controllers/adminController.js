const User = require('../models/User');
const Habit = require('../models/Habit');

exports.getAllUsers = async (req, res) => {
  try {
    const users = await User.find().select('-password');
    res.json(users);
  } catch (error) {
    res.status(500).json({ error: 'Error fetching users' });
  }
};

exports.createHabitTemplate = async (req, res) => {
  const { name, frequency } = req.body;

  try {
    const template = new Habit({ name, frequency, isTemplate: true });
    await template.save();
    
    res.status(201).json(template);
  } catch (error) {
    res.status(400).json({ error: 'Error creating habit template' });
  }
};

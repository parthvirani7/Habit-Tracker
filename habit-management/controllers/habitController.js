const Habit = require('../models/Habit');

exports.getHabits = async (req, res) => {
  try {
    const habits = await Habit.find({ user: req.user.id });
    res.json(habits);
  } catch (error) {
    res.status(500).json({ error: 'Error fetching habits' });
  }
};

// Create a new habit
exports.createHabit = async (req, res) => {
  const { name, frequency } = req.body;

  try {
    const habit = new Habit({ user: req.user.id, name, frequency });
    await habit.save();

    res.status(201).json(habit);
  } catch (error) {
    res.status(400).json({ error: 'Error creating habit' });
  }
};

// Update a habit
exports.updateHabit = async (req, res) => {
  const { name, frequency } = req.body;

  try {
    const habit = await Habit.findById(req.params.id);

    if (!habit || habit.user.toString() !== req.user.id) {
      return res.status(404).json({ error: 'Habit not found' });
    }

    habit.name = name || habit.name;
    habit.frequency = frequency || habit.frequency;

    await habit.save();
    res.json(habit);
  } catch (error) {
    res.status(400).json({ error: 'Error updating habit' });
  }
};

exports.deleteHabit = async (req, res) => {
  try {
    const habit = await Habit.findById(req.params.id);

    if (!habit || habit.user.toString() !== req.user.id) {
      return res.status(404).json({ error: 'Habit not found' });
    }

    await habit.remove();
    res.json({ message: 'Habit removed' });
  } catch (error) {
    res.status(500).json({ error: 'Error deleting habit' });
  }
};

exports.getHabitById = async (req, res) => {
  try {
    const habit = await Habit.findById(req.params.id);

    if (!habit || habit.user.toString() !== req.user.id) {
      return res.status(404).json({ error: 'Habit not found' });
    }

    res.json(habit);
  } catch (error) {
    res.status(500).json({ error: 'Error fetching habit' });
  }
};

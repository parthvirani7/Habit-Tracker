const Habit = require('../models/Habit');

exports.sendReminders = async () => {
  try {
    // Get today's date
    const today = new Date();
    const startOfToday = new Date(today.setHours(0, 0, 0, 0));
    const endOfToday = new Date(today.setHours(23, 59, 59, 999));
    const habits = await Habit.find({
      lastCompleted: {
        $lt: startOfToday,
      },
    });

    habits.forEach(habit => {
      console.log(`Sending reminder to habit: ${habit.name}`);
    });
  } catch (error) {
    console.error('Error sending reminders:', error);
  }
};

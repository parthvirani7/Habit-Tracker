const cron = require('node-cron');
const { sendReminders } = require('../services/notification.service');

const scheduleReminders = () => {
  cron.schedule('0 8 * * *', async () => {
    console.log('Running daily reminders');
    await sendReminders();
  });
};

module.exports = { scheduleReminders };

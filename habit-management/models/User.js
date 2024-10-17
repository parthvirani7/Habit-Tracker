const mongoose = require('mongoose');
const { Schema } = mongoose;

const userSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
  },
  role: {
    type: String,
    enum: ['user', 'admin'],
    default: 'user',
  },
  notificationPreferences: {
    reminderTime: {
      type: String, 
      default: "08:00 AM",
    },
    receiveNotifications: {
      type: Boolean,
      default: true,
    },
  },
}, { timestamps: true });

module.exports = mongoose.model('User', userSchema);

const mongoose = require('mongoose');
const { Schema } = mongoose;

const habitSchema = new Schema({
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true,
  },
  name: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    default: '',
  },
  tags: {
    type: [String],
  },
  frequency: {
    type: String,
    enum: ['daily', 'weekly'],
    default: 'daily',
  },
  streak: {
    type: Number,
    default: 0,
  },
  weeklyProgress: {
    type: [Boolean], 
    default: [false, false, false, false, false, false, false],
  },
  nextReminder: {
    type: Date,
  },
  isCompletedToday: {
    type: Boolean,
    default: false,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
}, { timestamps: true });

module.exports = mongoose.model('Habit', habitSchema);

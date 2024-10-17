const express = require('express');
const { getAllUsers, createHabitTemplate } = require('../controllers/adminController');
const { protect, admin } = require('../middleware/authMiddleware');

const router = express.Router();

router.get('/users', protect, admin, getAllUsers);
router.post('/templates', protect, admin, createHabitTemplate);

module.exports = router;

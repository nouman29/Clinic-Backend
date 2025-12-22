const express = require('express');
const router = express.Router();
const { registerUser } = require('../controllers/authController');

// POST /api/auth/signup
router.post('/signup', registerUser);

module.exports = router;

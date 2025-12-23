const express = require('express');
const router = express.Router();
const { registerUser, loginUser, logoutUser } = require('../controllers/authController');

// POST /api/auth/signup
router.post('/signup', registerUser);

// POST /api/auth/login
router.post('/login', loginUser);

// GET /api/auth/logout
router.get('/logout', logoutUser);

module.exports = router;

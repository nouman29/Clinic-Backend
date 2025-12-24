const express = require('express');
const router = express.Router();
const { registerUser, loginUser, logoutUser, getMe } = require('../controllers/authController');
const { protect } = require('../middleware/authMiddleware');

// POST /api/auth/signup
router.post('/signup', registerUser);

// POST /api/auth/login
router.post('/login', loginUser);

// GET /api/auth/logout
router.get('/logout', logoutUser);

// GET /api/auth/me
router.get('/me', protect, getMe);

module.exports = router;

const express = require('express');
const router = express.Router();
const { loginAdmin, registerAdmin } = require('../controllers/authController');
const authenticate = require('../middlewares/authMiddleware');

// Admin login route
router.post('/login', loginAdmin);

// Protected route
router.get('/profile', authenticate, (req, res) => {
    res.status(200).json({ message: 'This is a protected route', admin: req.admin });
});

// Admin signup route
router.post('/signup', registerAdmin);

module.exports = router;

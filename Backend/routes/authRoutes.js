const express = require('express');
const router = express.Router();
const {
  registerUser,
  authUser,
  logoutUser,
  getUserProfile,
  forgotPassword,
  resetPassword,
  googleAuth,
  googleCallback,
} = require('../controllers/authController');
const { protect } = require('../middleware/authMiddleware');

router.post('/register', registerUser);
router.post('/login', authUser);
router.post('/logout', logoutUser);
router.post('/forgotpassword', forgotPassword);
router.put('/resetpassword/:resettoken', resetPassword);
router.get('/profile', protect, getUserProfile);

// Google OAuth
router.get('/google', googleAuth);
router.get('/google/callback', googleCallback);

module.exports = router;

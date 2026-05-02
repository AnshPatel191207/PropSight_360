const crypto = require('crypto');
const passport = require('passport');
const User = require('../models/User');
const generateToken = require('../utils/generateToken');

// @desc    Register a new user
// @route   POST /api/auth/register
// @access  Public
const registerUser = async (req, res) => {
  const { fullName, email, phone, password, profileType } = req.body;

  const userExists = await User.findOne({ email });

  if (userExists) {
    res.status(400);
    throw new Error('User already exists');
  }

  const user = await User.create({
    fullName,
    email,
    phone,
    password,
    profileType,
  });

  if (user) {
    generateToken(res, user._id);

    res.status(201).json({
      _id: user._id,
      fullName: user.fullName,
      email: user.email,
      phone: user.phone,
      profileType: user.profileType,
    });
  } else {
    res.status(400);
    throw new Error('Invalid user data');
  }
};

// @desc    Auth user & get token
// @route   POST /api/auth/login
// @access  Public
const authUser = async (req, res) => {
  const { email, password } = req.body;

  const user = await User.findOne({ email }).select('+password');

  if (!user) {
    res.status(401);
    throw new Error('Invalid email or password');
  }

  // If user signed up via Google and hasn't set a password
  if (!user.password) {
    res.status(401);
    throw new Error('This account was created using Google. Please sign in with Google or reset your password.');
  }

  if (await user.matchPassword(password)) {
    generateToken(res, user._id);

    res.json({
      _id: user._id,
      fullName: user.fullName,
      email: user.email,
      profileType: user.profileType,
    });
  } else {
    res.status(401);
    throw new Error('Invalid email or password');
  }
};

// @desc    Logout user / clear cookie
// @route   POST /api/auth/logout
// @access  Public
const logoutUser = (req, res) => {
  res.cookie('jwt', '', {
    httpOnly: true,
    expires: new Date(0),
    secure: process.env.NODE_ENV !== 'development',
    sameSite: process.env.NODE_ENV === 'production' ? 'none' : 'strict',
  });
  res.status(200).json({ message: 'Logged out successfully' });
};

// @desc    Get user profile
// @route   GET /api/auth/profile
// @access  Private
const getUserProfile = async (req, res) => {
  const user = await User.findById(req.user._id);

  if (user) {
    res.json({
      success: true,
      user: {
        _id: user._id,
        fullName: user.fullName,
        name: user.fullName, // Added for compatibility
        email: user.email,
        profileType: user.profileType,
        profilePhoto: user.profilePhoto || ''
      }
    });
  } else {
    res.status(404);
    throw new Error('User not found');
  }
};

// @desc    Forgot password
// @route   POST /api/auth/forgotpassword
// @access  Public
const forgotPassword = async (req, res) => {
  const user = await User.findOne({ email: req.body.email });

  if (!user) {
    res.status(404);
    throw new Error('User not found with that email');
  }

  // Get reset token
  const resetToken = crypto.randomBytes(20).toString('hex');

  // Hash token and set to resetPasswordToken field
  user.resetPasswordToken = crypto
    .createHash('sha256')
    .update(resetToken)
    .digest('hex');

  // Set expire
  user.resetPasswordExpire = Date.now() + 10 * 60 * 1000; // 10 mins

  await user.save();

  // Create reset url
  const frontendUrl = process.env.FRONTEND_PRODUCTION_URL || process.env.FRONTEND_URL;
  const resetUrl = `${frontendUrl}/reset-password/${resetToken}`;

  const message = `You are receiving this email because you (or someone else) has requested the reset of a password. Please make a PUT request to: \n\n ${resetUrl}`;

  try {
    // Here you would normally send the email
    console.log(`Sending email to ${user.email} with reset link: ${resetUrl}`);
    
    res.status(200).json({ success: true, data: 'Email sent' });
  } catch (err) {
    console.error(err);
    user.resetPasswordToken = undefined;
    user.resetPasswordExpire = undefined;

    await user.save();

    res.status(500);
    throw new Error('Email could not be sent');
  }
};

// @desc    Reset password
// @route   PUT /api/auth/resetpassword/:resettoken
// @access  Public
const resetPassword = async (req, res) => {
  // Get hashed token
  const resetPasswordToken = crypto
    .createHash('sha256')
    .update(req.params.resettoken)
    .digest('hex');

  const user = await User.findOne({
    resetPasswordToken,
    resetPasswordExpire: { $gt: Date.now() },
  });

  if (!user) {
    res.status(400);
    throw new Error('Invalid token');
  }

  // Set new password
  user.password = req.body.password;
  user.resetPasswordToken = undefined;
  user.resetPasswordExpire = undefined;
  await user.save();

  generateToken(res, user._id);

  res.status(200).json({
    success: true,
    data: 'Password reset successful',
  });
};

// @desc    Google Auth Login
// @route   GET /api/auth/google
// @access  Public
const googleAuth = passport.authenticate('google', { scope: ['profile', 'email'] });

// @desc    Google Auth Callback
// @route   GET /api/auth/google/callback
// @access  Public
const googleCallback = (req, res, next) => {
  const frontendUrl = process.env.FRONTEND_PRODUCTION_URL || process.env.FRONTEND_URL;
  passport.authenticate('google', { session: false }, (err, user, info) => {
    if (err) return next(err);
    if (!user) return res.redirect(`${frontendUrl}/login?error=auth_failed`);
    
    generateToken(res, user._id);
    res.redirect(`${frontendUrl}/dashboard`);
  })(req, res, next);
};

// @desc    Mobile Login (OTP)
// @route   POST /api/auth/mobile-login
// @access  Public
const mobileLogin = async (req, res) => {
  const { phone, otp } = req.body;

  // Mock OTP verification
  if (otp === '123456') {
    let user = await User.findOne({ phone });

    if (!user) {
      // Create a dummy user if phone not found, or handle as registration
      res.status(404);
      throw new Error('Phone number not registered');
    }

    generateToken(res, user._id);
    res.status(200).json({
      _id: user._id,
      fullName: user.fullName,
      phone: user.phone,
      profileType: user.profileType,
    });
  } else {
    res.status(400);
    throw new Error('Invalid OTP');
  }
};

module.exports = {
  registerUser,
  authUser,
  logoutUser,
  getUserProfile,
  forgotPassword,
  resetPassword,
  googleAuth,
  googleCallback,
  mobileLogin,
};

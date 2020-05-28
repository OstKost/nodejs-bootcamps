const ErrorResponse = require('../utils/errorResponse');
const asyncHandler = require('../middleware/async');
const User = require('../models/User');

// @desc      Register user
// @route     POST /api/v1/auth/register
// @access    Public
exports.register = asyncHandler(async (req, res, next) => {
  const { name, email, password, role } = req.body;

  // Create user
  const user = await User.create({
    name,
    email,
    password,
    role,
  });

  sendTokenResponse(user, 200, res);
});

// @desc      Login user
// @route     POST /api/v1/auth/login
// @access    Public
exports.login = asyncHandler(async (req, res, next) => {
  const { email, password } = req.body;

  // Validate email and password
  if (!email || !password) {
    return next(new ErrorResponse('Please provide an email and password', 400));
  }

  // Check for the user
  const user = await User.findOne({ email }).select('+password');
  if (!user) {
    return next(new ErrorResponse('User does not exist', 401));
  }

  // Check password
  const isMatch = await user.matchPassword(password);
  if (!isMatch) {
    return next(new ErrorResponse('Invalid password', 401));
  }

  sendTokenResponse(user, 200, res);
});

// @desc      Get current user
// @route     GET /api/v1/auth/me
// @access    Private
exports.getMe = asyncHandler(async (req, res, next) => {
  const user = await User.findById(req.user.id);

  res.status(200).json({
    success: true,
    data: user,
  });
});

// Get token from model, create cookie and response
const sendTokenResponse = (user, statusCode, res) => {
  // Create token
  const token = user.getSignedJWT();

  const day = 24 * 60 * 60 * 1000;
  const expires = new Date(Date.now() + process.env.JWT_COOKIE_EXPIRE * day);
  const options = {
    expires,
    httpOnly: true,
    secure: process.env.NODE_ENV === 'production',
  };

  res
    .status(statusCode)
    .cookie('token', token, options)
    .json({ success: true, token });
};

const jwt = require('jsonwebtoken');
const asyncHandler = require('./async');
const Errorhandler = require('../utils/errorResponse');
const User = require('../models/User');

// Protect routes
exports.protect = asyncHandler(async (req, res, next) => {
  let token;
  if (
    req.headers.authorization &&
    req.headers.authorization.startsWith('Bearer')
  ) {
    // Set token from Bearer
    token = req.headers.authorization.split(' ')[1];
  }

  // Set token from cookie
  // else if (req.cookies.token) {
  //   token = req.cookies.token;
  // }

  // Make sure token exists
  if (!token) {
    return next(new Errorhandler('Not authorized', 401));
  }

  try {
    // Verify token
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    console.log('decoded', decoded);

    req.user = await User.findById(decoded.id);
    next();
  } catch (error) {
    return next(new Errorhandler(error, 500));
  }
});

// Grant access by role
exports.authorize = (...roles) => {
  return (req, res, next) => {
    if (!roles.includes(req.user.role)) {
      return next(
        new Errorhandler(`Not enough permissions (${req.user.role})`, 403)
      );
    }
    next();
  };
};

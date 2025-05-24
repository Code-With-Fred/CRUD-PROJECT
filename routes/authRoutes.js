// routes/authRoutes.js
const express = require('express');
const { body } = require('express-validator');
const validationMiddleware = require('../middleware/validationMiddleware');
const router = express.Router();

router.post(
  '/register',
  [
    body('name').notEmpty().withMessage('Name is required'),
    body('email').isEmail().withMessage('Please provide a valid email address'),
    body('password').isLength({ min: 6 }).withMessage('Password must be at least 6 characters long'),
  ],
  validationMiddleware,
  async (req, res, next) => {
    try {
      // Your registration logic here
      res.status(201).json({ message: 'User registered successfully' });
    } catch (err) {
      next(err); // Pass errors to the global error handler
    }
  }
);

module.exports = router;

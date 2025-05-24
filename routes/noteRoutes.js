const express = require('express');
const { body } = require('express-validator');
const {
  createNote,
  getNotes,
  getNote,
  updateNote,
  deleteNote
} = require('../controllers/noteController');
const authMiddleware = require('../middleware/authMiddleware');
const validationMiddleware = require('../middleware/validationMiddleware');

const router = express.Router();

// Apply authentication middleware to all routes
router.use(authMiddleware);

// Create a new note
router.post(
  '/',
  [
    body('title').notEmpty().withMessage('Title is required'),
    body('content').notEmpty().withMessage('Content is required')
  ],
  validationMiddleware,
  createNote
);

// Get all notes for the authenticated user
router.get('/', getNotes);

// Get a specific note by ID
router.get('/:id', getNote);

// Update a specific note by ID
router.put(
  '/:id',
  [
    body('title').optional().notEmpty().withMessage('Title cannot be empty'),
    body('content').optional().notEmpty().withMessage('Content cannot be empty')
  ],
  validationMiddleware,
  updateNote
);

// Delete a specific note by ID
router.delete('/:id', deleteNote);

module.exports = router;

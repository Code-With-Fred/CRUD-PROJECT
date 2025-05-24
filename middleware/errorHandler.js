// middleware/errorHandler.js

module.exports = (err, req, res, next) => {
  console.error(err.stack); // Log the error stack trace for debugging

  const statusCode = err.statusCode || 500;
  const message = err.message || 'Internal Server Error';

  res.status(statusCode).json({
    success: false,
    message,
  });
};

// require('dotenv').config();
// const express = require('express');
// const mongoose = require('mongoose');

// // const authRoutes = require('./routes/authRoutes');
// const noteRoutes = require('./routes/noteRoutes');
// const errorHandler = require('./middleware/errorHandler');
// // const errorHandler = require('./middleware/errorHandler');

// const app = express();

// // Middleware
// app.use(express.json());

// // Routes
// // app.use('/notes', noteRoutes);

// // app.use('/api/auth', authRoutes);
// app.use('/api/notes', noteRoutes);
// app.use(errorHandler)
// // app.use('/api/auth', authRoutes);
// // app.use(errorHandler);
// // so here we are connecting our mongodb and starting our server
// const PORT = process.env.PORT || 5000;

// mongoose
//   .connect(process.env.MONGODB_URI)
//   .then(() => {
//     console.log('MongoDB connected.');
//     app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
//   })
//   .catch((err) => console.error('MongoDB connection error:', err));
//   module.exports = app;






require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');

const authRoutes = require('./routes/authRoutes');
const noteRoutes = require('./routes/noteRoutes');
const errorHandler = require('./middleware/errorHandler');

const app = express();

// Middleware
app.use(express.json());

// Routes
app.get('/', (req, res)=>{
  res.status(200).json({message:"welcome to this project"})
})


app.use('/api/routes', authRoutes);
app.use('/api/notes', noteRoutes);

// Global Error Handling Middleware
app.use(errorHandler);

// Connect to MongoDB and start the server
const PORT = process.env.PORT || 5000;

mongoose
  .connect(process.env.MONGODB_URI)
  .then(() => {
    console.log('MongoDB connected.');
    app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
  })
  .catch((err) => console.error('MongoDB connection error:', err));

module.exports = app;


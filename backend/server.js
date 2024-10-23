require('dotenv').config(); // Load environment variables

const express = require('express'); // Import express
const mongoose = require('mongoose'); // Import mongoose
const cors = require('cors'); // Import cors

const app = express(); // Initialize express app
const PORT = process.env.PORT || 5000; // Set port from .env or default to 5000

// Middleware
app.use(cors()); // Allow CORS
app.use(express.json()); // Parse JSON

// Connect to MongoDB using MONGO_URI from .env
mongoose.connect(process.env.MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
.then(() => console.log('MongoDB connected'))
.catch((err) => console.error('MongoDB connection error:', err));

// Define a basic route
app.get('/', (req, res) => {
  res.send('Backend is running!');
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});

app.use('/api/auth', require('./routes/auth'));
app.use('/api/files', require('./routes/upload')); // Adjust the path as needed



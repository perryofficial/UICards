const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const dotenv = require('dotenv');
const Card = require('./models/Card');
dotenv.config();

const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// Connect to MongoDB
mongoose.connect(process.env.MONGO_URI)
  .then(async () => {
    console.log('✅ MongoDB connected');

    // Auto-seed dummy data if no cards
    const cardCount = await Card.countDocuments();
    if (cardCount === 0) {
      await Card.insertMany([
        {
          name: 'John Doe',
          title: 'Software Engineer',
          description: 'I love coding and building projects!',
          rating: 4.8,
          reviews: 120,
          imageUrl: 'https://via.placeholder.com/150',
        },
        {
          name: 'Jane Smith',
          title: 'Data Scientist',
          description: 'Passionate about data and AI.',
          rating: 4.6,
          reviews: 98,
          imageUrl: 'https://via.placeholder.com/150',
        },
         {
          name: 'John Patrik',
          title: 'Software Engineer',
          description: 'building projects!',
          rating: 3.8,
          reviews: 170,
          imageUrl: 'https://via.placeholder.com/150',
        },
      ]);
      console.log('📦 Dummy data seeded');
    }
  })
  .catch((err) => console.error('❌ MongoDB connection error:', err));

// API Route
app.use('/api/cards', require('./routes/cardRoutes'));

// Start Server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`🚀 Server running on port ${PORT}`));

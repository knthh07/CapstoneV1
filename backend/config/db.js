const mongoose = require('mongoose');

// gagawa ka ng account sa mongodb sa .env 
// lahat ng mga ilalagay nyu na mga credentials nyu sa account para secured
const connectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGODB_URI);
    console.log('MongoDB is Connected BITCHASS');
    
    const db = mongoose.connection;
    db.on('error', console.error.bind(console, 'MongoDB connection error:'));
  } catch (error) {
    console.error('Error connecting to MongoDB:', error);
  }
};

module.exports = connectDB;

const mongoose = require('mongoose');

mongoose.set('strictQuery', false);  

const connectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGODB_URI, {

    });
    console.log('MongoDB Connected Successfully');
  } catch (error) {
    console.error('MongoDB Connection Failed:', error.message);
    process.exit(1);  
  }
};

module.exports = connectDB;
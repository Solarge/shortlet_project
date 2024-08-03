const mongoose = require('mongoose');
const db = 'mongodb+srv://asolaja:YNhAS7KdOIqGKY7R@devcluster.beunkb5.mongodb.net/';

const connectDB = async () => {
  try {
    await mongoose.connect(db, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log('MongoDB Connected...');
  } catch (err) {
    console.error(err.message);
    process.exit(1);
  }
};

module.exports = connectDB;

const mongoose = require('mongoose');

const connectDB = async () => {
    try {
        const dbURL = process.env.DB_URI;
        await mongoose.connect(dbURL);
        console.log('Connected to MongoDB');
    } catch (error) {
        console.error('Error connecting to MongoDB:', error);
        throw error;
    }
};

module.exports = connectDB;

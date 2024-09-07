const { MongoClient, ServerApiVersion } = require('mongodb');
const mongoose = require('mongoose');
require('dotenv').config();

// create new client
const connectToDB = (uri) => {
    return mongoose.connect(uri)
        .then(console.log('Connected to MongoDB!'));
}
module.exports = { connectToDB };
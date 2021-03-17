// Import mongoose, create Schema, create model, then export the model

const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Create our Schema

const tweetSchema = new Schema({
    title: String,
    body: String,
    author: String,
    likes: {type: Number, default: 0},
    sponsored: {type: Boolean, default: false}
}, {timestamps: true})

// create the object that allows us to manipulate the database
const Tweet = mongoose.model('Tweet', tweetSchema)

// Export the model

module.exports = Tweet


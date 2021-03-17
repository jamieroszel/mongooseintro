//////////////////////////
// Dependencies
//////////////////////////
require("dotenv").config()
const mongoose = require("mongoose");
const Tweet = require("./tweet.js")
//////////////////////////
// Connect to Database
//////////////////////////
// retrieving our mongo url from our environmental variables (.env)
const mongoURI = process.env.MONGODBURI
// store the connection object inside a variable called
const db = mongoose.connection
// config object to remove warnings
const mongoconfig = {useNewUrlParser: true, useUnifiedTopology: true, useFindAndModify: true}
// connect to the database
mongoose.connect(mongoURI, mongoconfig, () => {
    console.log("CONNECTED TO MONGO")
})
//////////////////////////
// Dependencies
//////////////////////////
// dot env is a module that loads env variables from a .env file to keep certain data from github
require("dotenv").config()
// Mongoose is an Object Data Modeling (ODM) library for MongoDB and Node.js. It manages relationships between data, provides schema validation, and is used to translate between objects in code and the representation of those objects in MongoDB.
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

// DB Messages

db.on('open', () => console.log('Your connection is open.'))
db.on('close', () => console.log('You are disconnected from mongo'))
db.on('error', (error) => console.log(error))

// setTimeout(() => db.close(), 5000)

// Time to make tweets! 

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

// Create an object representing a new Tweet
// const myFirstTweet = {
//     title: 'Deep Thoughts',
//     body: 'Friends, I have been navel-gazing',
//     author: 'Karolin'
// }

// Create the Tweet
// Tweet.create(myFirstTweet, (error, tweet) => {
//     if(error){
//         console.log(error);
//     }else {
//         console.log(tweet)
//     }
//     db.close()
// })

// Making Lots of Tweets!

// const manyTweets = [
//     {
//       title: 'Deep Thoughts',
//       body: 'Friends, I have been navel-gazing',
//       author: 'Karolin'
//     },
//     {
//       title: 'Sage Advice',
//       body: 'Friends, I am vegan and so should you',
//       author: 'Karolin',
//       likes: 20
//     },
//     {
//       title: 'Whole Reality',
//       body: 'I shall deny friendship to anyone who does not exclusively shop at Whole Foods',
//       author: 'Karolin',
//       likes: 40
//     },
//     {
//       title: 'Organic',
//       body: 'Friends, I have spent $2300 to be one of the first people to own an organic smartphone',
//       author: 'Karolin',
//       likes: 162
//     },
//     {
//       title: 'Confusion',
//       body: 'Friends, why do you just respond with the word `dislike`? Surely you mean to click the like button?',
//           author: 'Karolin',
//       likes: -100
//     },
//     {
//       title: 'Vespa',
//       body: 'Friends, my Vespa has been upgraded to run on old french fry oil. Its top speed is now 11 mph',
//       author: 'Karolin',
//       likes: 2
//     },
//     {
//       title: 'Licensed',
//       body: 'Friends, I am now officially licensed to teach yogalates. Like this to get 10% off a private lesson',
//       author: 'Karolin',
//       likes: 3
//     },
//     {
//       title: 'Water',
//       body: 'Friends, I have been collecting rain water so I can indulge in locally sourced raw water. Ask me how',
//       author: 'Karolin',
//     },
//   ];

//   Tweet.insertMany(manyTweets, (error, tweets) =>{
//       if(error){
//           console.log(error)
//       } else {
//           console.log(tweets);
//       } db.close()
//   });

//   Let's find some tweets! This code will find all the tweets

// Tweet.find((error, tweets) => {
//     console.log(tweets)
//     db.close()
// })

// Let's find specific tweet

// Tweet.find({title: 'Water'}, (error, tweets) => {
//     console.log(tweets)
//     db.close()
// })

//-----------Use a query to find tweets that have greater than or equal to 20 likes------------

// Tweet.find({likes: {$gte:20}}, (err, tweets) =>{
//     console.log(tweets);
//     db.close();
// });

// delete documents with mongoose

// Tweet.findOneAndRemove({title: 'Deep Thoughts'}, (error, tweet)=>{
//     if (error){
//         console.log(error);
//     } else {
//         console.log('This is the deleted tweet:', tweet);
//     }
//     db.close()
// })

// Updating Tweets
Tweet.findOneAndUpdate({title: 'Vespa'}, {sponsored: true}, {new: true}, (error, tweet)=>{
    if (error){
        console.log(error);
    }else {
        console.log(tweet);
    }
    db.close()
})
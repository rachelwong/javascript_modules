const express = require('express')
const router = express.Router()
const TweetController = require("./tweet_controller/tweet_controller")

// Routing
router.get('/', TweetController.newTweets)
router.post('/tweet/create', TweetController.createTweet)
router.get('/tweet', TweetController.showAllTweet)
router.get('/tweet/:id', TweetController.showTweetByID)
router.delete('/tweet/delete/:id', TweetController.deleteTweet)
router.put('/tweet/update', TweetController.updateTweet)

module.exports = router
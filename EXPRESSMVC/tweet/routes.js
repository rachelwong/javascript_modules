const express = require('express')
const router = express.Router() // need an instance of internal routes object to attach the routes to
const TweetController = require('./controllers/tweet_controller')

router.get('/', TweetController.read)
router.post('/tweets', TweetController.create)
router.get('/tweets/:id', TweetController.show)
router.put('/tweets/:id', TweetController.update) // express won't confuse between the two routes because of the verbs 

router.delete('/tweets/:id', TweetController.destroy)

module.exports = router
// store all data in an array
const tweets = []
// initialise a tweet id to start from 1
let next_id = 1

// CRUD operations go here

let create = (req, res) => {
  const {
    title,
    content
  } = req.body // look for req.body.title and req.body.content and will put into separate variables into tweet
  const id = next_id++ // the first one to be id= 1
  const tweet = {
    id,
    title,
    content
  } // we get title and content from req.body
  tweets.push(tweet) // push the body of the request
  // common convention in API is to send back the object htat is just created so that client can confirm that it has been created correctly
  res.send(tweet)
}

let read = (req, res) => {
  res.send(tweets) // send out all the tweets. Automatically JSON.stringify because of .send
}

let show = (req, res) => {
  // const id = req.params.id
  // res.send(tweets.find(tweet => tweet.id == req.params.id))
  const tweet = tweets.find(tweet => tweet.id == req.params.id)
  if (tweet) {
    res.send(tweet)
  } else {
    res.sendStatus(404)
  }
}

let update = (req, res) => {
  const tweet = tweets.find(tweet => tweet.id == req.params.id)
  if (tweet) {
    const {
      title,
      content
    } = req.body
    tweet.title = title
    tweet.content = content
    res.send(tweet)
  } else {
    res.sendStatus(404)
  }
}

let destroy = (req, res) => {
  const tweet = tweets.find(tweet => tweet.id == req.params.id)
  if (tweet) {
    tweets.splice(tweets.indexOf(tweet), 1)
    res.sendStatus(200)
  } else {
    res.sendStatus(404)
  }
}

module.exports = {
  create,
  show,
  read,
  update,
  destroy
}
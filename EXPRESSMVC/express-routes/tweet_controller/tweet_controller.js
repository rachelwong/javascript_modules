// Routing
let newTweets = (req, res) => {
  res.send("Root Home Page is working!")
}

// take contents of database and display on page
let showAllTweet = (req, res) => {
  dbase.collection('crud_mongodb').find().toArray((err, results) => {
    res.send(results)
  })
}

// get tweet by id from database
let showTweetByID = (req, res) => {
  if (err) {
    res.status(400).send("link to get tweet by id invalid")
  }
  let id = ObjectID(req.params.id);
  dbase.collection('tweet').find(id).toArray((err, result) => {
    if (err) {
      res.status(400).send("tweet not found")
    }
    res.send(result);
  })
}

// print to database when a new tweet is created
let createTweet = (req, res) => {
  let tweet = {
    tweet: req.body.tweet
  }
  dbase.collection("crud_mongodb").save(tweet, (err, result) => {
    if (err) {
      console.log(err)
    }
    res.send("Tweet added successfully.")
  })
}

// update tweet by unique ID
let updateTweet = (req, res) => {
  let id = {
    _id: ObjectID(req.params.id)
  }
  dbase.collection('crud_mongodb').update({
    _id: id
  }, {
    $set: {
      "tweet": req.body
    }
  }, (err, result) => {
    if (err) {
      res.status(400).send("Tweet not found for updating")
    }
    res.send('tweet updated successfully!')
  })
}

// delete only the first tweet by matching unique id
let deleteTweet = (req, res) => {
  let id = ObjectID(req.params.id)
  dbase.collection("crud_mongodb").deleteOne(id, (err, result) => {
    if (err) {
      res.status(400).send("link to delete tweet invalid")
    }
    dbase.collection("crud_mongodb").deleteOne(id, (err, result) => {
      if (err) {
        res.status(400).send("tweet not found for deleting")
      }
      res.send("tweet deleted")
    })
  })
}

module.exports = {
  newTweets,
  showTweetByID,
  showAllTweet,
  createTweet,
  updateTweet,
  deleteTweet,
}
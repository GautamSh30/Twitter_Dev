const express = require("express");
const connect = require("./config/database");
const app = express();

const TweetRepository = require("./repository/tweet-repository");
const Comment = require("./models/comment");

app.listen(
  (3000,
  async () => {
    console.log("Server started");
    await connect();
    console.log("MongoDb connected");
    // const tweet = await Tweet.create({
    //   content: "Third Tweet",
    //   userEmail: "a@b.com",
    // });
    const tweetRepo = new TweetRepository();
    const tweet = await tweetRepo.getWithComments("664ec471914a008a98b941b2");

    console.log(tweet);
  })
);

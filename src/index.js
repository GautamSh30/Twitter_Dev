const express = require("express");
const connect = require("./config/database");
const app = express();

// const TweetRepository = require("./repository/tweet-repository");
// const Comment = require("./models/comment");

app.listen(
  (3000,
  async () => {
    console.log("Server started");
    await connect();
    console.log("MongoDb connected");
  })
);

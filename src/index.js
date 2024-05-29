import express from "express";
import bodyParser from "body-parser";

import { connect } from "./config/database.js";

// import TweetService from "./services/tweet-service.js";
import { UserRepository, TweetRepository } from "./repository/index.js";
import LikeService from "./services/like-service.js";

import apiRoutes from "./routes/index.js";
const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use("/api", apiRoutes);

app.listen(3000, async () => {
  console.log("Server started");
  await connect();
  console.log("MongoDb connected");

  const tweetRepo = new TweetRepository();
  const userRepo = new UserRepository();
  const tweets = await tweetRepo.getAll(0, 2);
  const users = await userRepo.getAll();
  const likeService = new LikeService();
  await likeService.toggleLike(tweets[0].id, "Tweet", users[0].id);
});

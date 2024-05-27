import express from "express";
import bodyParser from "body-parser";

import { connect } from "./config/database.js";

// import TweetService from "./services/tweet-service.js";

import apiRoutes from "./routes/index.js";
const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use("/api", apiRoutes);

app.listen(3000, async () => {
  console.log("Server started");
  await connect();
  console.log("MongoDb connected");

  // let ser = new TweetService();
  // await ser.create({ content: "This is #prePostman" });
});

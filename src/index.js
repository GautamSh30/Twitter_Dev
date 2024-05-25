import express from "express";
import { connect } from "./config/database.js";
const app = express();

import service from "./services/tweet-service.js";

app.listen(
  (3000,
  async () => {
    console.log("Server started");
    await connect();
    console.log("MongoDb connected");

    let ser = new service();
    await ser.create({ content: "Done #debugging" });
  })
);

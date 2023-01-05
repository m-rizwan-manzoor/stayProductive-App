const express = require("express");
var cors = require("cors");
const mongoose = require("mongoose");
const userRouter = require("./routes/user/user.controller");
const port = 5000;

const app = express();
app.use(cors());
app.use(express.json());

mongoose
  .connect("mongodb://localhost:27017/stayproductive")
  .then(() => console.log("Connected to MongoDB"))
  .catch((error) => console.log(`Couldn't connected to MongoDB, ${error}`));

app.use("/users", userRouter);

app.listen(port, () => console.log("App is listening at port " + port));

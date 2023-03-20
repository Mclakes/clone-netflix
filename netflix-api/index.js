const express = require("express");
const cors = reqiure("cors");
const mongoose = require("mongoose");
const userRoutes = require("./routes/UseRoutes");
const app = express();

app.use(cors());
app.use(express.json());

mongoose
  .connect("mongodb://localhost:27017/netflixDB", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("DB connected");
  });

app.use("/api/user", userRoutes);

app.listen(5000, console.log("server started"));
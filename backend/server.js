require("dotenv").config();
const express = require("express");
const app = express();
const cors = require("cors");
const mongoose = require("mongoose");
const connectDB = require("./config/dbConn");
const PORT = process.env.PORT || 3500;

// connect to mongoDB
connectDB();

// cross origin resource sharing
// allows acces to data/backend from these servers
app.use(cors());

// built-in middleware to handle urlencoded data
// in other words, form data:
// content-type: application/x-www-form-urlencoded
app.use(express.urlencoded({ extended: false }));

// built-in middleware for json
app.use(express.json());

app.use("/posts", require("./routes/posts"));
app.use("/users", require("./routes/users"));

mongoose.connection.once("open", () => {
  console.log("Connected to MongoDB");
  app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
});

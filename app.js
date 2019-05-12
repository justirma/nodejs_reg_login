const express = require("express");
const expressLayouts = require("express-ejs-layouts");
const mongoose = require("mongoose");

const app = express();

// DB config
const db = require("./config/key").MongoURI;

// Connect Mongo
mongoose
  .connect(db, { useNewUrlParser: true })
  .then(() => console.log("MongoDB Connected..."))
  .catch(err => console.log(err));

// EJS middleware
app.use(expressLayouts);
app.set("view engine", "ejs");

//Routes
app.use("/", require("./routes/index.js"));
app.use("/users", require("./routes/users.js"));

// port to run env
const PORT = process.env.PORT || 5000;

// listen
app.listen(PORT, console.log(`Server started on port ${PORT}`));

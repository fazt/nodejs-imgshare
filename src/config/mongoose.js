const mongoose = require("mongoose");

const { database } = require("../keys");

mongoose
  .connect(database.URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then((db) => console.log("db is connected"))
  .catch((err) => console.log(err));

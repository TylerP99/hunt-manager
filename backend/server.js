const express = require("express");
const dotenv = require("dotenv").config();
const port = process.env.PORT || 3000;

// Connect to MongoDB via Mongoose
(require("./config/db"))();

const app = express();

app.use("/", require("./routes/index.js"));

app.listen(port, () => console.log(`Hunt Manager running on port ${port}`));
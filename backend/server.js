const express = require("express");
const port = process.env.PORT || 3000;

// Custom error handler
const {errorHandler} = require("./middleware/errorHandler");

// Use .env file for environement variables
require("dotenv").config(); 

// Connect to MongoDB via Mongoose
(require("./config/db"))();

const app = express();

// Body middleware
app.use(express.json());
app.use(express.urlencoded({extended: true}));

// Router
app.use("/", require("./routes/index.js"));

// Use error handler
app.use(errorHandler);

app.listen(port, () => console.log(`Hunt Manager running on port ${port}`));
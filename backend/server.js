require("dotenv").config(); 
const express = require("express");
const app = express();
const path = require("path");

const port = process.env.PORT || 3000;

const logger = require("morgan");
app.use(logger("dev"));

// Custom error handler
const {errorHandler} = require("./middleware/errorHandler");

// Connect to MongoDB via Mongoose
(require("./config/db"))();

const cors = require("cors");
app.use(cors({credentials: true, origin: "http://localhost:5000"}));

// Body middleware
app.use(express.json());
app.use(express.urlencoded({extended: true}));

const cookieParser = require("cookie-parser");
app.use(cookieParser());

app.use('/', express.static(path.join(__dirname, 'public')))

// Router
app.use("/", require("./routes/index.js"));

app.all('*', (req, res) => {
    res.status(404)
    if (req.accepts('html')) {
        res.sendFile(path.join(__dirname, 'views', '404.html'))
    } else if (req.accepts('json')) {
        res.json({ message: '404 Not Found' })
    } else {
        res.type('txt').send('404 Not Found')
    }
})

// Use error handler
app.use(errorHandler);

// Run app on port
app.listen(port, () => console.log(`Hunt Manager running on port ${port}`));
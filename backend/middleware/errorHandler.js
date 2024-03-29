const errorHandler = (err, req, res, next) => {
    console.log("Status", res.statusCode);
    const statusCode = res.statusCode || 500;

    res.status(statusCode);

    res.json({
        message: err.message,
        stack: process.env.NODE_ENV === "production" ? null : err.stack,
    })
}

module.exports = {
    errorHandler,
}
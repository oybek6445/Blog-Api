const errorHandler = (err, req, res, next) => {
    console.error(err.stack);

    const statusCode = err.status || 500;
    const message = err.message || "Server error";

    res.status(statusCode).json({
        success: false,
        error: message
    });
};

module.exports = errorHandler;

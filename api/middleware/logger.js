module.exports = logger;

function logger(err, req, res, next) {
    console.log(err.stack);
    res.sendStatus(500);
}
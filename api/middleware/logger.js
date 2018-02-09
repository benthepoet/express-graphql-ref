module.exports = () => {
    return (err, req, res, next) => {
        console.log(err.stack);
        res.sendStatus(500);
    };
}
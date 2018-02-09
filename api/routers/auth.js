const { Router } = require('express');

const router = Router();

router.post('/auth/sign-in', signIn);

module.exports = router;

function signIn(req, res, next) {
    res.sendStatus(200);
}
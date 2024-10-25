const { Router } = require('express');
const { verifySignUp } = require("./../middlewares");
const controller = require("../controllers/auth.controller");

const router = Router();

router.use((req, res, next) => {
    res.header(
        "Access-Control-Allow-Headers",
        "x-access-token, Origin, Content-Type, Accept"
    );
    next();
});

router.post(
    "/api/auth/signup",
    [verifySignUp.checkDuplicateUsernameOrEmail, verifySignUp.checkRolesExisted],
    controller.signup
);

router.post(
    "/api/auth/signin",
    controller.signin
);

module.exports = router;

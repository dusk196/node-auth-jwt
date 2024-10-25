const { User, Role } = require("./../models");

checkDuplicateUsernameOrEmail = (req, res, next) => {
    User.findOne({
        where: {
            username: req.body.username
        }
    }).then(user => {
        if (user) {
            res.status(400).send({
                message: "Failed! Username is already in use!"
            });
            return;
        }
        next();
    });
};

checkRolesExisted = (req, res, next) => {
    Role.findOne({
        where: {
            name: !!req.body.role ? req.body.role : ''
        }
    }).then(role => {
        if (!role) {
            res.status(400).send({
                message: "Failed! Role does not exist = " + req.body.role
            });
            return;
        }
        next();
    });
};

const verifySignUp = {
    checkDuplicateUsernameOrEmail: checkDuplicateUsernameOrEmail,
    checkRolesExisted: checkRolesExisted
};

module.exports = verifySignUp;
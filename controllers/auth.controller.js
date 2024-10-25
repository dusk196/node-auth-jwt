const { v4: uuidv4 } = require('uuid');
const { hashSync, compareSync } = require("bcryptjs");
const { sign } = require("jsonwebtoken");

const { User, Role } = require("../models");
const { privateKey } = require("../services/keys");

const signOptions = {
    // issuer: "i",
    // subject: "s",
    // audience: "a",
    expiresIn: "12h",
    algorithm: "RS256"
};

exports.signup = (req, res) => {
    User
        .create({
            userId: uuidv4(),
            username: req.body.username,
            password: hashSync(req.body.password, parseInt(process.env.BCRYPT_SALT))
        })
        .then(user => {
            Role
                .findAll({
                    where: {
                        name: req.body.role
                    }
                })
                .then(roles => {
                    user.setRoles(roles).then(() => {
                        res.send({ message: "User was registered successfully!" });
                    });
                });
        })
        .catch(err => {
            res.status(500).send({ message: err.message });
        });
};

exports.signin = async (req, res) => {
    User
        .findOne({
            where: {
                username: req.body.username
            }
        })
        .then(user => {
            if (!user) {
                return res.status(404).send({ message: "User Not found." });
            }
            const passwordIsValid = compareSync(req.body.password, user.password);
            if (!passwordIsValid) {
                return res.status(401).send({
                    accessToken: null,
                    message: "Invalid Password!"
                });
            }
            console.log(privateKey);
            const token = sign({ id: user.id, name: user.username }, privateKey, signOptions);
            user.getRoles().then(roles => {
                res.status(200).send({
                    username: user.username,
                    role: roles[0].name,
                    accessToken: token
                });
            });
        })
        .catch(err => {
            res.status(500).send({ message: err.message });
        });
};
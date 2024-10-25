exports.allAccess = (req, res) => {
    res.status(200).send({ success: true, message: "Public Resourse!" });
};

exports.userBoard = (req, res) => {
    res.status(200).send({ success: true, message: "User Content." });
};

exports.adminBoard = (req, res) => {
    res.status(200).send({ success: true, message: "Admin Content." });
};

exports.moderatorBoard = (req, res) => {
    res.status(200).send({ success: true, message: "Moderator Content." });
};
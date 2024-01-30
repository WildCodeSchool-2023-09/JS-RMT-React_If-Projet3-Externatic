const { verifyToken } = require("../services/jwt");

const checkAdmin = (req, res, next) => {
  const decode = verifyToken(req.cookies.auth);
  if (decode.role === 3) {
    req.user = decode;
    next();
  } else {
    res.sendStatus(403);
  }
};

module.exports = checkAdmin;

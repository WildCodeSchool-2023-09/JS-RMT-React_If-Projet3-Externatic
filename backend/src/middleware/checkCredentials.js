const { verifyToken } = require("../services/jwt");

const checkCredentials = (req, res, next) => {
  if (req.cookies.auth) {
    const decode = verifyToken(req.cookies.auth);
    if (decode.role_id !== null) {
      req.user = decode;
      next();
    } else {
      res.sendStatus(403);
    }
  } else {
    next();
  }
};

module.exports = checkCredentials;

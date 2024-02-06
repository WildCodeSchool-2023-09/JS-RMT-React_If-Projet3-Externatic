const checkCredentials = (req, res, next) => {
  if (req.user.role_id === 2 || req.user.role_id === 3) {
    next();
  } else {
    res.sendStatus(403);
  }
};

module.exports = checkCredentials;

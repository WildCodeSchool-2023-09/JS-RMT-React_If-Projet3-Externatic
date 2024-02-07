const checkAdmin = (req, res, next) => {
  if (req.user.role_id === 3) {
    next();
  } else {
    res.sendStatus(403);
  }
};

module.exports = checkAdmin;

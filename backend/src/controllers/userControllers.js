const db = require("../../database/client");

const login = async (req, res) => {
  try {
    const [rows] = await db.query(
      "SELECT * FROM user WHERE email = ? AND password = ?",
      [req.body.email, req.body.password]
    );

    if (rows.length > 0) {
      res.status(200).json({ msg: "connected" });
    } else {
      res.sendStatus(404);
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({ error });
  }
};

module.exports = {
  login,
};

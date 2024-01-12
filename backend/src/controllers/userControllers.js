// Import access to database tables
const tables = require("../tables");
const { verify } = require("../services/hash");
const { createToken } = require("../services/jwt");

// The B of BREAD - Browse (Read All) operation

/*
const browse = async (req, res, next) => {
  try {
    // Fetch all users from the database
    const users = await tables.user.readAll();

    // Respond with the users in JSON format
    res.json(users);
  } catch (err) {
    // Pass any errors to the error-handling middleware
    next(err);
  }
};
*/
// The R of BREAD - Read operation
const login = async (req, res, next) => {
  try {
    // Fetch a specific user from the database based on the provided ID
    const user = await tables.user.read(req.body.email);

    // If the user is not found, respond with HTTP 404 (Not Found)
    // Otherwise, respond with the user in JSON format
    if (user == null) {
      res.sendStatus(403);
    } else {
      const check = await verify(req.body.password, user.password);
      if (check) {
        delete user.password;
        res
          .cookie("auth", createToken(user), { httpOnly: true })
          .status(200)
          .json({ id: user.id, email: user.email, role: user.role });
      } else {
        res.sendStatus(403);
      }
    }
  } catch (err) {
    next(err);
  }
};

// The E of BREAD - Edit (Update) operation
// This operation is not yet implemented

// The A of BREAD - Add (Create) operation

// The D of BREAD - Destroy (Delete) operation
// This operation is not yet implemented

// Ready to export the controller functions
module.exports = {
  // browse,
  login,
  // edit,
  // destroy,
};

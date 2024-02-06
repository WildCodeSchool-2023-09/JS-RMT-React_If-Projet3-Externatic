// Import access to database tables
const tables = require("../tables");

// The B of BREAD - Browse (Read All) operation
const browse = async (req, res, next) => {
  try {
    // Fetch all applications from the database
    const applications = await tables.application.readAll();

    // Respond with the applications in JSON format
    res.json(applications);
  } catch (err) {
    // Pass any errors to the error-handling middleware
    next(err);
  }
};

// The R of BREAD - Read operation
const read = async (req, res, next) => {
  try {
    // Fetch a specific application from the database based on the provided ID
    const application = await tables.application.read(req.params.id);

    // If the application is not found, respond with HTTP 404 (Not Found)
    // Otherwise, respond with the application in JSON format
    if (application == null) {
      res.sendStatus(404);
    } else {
      res.json(application);
    }
  } catch (err) {
    // Pass any errors to the error-handling middleware
    next(err);
  }
};

const readProfileApplications = async (req, res, next) => {
  try {
    const application = await tables.application.getApplications(req.user.id);

    if (application == null) {
      res.sendStatus(404);
    } else {
      res.json(application);
    }
  } catch (err) {
    next(err);
  }
};

// The E of BREAD - Edit (Update) operation
// This operation is not yet implemented

// The A of BREAD - Add (Create) operation
const add = async (req, res, next) => {
  // Extract the application data from the request body
  const application = req.body;

  try {
    // Insert the application into the database
    const insertId = await tables.application.create(application);

    // Respond with HTTP 201 (Created) and the ID of the newly inserted application
    res.status(201).json({ insertId });
  } catch (err) {
    // Pass any errors to the error-handling middleware
    next(err);
  }
};

// The D of BREAD - Destroy (Delete) operation
// This operation is not yet implemented

// Ready to export the controller functions
module.exports = {
  browse,
  read,
  readProfileApplications,
  // edit,
  add,
  // destroy,
};

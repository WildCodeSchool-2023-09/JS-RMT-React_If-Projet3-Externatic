// Import access to database tables
const tables = require("../tables");

// The B of BREAD - Browse (Read All) operation
const browse = async (req, res, next) => {
  try {
    // Fetch all items from the database
    const companies = await tables.company.readAll();

    // Respond with the items in JSON format
    res.status(200).json(companies);
  } catch (err) {
    // Pass any errors to the error-handling middleware
    next(err);
  }
};

// The R of BREAD - Read operation
const read = async (req, res, next) => {
  try {
    //     // Fetch a specific item from the database based on the provided ID
    const company = await tables.company.read(req.params.id);

    //     // If the item is not found, respond with HTTP 404 (Not Found)
    //     // Otherwise, respond with the item in JSON format
    if (company == null) {
      res.sendStatus(404);
    } else {
      res.status(200).json(company);
    }
  } catch (err) {
    //     // Pass any errors to the error-handling middleware
    next(err);
  }
};

// The E of BREAD - Edit (Update) operation
const edit = async (req, res, next) => {
  // Extract the company data from the request body
  const company = req.body;
  try {
    // Fetch a specific city from the database based on the provided ID
    const result = await tables.company.update(req.params.id, company);

    // If the company is not found, respond with HTTP 404 (Not Found)
    if (result.affectedRows === 1) {
      res.sendStatus(204);
    } else {
      res.sendStatus(404);
    }
  } catch (err) {
    // Pass any errors to the error-handling middleware
    next(err);
  }
};

// The A of BREAD - Add (Create) operation
const add = async (req, res, next) => {
  const company = req.body;

  try {
    const insertId = await tables.company.create(company);

    res.status(201).json({ insertId });
  } catch (err) {
    next(err);
  }
};

// The D of BREAD - Destroy (Delete) operation
const destroy = async (req, res, next) => {
  try {
    await tables.company.delete(req.params.id);
    res.sendStatus(204);
  } catch (err) {
    next(err);
  }
};

// Ready to export the controller functions
module.exports = {
  browse,
  read,
  edit,
  add,
  destroy,
};

// Import access to database tables
const tables = require("../tables");

// The B of BREAD - Browse (Read All) operation
const browse = async (req, res, next) => {
  try {
    // Fetch all jobs from the database
    const jobs = await tables.job.readAll();

    // Respond with the jobs in JSON format
    res.status(200).json(jobs);
  } catch (err) {
    // Pass any errors to the error-handling middleware
    next(err);
  }
};

// The R of BREAD - Read operation
const read = async (req, res, next) => {
  try {
    // Fetch a specific job from the database based on the provided ID
    const job = await tables.job.read(req.params.id);

    // If the job is not found, respond with HTTP 404 (Not Found)
    // Otherwise, respond with the job in JSON format
    if (job.length === 0) {
      res.sendStatus(404);
    } else {
      res.status(200).json(job);
    }
  } catch (err) {
    // Pass any errors to the error-handling middleware
    next(err);
  }
};

const readByCompany = async (req, res, next) => {
  try {
    // Fetch a specific job from the database based on the provided ID
    const job = await tables.job.readByCompany(req.params.id);

    // If the job is not found, respond with HTTP 404 (Not Found)
    // Otherwise, respond with the job in JSON format
    if (job.length === 0) {
      res.sendStatus(404);
    } else {
      res.status(200).json(job);
    }
  } catch (err) {
    // Pass any errors to the error-handling middleware
    next(err);
  }
};

// The E of BREAD - Edit (Update) operation
// This operation is not yet implemented

// The A of BREAD - Add (Create) operation
/* const add = async (req, res, next) => {
  // Extract the job data from the request body
  const job = req.body;

  try {
    // Insert the job into the database
    const insertId = await tables.job.create(job);

    // Respond with HTTP 201 (Created) and the ID of the newly inserted job
    res.status(201).json({ insertId });
  } catch (err) {
    // Pass any errors to the error-handling middleware
    next(err);
  }
}; */

// The D of BREAD - Destroy (Delete) operation
// This operation is not yet implemented

// Ready to export the controller functions
module.exports = {
  browse,
  read,
  readByCompany,
  // edit,
  // add,
  // destroy,
};

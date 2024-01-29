// Import access to database tables
const tables = require("../tables");

// The B of BREAD - Browse (Read All) operation
const browse = async (req, res, next) => {
  try {

    // Fetch all items from the database
    const jobs = await tables.job.readAll();

    // Respond with the items in JSON format
    res.json(jobs);

    const page = parseInt(req.query.page, 10) || 1;
    const jobsPerPage = 9;
    const {
      location: selectedLocations,
      language: selectedLanguages,
      search: searchedJob,
    } = req.query;

    const totalJobsNb = await tables.job.readAllJobs(
      selectedLocations,
      selectedLanguages,
      searchedJob
    );
    const totalPagesNb = Math.ceil(totalJobsNb / jobsPerPage);

    const jobs = await tables.job.readAll(
      page,
      jobsPerPage,
      selectedLocations,
      selectedLanguages,
      searchedJob
    );

    // Respond with the jobs in JSON format
    res.status(200).json({ jobs, totalPagesNb });

  } catch (err) {
    // Pass any errors to the error-handling middleware
    next(err);
  }
};


// The R of BREAD - Read operation
const read = async (req, res, next) => {
  try {
    // Fetch a specific item from the database based on the provided ID
    const job = await tables.job.read(req.params.id);

    // If the item is not found, respond with HTTP 404 (Not Found)
    // Otherwise, respond with the item in JSON format
    if (job == null) {
      res.sendStatus(404);
    } else {
      res.json(job);

const getLocations = async (req, res, next) => {
  try {
    const locations = await tables.job.readAllLocations();
    res.status(200).json(locations);
  } catch (err) {
    next(err);
  }
};

const getLanguages = async (req, res, next) => {
  try {
    const languages = await tables.job.readAllLanguages();
    res.status(200).json(languages);
  } catch (err) {
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


const readByCompanyJob = async (req, res, next) => {
  try {
    // Fetch a specific job from the database based on the provided ID
    const job = await tables.job.readByCompanyJob(req.params.id);

    // If the job is not found, respond with HTTP 404 (Not Found)
    // Otherwise, respond with the job in JSON format
    if (job.length === 0) {
      res.sendStatus(404);
    } else {
      res.status(200).json(job[0]);
    }
  } catch (err) {
    next(err);
  }
};

const browseLatest = async (req, res, next) => {
  try {
    const latestJobs = await tables.job.readLatest();
    res.status(200).json(latestJobs);
  } catch (err) {
    next(err);
  }
};

// The E of BREAD - Edit (Update) operation
// This operation is not yet implemented

// The A of BREAD - Add (Create) operation
const add = async (req, res, next) => {

  // Extract the item data from the request body
  const item = req.body;

  try {
    // Insert the item into the database
    const insertId = await tables.item.create(item);

    // Respond with HTTP 201 (Created) and the ID of the newly inserted item

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
};

// The D of BREAD - Destroy (Delete) operation
// This operation is not yet implemented

// Ready to export the controller functions
module.exports = {
  browse,
  read,
  getLocations,
  getLanguages,
  read,
  readByCompany,
  readByCompanyJob,
  browseLatest,
  // edit,
  add,
  // destroy,
};

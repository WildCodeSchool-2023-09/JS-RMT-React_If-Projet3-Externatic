const express = require("express");

const router = express.Router();

/* ************************************************************************* */
// Define Your API Routes Here
/* ************************************************************************* */

// Import itemControllers module for handling item-related operations
const jobControllers = require("./controllers/jobControllers");
const companyControllers = require("./controllers/companyControllers");

// Route to get a list of items
router.get("/jobs", jobControllers.browse);
router.get("/locations", jobControllers.getLocations);
router.get("/languages", jobControllers.getLanguages);
router.get("/companies", companyControllers.browse);

// Route to get a specific item by ID

// Route to add a new item

/* ************************************************************************* */

module.exports = router;

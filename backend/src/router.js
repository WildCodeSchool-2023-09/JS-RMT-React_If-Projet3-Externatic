const express = require("express");

const router = express.Router();

/* ************************************************************************* */
// Define Your API Routes Here
/* ************************************************************************* */

// Import itemControllers module for handling item-related operations
const itemControllers = require("./controllers/itemControllers");
const jobControllers = require("./controllers/jobControllers");
const companyControllers = require("./controllers/companyControllers");

// Route to get a list of items
router.get("/items", itemControllers.browse);
router.get("/jobs", jobControllers.browse);
router.get("/companies", companyControllers.browse);

// Route to get a specific item by ID
router.get("/items/:id", itemControllers.read);
router.get("/companies/:id", companyControllers.read);
// Route to add a new item
router.post("/items", itemControllers.add);

/* ************************************************************************* */

module.exports = router;

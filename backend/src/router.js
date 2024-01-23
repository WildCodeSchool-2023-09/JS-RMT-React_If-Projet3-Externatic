const express = require("express");

const router = express.Router();

/* ************************************************************************* */
// Define Your API Routes Here
/* ************************************************************************* */

// Import itemControllers module for handling item-related operations
const itemControllers = require("./controllers/itemControllers");
const jobControllers = require("./controllers/jobControllers");
const companyControllers = require("./controllers/companyControllers");
const userControllers = require("./controllers/userControllers");

// Route to get a list of items
router.get("/items", itemControllers.browse);
router.get("/jobs", jobControllers.browse);
router.get("/companies", companyControllers.browse);
router.get("/consultants", userControllers.getConsultant);

// Route to get a specific item by ID
router.get("/items/:id", itemControllers.read);
router.get("/companies/:id/jobs", jobControllers.readByCompany);
// Route to add a new item
router.post("/items", itemControllers.add);
router.post("/jobs", jobControllers.add);

/* ************************************************************************* */

module.exports = router;

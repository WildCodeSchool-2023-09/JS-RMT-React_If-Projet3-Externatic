const express = require("express");

const router = express.Router();

/* ************************************************************************* */
// Define Your API Routes Here
/* ************************************************************************* */

// Import itemControllers module for handling item-related operations
const itemControllers = require("./controllers/itemControllers");
const userControllers = require("./controllers/userControllers");
const jobControllers = require("./controllers/jobControllers");
const companyControllers = require("./controllers/companyControllers");

const checkCredentials = require("./middleware/checkCredentials");

const validateUser = require("./validators/validateUser");

router.get("/jobs", jobControllers.browse);
router.get("/locations", jobControllers.getLocations);
router.get("/languages", jobControllers.getLanguages);
router.get("/companies", companyControllers.browse);
router.get("/consultants", userControllers.getConsultant);

// Route to get a specific item by ID
router.get("/items/:id", itemControllers.read);
router.get("/companies/:id", companyControllers.read);
router.get("/companies/:id/jobs", jobControllers.readByCompany);
router.get("/users/profile", checkCredentials, userControllers.getProfile);

// Route to add a new item

router.post("/items", itemControllers.add);
router.post("/jobs", jobControllers.add);

router.post("/login", validateUser, userControllers.login);
router.get("/jobs/latest", jobControllers.browseLatest);
router.post("/register", validateUser, userControllers.add);

router.delete("/companies/:id", companyControllers.destroy);

/* ************************************************************************* */

module.exports = router;

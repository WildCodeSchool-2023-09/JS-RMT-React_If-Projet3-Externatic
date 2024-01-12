const express = require("express");

const router = express.Router();

/* ************************************************************************* */
// Define Your API Routes Here
/* ************************************************************************* */

// Import itemControllers module for handling item-related operations
const itemControllers = require("./controllers/itemControllers");
const userControllers = require("./controllers/userControllers");

const validateUser = require("./validators/validateUser");
// const checkCredentials = require("./middleware/checkCredentials");

// Route to get a list of items
router.get("/items", itemControllers.browse);

// Route to get a specific item by ID
router.get("/items/:id", itemControllers.read);

// Route to add a new item

router.post("/items", itemControllers.add);

router.post("/login", validateUser, userControllers.login);

/* ************************************************************************* */

module.exports = router;

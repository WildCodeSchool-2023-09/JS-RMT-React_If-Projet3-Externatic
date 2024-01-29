const express = require("express");
const client = require("../database/client");

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

// router.get("/items/:id", itemControllers.read);
router.get("/job/:id", (req, res) => {
  client
    .query("select * from job where id = ?", [req.params.id])
    .then(([job]) => {
      if (job[0] != null) {
        res.json(job[0]);
      } else {
        res.sendStatus(404);
      }
    })
    .catch((err) => {
      console.error(err);
      res.sendStatus(500);
    });
});

router.get("/items/:id", itemControllers.read);
router.get("/companies/:id", companyControllers.read);
router.get("/companies/:id/jobs", jobControllers.readByCompany);
router.get("/jobs/:id", jobControllers.readByCompanyJob);
router.get("/users/profile", checkCredentials, userControllers.getProfile);


// Route to add a new item

router.post("/items", itemControllers.add);
router.post("/jobs", jobControllers.add);

router.post("/login", validateUser, userControllers.login);
router.get("/jobs/all/latest", jobControllers.browseLatest);
router.post("/register", validateUser, userControllers.add);

router.post("/companies", companyControllers.add);

router.delete("/companies/:id", companyControllers.destroy);

/* ************************************************************************* */

module.exports = router;

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
const roleControllers = require("./controllers/roleControllers");

const checkCredentials = require("./middleware/checkCredentials");
const checkAdmin = require("./middleware/checkAdmin");

const validateUser = require("./validators/validateUser");
const validateAccount = require("./validators/validateAccount");
const validateCompany = require("./validators/validateCompany");

router.get("/jobs", jobControllers.browse);
router.get("/locations", jobControllers.getLocations);
router.get("/languages", jobControllers.getLanguages);
router.get("/companies", companyControllers.browse);
router.get("/consultants", userControllers.getConsultant);
router.get("/roles", roleControllers.browse);
router.get("/candidates", userControllers.getCandidates);

// Route to get a specific item by ID

// router.get("/items/:id", itemControllers.read);
router.get("/jobs/:id", jobControllers.read);
router.get("/items/:id", itemControllers.read);
router.get("/companies/:id", companyControllers.read);
router.get("/companies/:id/jobs", jobControllers.readByCompany);
router.get("/companies/:id/jobs/:id", jobControllers.readByCompanyJob);
router.get("/profile", checkCredentials, userControllers.getProfile);
router.get("/roles/:id", roleControllers.read);
router.get("/users/:id", userControllers.read);

// Route to add a new item

router.post("/items", itemControllers.add);
router.post("/jobs", jobControllers.add);

router.post("/login", validateUser, userControllers.login);
router.get("/jobs/all/latest", jobControllers.browseLatest);
router.post("/register", validateUser, userControllers.add);

router.post("/companies", checkAdmin, validateCompany, companyControllers.add);

router.put(
  "/companies/:id",
  checkAdmin,
  validateCompany,
  companyControllers.edit
);

router.delete("/companies/:id", checkAdmin, companyControllers.destroy);
router.delete("/consultants/:id", checkAdmin, userControllers.destroy);

router.put("/users/:id", checkAdmin, userControllers.updateUser); // modification du role d'un user via admin

router.put(
  "/profile",
  checkCredentials,
  validateAccount,
  userControllers.updateProfile
); // modification du profil via user

const upload = require("./services/upload");

router.put(
  "/curriculum",
  checkCredentials,
  upload.single("file"),
  userControllers.updateProfileCV
);

/* ************************************************************************* */

module.exports = router;

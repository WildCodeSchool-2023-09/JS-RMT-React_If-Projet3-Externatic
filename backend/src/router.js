const express = require("express");
const upload = require("./services/upload");

const router = express.Router();

/* ************************************************************************* */
// Define Your API Routes Here
/* ************************************************************************* */

// Import itemControllers module for handling item-related operations
const userControllers = require("./controllers/userControllers");
const jobControllers = require("./controllers/jobControllers");
const companyControllers = require("./controllers/companyControllers");
const roleControllers = require("./controllers/roleControllers");
const applicationControllers = require("./controllers/applicationControllers");
const applicationStatusControllers = require("./controllers/applicationStatusControllers");

const checkCredentials = require("./middleware/checkCredentials");
const checkAdmin = require("./middleware/checkAdmin");
const checkConsultant = require("./middleware/checkConsultant");

const validateUser = require("./validators/validateUser");
const validateAccount = require("./validators/validateAccount");
const validateCompany = require("./validators/validateCompany");
const validateCV = require("./validators/validateCV");
const validateJob = require("./validators/validateJob");

// ROUTES GET
router.get("/jobs", jobControllers.browse);
router.get("/locations", jobControllers.getLocations);
router.get("/languages", jobControllers.getLanguages);
router.get("/companies", companyControllers.browse);
router.get(
  "/consultants",
  checkCredentials,
  checkConsultant,
  userControllers.getConsultant
);
router.get("/roles", checkCredentials, checkAdmin, roleControllers.browse);
router.get(
  "/candidates",
  checkCredentials,
  checkAdmin,
  userControllers.getCandidates
);
router.get("/profile", checkCredentials, userControllers.getProfile);
router.get(
  "/profile/applications",
  checkCredentials,
  applicationControllers.readProfileApplications
);
router.get(
  "/applications/consultant",
  checkCredentials,
  checkConsultant,
  applicationControllers.readConsultantApplications
);
router.get("/jobs/all/latest", jobControllers.browseLatest);
router.get(
  "/applicationStatus",
  checkCredentials,
  checkConsultant,
  applicationStatusControllers.browse
);

// ROUTES GET BY ID
router.get("/jobs/:id", jobControllers.read);
router.get(
  "/companies/:id",
  checkCredentials,
  checkConsultant,
  companyControllers.read
);
router.get(
  "/companies/:id/jobs",
  checkCredentials,
  checkConsultant,
  jobControllers.readByCompany
);
router.get(
  "/companies/:id/jobs/:id",
  checkCredentials,
  checkConsultant,
  jobControllers.readByCompanyJob
);
router.get("/roles/:id", checkCredentials, checkAdmin, roleControllers.read);
router.get("/users/:id", checkCredentials, userControllers.read);

router.post(
  "/jobs",
  validateJob,
  checkCredentials,
  checkConsultant,
  jobControllers.add
);
router.post("/login", validateUser, userControllers.login);
router.post("/register", validateUser, userControllers.add);
router.post(
  "/companies",
  checkCredentials,
  checkAdmin,
  validateCompany,
  companyControllers.add
);
router.post("/application", checkCredentials, applicationControllers.add);

router.post("/logout", checkCredentials, userControllers.logout);
// ROUTES DELETE
router.delete(
  "/jobs/:id",
  checkCredentials,
  checkConsultant,
  jobControllers.destroy
);
router.delete(
  "/companies/:id",
  checkCredentials,
  checkAdmin,
  companyControllers.destroy
);
router.delete(
  "/users/:id",
  checkCredentials,
  checkAdmin,
  userControllers.destroy
);

// ROUTES PUT
router.put(
  "/companies/:id",
  checkCredentials,
  checkAdmin,
  validateCompany,
  companyControllers.edit
);
router.put(
  "/users/:id",
  checkCredentials,
  checkAdmin,
  userControllers.updateUser
); // modification du role d'un user via admin
router.put(
  "/profile",
  checkCredentials,
  validateAccount,
  userControllers.updateProfile
); // modification du profil via user
router.put(
  "/curriculum",
  checkCredentials,
  upload.single("file"),
  validateCV,
  userControllers.updateProfileCV
);
router.put("/jobs/:id", checkCredentials, checkConsultant, jobControllers.edit);

router.put("/application/:id", checkCredentials, applicationControllers.edit);

router.delete(
  "/application/:id",
  checkCredentials,
  applicationControllers.remove
);

/* ************************************************************************* */

module.exports = router;

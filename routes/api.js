// import PatientController
const PatientController = require("../controllers/PatientController");
// import express
const express = require("express");

// membuat object router
const router = express.Router();

/**
 * Membuat routing
 */
router.get("/", (req, res) => {
  res.send("Hello Covid API Express");
});

// Membuat routing patient
router.get("/patients", PatientController.index)
router.get("/patients/:id", PatientController.show)
router.post("/patients", PatientController.store)
router.put("/patients/:id", PatientController.update)
router.delete("/patients/:id", PatientController.destroy)
router.get("/patients/search/:name", PatientController.search)
router.get("/patients/status/positive", PatientController.findByStatus)
router.get("/patients/status/recovered", PatientController.findByStatus)
router.get("/patients/status/dead", PatientController.findByStatus)
// export router
module.exports = router;

const express = require('express');
const router = express.Router();
const applicationsController = require('../controllers/applicationsController');

router.get('/applications/job/:jobId', applicationsController.getApplications);
router.get('/applications/:id', applicationsController.getApplicationDetails);
router.put('/applications/:id/status', applicationsController.updateApplicationStatus);

module.exports = router;

const express = require('express');
const router = express.Router();
const jobsController = require('../controllers/jobsController');

router.get('/jobs', jobsController.getJobs);
router.post('/jobs', jobsController.addJob);
router.put('/jobs/:id', jobsController.updateJob);
router.delete('/jobs/:id', jobsController.deleteJob);

module.exports = router;

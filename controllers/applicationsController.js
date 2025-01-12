const Application = require('../models/Application');

exports.getApplications = async (req, res) => {
    try {
        // Fetching applications for a specific job
        const applications = await Application.getByJob(req.params.jobId);
        res.status(200).json(applications);
    } catch (error) {
        res.status(500).json({ message: 'Failed to fetch applications', error });
    }
};

exports.getApplicationDetails = async (req, res) => {
    try {
        // Fetching details of a specific application (applicant)
        const application = await Application.getById(req.params.id);
        res.status(200).json(application);
    } catch (error) {
        res.status(500).json({ message: 'Failed to fetch application details', error });
    }
};

exports.updateApplicationStatus = async (req, res) => {
    try {
        // Updating the status of an application
        await Application.updateStatus(req.params.id, req.body.status);
        res.status(200).json({ message: 'Application status updated successfully' });
    } catch (error) {
        res.status(500).json({ message: 'Failed to update application status', error });
    }
};

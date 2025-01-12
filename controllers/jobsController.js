const Job = require('../models/Job');

exports.getJobs = async (req, res) => {
    try {
        const jobs = await Job.getAll();
        res.status(200).json(jobs);
    } catch (error) {
        res.status(500).json({ message: 'Failed to fetch jobs', error });
    }
};

exports.addJob = async (req, res) => {
    try {
        await Job.create(req.body);
        res.status(201).json({ message: 'Job posting added successfully' });
    } catch (error) {
        res.status(500).json({ message: 'Failed to add job posting', error });
    }
};

exports.updateJob = async (req, res) => {
    try {
        await Job.update(req.params.id, req.body);
        res.status(200).json({ message: 'Job posting updated successfully' });
    } catch (error) {
        res.status(500).json({ message: 'Failed to update job posting', error });
    }
};

exports.deleteJob = async (req, res) => {
    try {
        await Job.delete(req.params.id);
        res.status(200).json({ message: 'Job posting deleted successfully' });
    } catch (error) {
        res.status(500).json({ message: 'Failed to delete job posting', error });
    }
};

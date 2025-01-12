const Employee = require('../models/Employee');
const Job = require('../models/Job');
const Application = require('../models/Application');

exports.getDashboardSummary = async (req, res) => {
    try {
        const totalEmployees = await Employee.getAll();
        const totalJobs = await Job.getOpenJobPostings();
        const pendingApplications = await Application.getPending();

        res.status(200).json({
            totalEmployees: totalEmployees.length,
            totalJobs: totalJobs.length,
            pendingApplications: pendingApplications.length,
        });
    } catch (error) {
        res.status(500).json({ message: 'Failed to fetch dashboard summary', error });
    }
};

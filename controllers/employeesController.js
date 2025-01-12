const Employee = require('../models/Employee');


exports.getEmployees = async (req, res) => {
    try {
        const employees = await Employee.getAll();
        res.status(200).json(employees);
    } catch (error) {
        res.status(500).json({ message: 'Failed to fetch employees', error });
    }
};

exports.addEmployee = async (req, res) => {
    try {
        await Employee.create(req.body);
        res.status(201).json({ message: 'Employee added successfully' });
    } catch (error) {
        res.status(500).json({ message: 'Failed to add employee', error });
    }
};

exports.updateEmployee = async (req, res) => {
    try {
        await Employee.update(req.params.id, req.body);
        res.status(200).json({ message: 'Employee updated successfully' });
    } catch (error) {
        res.status(500).json({ message: 'Failed to update employee', error });
    }
};

exports.deleteEmployee = async (req, res) => {
    try {
        await Employee.delete(req.params.id);
        res.status(200).json({ message: 'Employee deleted successfully' });
    } catch (error) {
        res.status(500).json({ message: 'Failed to delete employee', error });
    }
};

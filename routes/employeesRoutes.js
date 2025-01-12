const express = require('express');
const router = express.Router();
const employeesController = require('../controllers/employeesController');

router.get('/employees', employeesController.getEmployees);
router.post('/employees', employeesController.addEmployee);
router.put('/employees/:id', employeesController.updateEmployee);
router.delete('/employees/:id', employeesController.deleteEmployee);

module.exports = router;

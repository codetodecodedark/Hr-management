const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');
const morgan = require('morgan');
const bodyParser = require('body-parser');


const employeesRoutes = require('./routes/employeesRoutes');
const jobsRoutes = require('./routes/jobsRoutes');
const applicationsRoutes = require('./routes/applicationsRoutes');
const authRoutes = require('./routes/authRoutes');
const dashboardRoutes = require('./routes/dashboardRoutes');

dotenv.config();

const app = express();

app.use(cors());
app.use(morgan('dev'));
app.use(bodyParser.json());

app.use('/api/employees', employeesRoutes);
app.use('/api/jobs', jobsRoutes);
app.use('/api/applications', applicationsRoutes);
app.use('/api/auth', authRoutes);
app.use('/api/dashboard', dashboardRoutes);

module.exports = app;

const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const db = require('../config/db');

// Function to handle admin login and JWT generation
const loginAdmin = async (req, res) => {
    const { email, password } = req.body;

    try {
        // Check if admin exists
        const [rows] = await db.query('SELECT * FROM admins WHERE email = ?', [email]);

        if (rows.length === 0) {
            return res.status(400).json({ message: 'Admin not found.' });
        }

        const admin = rows[0];

        // Compare password
        const isMatch = await bcrypt.compare(password, admin.password);
        if (!isMatch) {
            return res.status(400).json({ message: 'Invalid credentials.' });
        }

        // Generate JWT token
        const token = jwt.sign({ id: admin.id, email: admin.email }, process.env.JWT_SECRET, { expiresIn: '1h' });

        res.status(200).json({ token });
    } catch (error) {
        res.status(500).json({ message: 'Server error' });
    }
};

// Function to handle admin signup 
const registerAdmin = async (req, res) => {
    const { name, email, password } = req.body;

    try {
        // Check if admin already exists
        const [existingAdmin] = await db.query('SELECT * FROM admins WHERE email = ?', [email]);

        if (existingAdmin.length > 0) {
            return res.status(400).json({ message: 'Admin already exists.' });
        }

        // Hash password
        const hashedPassword = await bcrypt.hash(password, 10);

        // Insert admin into the database
        await db.query('INSERT INTO admins (name, email, password) VALUES (?, ?, ?)', [name, email, hashedPassword]);

        res.status(201).json({ message: 'Admin created successfully.' });
    } catch (error) {
        res.status(500).json({ message: 'Server error' });
    }
};

module.exports = { loginAdmin, registerAdmin };

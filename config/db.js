const mysql = require('mysql2/promise');

const connectDatabase = async () => {
    try {
        const connection = mysql.createPool({
            host: process.env.DB_HOST || 'localhost',
            user: process.env.DB_USER || 'root',
            password: process.env.DB_PASS || 'password',
            database: process.env.DB_NAME || 'hr_management',
            waitForConnections: true,
            connectionLimit: 10,
        });
        global.db = connection; // Attached the connection globally
        console.log('Connected to MySQL database.');
    } catch (error) {
        console.error('Error connecting to the database:', error);
        process.exit(1);
    }
};

module.exports = { connectDatabase };

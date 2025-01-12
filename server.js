const app = require('./app');
require('dotenv').config();

const { connectDatabase } = require('./config/db');

const startServer = async () => {
    try {
        await connectDatabase(); // Connect to the database
        const port = process.env.PORT || 5000;
        app.listen(port, () => {
            console.log(`Server is running on port ${port}.`);
        });
    } catch (error) {
        console.error('Failed to start the server:', error);
    }
};

startServer();

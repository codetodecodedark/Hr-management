const jwt = require('jsonwebtoken');

const authMiddleware = (req, res, next) => {
    const token = req.header('Authorization')?.replace('Bearer ', '');

    if (!token) {
        return res.status(401).json({ message: 'Access Denied. No token provided.' });
    }

    try {
        const decoded = jwt.verify(token, process.env.JWT_SECRET);
        req.admin = decoded;  // Attach decoded admin data to request
        next();
    } catch (error) {
        return res.status(400).json({ message: 'Invalid or expired token.' });
    }
};

module.exports = authMiddleware;

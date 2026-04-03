// admin.js

// Middleware for admin authorization
function adminAuth(req, res, next) {
    const { user } = req;

    // Check if the user is an admin
    if (user && user.role === 'admin') {
        return next(); // User is authorized, proceed to the next middleware
    } else {
        return res.status(403).send('Unauthorized: Admins only'); // User is not authorized
    }
}

module.exports = adminAuth;

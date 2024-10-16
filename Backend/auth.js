module.exports = function roleAuthorization(requiredRole) {
   return (req,res, next) => {
    const user = req.body.user;
    if (user && user.role === requiredRole) {
        next();
    } else {
        res.status(403).json({ message: 'Forbidden: Insufficient role' });
    }
   };

};
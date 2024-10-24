module.exports = function (role) {
  return (req, res, next) => {
    const user = req.body.user; // Assuming user data is passed in the request body
    if (user && user.role === role) {
      next();
    } else {
      res.status(403).json({ message: 'Forbidden: Insufficient privileges' });
    }
  };
};
module.exports = function (role) {
  return (req, res, next) => {
    const user = req.body.user; 
    if (user && user.role === role) {
      next();
    } else {
      res.status(403).json({ message: 'Forbidden: Insufficient privileges' });
    }
  };
};
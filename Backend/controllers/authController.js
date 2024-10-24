let users = [
    { username: 'superadmin', password: 'admin123', role: 'SuperAdmin' },
    { username: 'groupadmin', password: 'admin123', role: 'GroupAdmin' },
    { username: 'user', password: 'user123', role: 'User' },
  ];
  
  exports.login = (req, res) => {
    const { username, password } = req.body;
    const user = users.find(u => u.username === username && u.password === password);
    if (user) {
      res.json(user);
    } else {
      res.status(401).json({ message: 'Invalid credentials' });
    }
  };
  
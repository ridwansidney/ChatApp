const express = require('express');
const router = express.Router();
const roleAuthorization = require('../middleware/roleAuthorization');

router.post('/promote', roleAuthorization('SuperAdmin'), (req, res) => {
  res.send('User promoted successfully');
});

module.exports = router;
const express = require('express');
const cors = require('cors');

const app = express();
app.use(cors());
app.use(express.json());

const roleAuthorization = require('./auth');
app.post('/admin/promote', roleAuthorization('Super Admin'), (req, res) => {
    // Logic for promoting a user
    res.send('User promoted successfully');
  });

app.get('/', (req, res) => {
    res.send('ChatApp Backend is Running!');
});

const PORT = 3000;
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
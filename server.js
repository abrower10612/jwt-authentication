const express = require('express');
const cors = require('cors');
require('dotenv').config();
const app = express();
app.use(cors());

app.use('/', (req, res) => {
    res.send('');
});

const port = process.env.PORT || 5000;

app.listen(port, () => console.log(`Connected and listening on port ${port} 🔥`));
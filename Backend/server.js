const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const db = require('./config/db.js');

const studentRouter = require('./controllers/student');

const app = express();

app.use(cors());
app.use(bodyParser.json());

// Define your routes
app.use('/students', studentRouter);

const PORT = 8800;
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});

require('dotenv').config();
const express = require('express');
const bodyParser = require('body-parser');
const notesRoutes = require('./routes/notes');
const app = express();
const port = process.env.APP_PORT || 3000;

// Middleware//
app.use(express.json());
app.use(bodyParser.json());

// Register Routes //
app.use('/notes', notesRoutes);

app.get('/', (req, res) => {
    res.send('Hello World!');
});

app.listen(port, () => {
    console.log(`Server berjalan di http://localhost:${port}`);
});
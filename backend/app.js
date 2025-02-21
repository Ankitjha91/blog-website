const express = require('express');
const app = express();
const port = 3000;
const Client = require('./db/conn.js');

// Middleware to parse JSON requests
app.use(express.json());

app.get('/blog',async (req, res) => {
const result = await client.query('SELECT * from blogs')
res.json({ "data": result.rows[0] });
});

app.post('/', (req, res) => {
    res.send('Got a POST request');
});

app.listen(port, () => {
    console.log(` Server running at ${port}`);
});

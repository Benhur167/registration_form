const express = require('express');
const bodyParser = require('body-parser');

const app = express();

app.use(bodyParser.urlencoded({ extended: true }));

app.get('/', (req, res) => {
    res.sendFile(__dirname + '/index.html');
});

app.post('/submit', (req, res) => {
    const { name, email, phone, event } = req.body;

    console.log("User Registered:");
    console.log(name, email, phone, event);

    res.send("Registration Successful!");
});

app.listen(3000, () => {
    console.log("Server running on http://localhost:3000");
});
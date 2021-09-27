const express = require('express');
const data = require('./tasks');

const app = express();

app.use(express.json());

app.get('/tasks', (req, res) => {
    res.json(data.tasks);
});

app.get('/tasks/:id', (req, res) => {
    const id = req.params.id;

    const data = data.tasks.find(element => element.id == id);

    if (!user) {
        res.status(404);
    }

});
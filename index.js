const express = require('express');
const data = require('./tasks');
require('./mongo');

const app = express();
app.use(express.json());

const Task = require('./models/task');


app.get('/tasks', (req, res) => {

    Task.find({}).then((data) => {

        res.json(data);

    }).catch(error => {

        console.log(error);
    });

});

app.get('/tasks/:id', (req, res) => {
    const id = req.params.id;

    Task.findOne({_id: id}).then((data) => {

        if (!data) {
            res.status(404);
            res.json({ error: "Task with given id doesn't exists"});
            return;
        }

        res.json(data);

    }).catch(error => {

        console.error(error);
        res.status(404);
    });


});

app.post('/tasks', (req, res) => {
    const messageToAdd = req.body.message;
    const statusToAdd = req.body.status;

    new Task({ message: messageToAdd, status: statusToAdd}).save().then((data) => {

        res.status(201);
        res.json(data);
    }).catch(error => {

        res.json(error);
    });

});


app.put('/tasks/:id', (req, res) => {
    const id = req.body.id;
    const newMessage = req.body.message;
    const newStatus = req.body.status;

    Task.updateOne({_id: id}, {message: newMessage, status: newStatus}).then((data) => {

        if (!data) {
            res.json({ error: "Task with given id doesn't exists"});
            res.status(404);
            return;
        }

        res.status(200);
        res.json(data);
    }).catch(error => {

        res.json({ error: "Task with given id doesn't exists"});
        res.status(404);
    });
});


app.delete('/tasks/:id', (req, res) => {
    const id = req.params.id;

    Task.deleteOne({_id: id}).then((data) => {

        if (!data) {
            res.status(404);
            res.json({ error: "Task with given id doesn't exists"});
            
            return;
        }

        res.send(data);
        res.status(204);

    }).catch(error => {

        res.status(404);
        res.json({ error: "Task with given id doesn't exists"}); 
    });
 
});

app.listen(3000);
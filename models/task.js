const mongoose = require('mongoose');

const Task = mongoose.model('Task', {
    message: {
        type: String
    },
    status: {
        type: String
    }
});

module.exports = Task;
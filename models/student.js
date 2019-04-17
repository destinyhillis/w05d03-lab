const mongoose = require('mongoose');

const studentSchema = new mongoose.Schema({
    name: {type: String, required: true},
    age: {type: Number, required: true},
    Here: Boolean
});

const Student = mongoose.model('Student', studentSchema);

module.export = student;
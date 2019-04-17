const mongoose = require('mongoose');

const studentSchema = new mongoose.Schema({
    name: {type: String, required: true},
    age: {type: Number, required: true},
    Here: Boolean,
    bestTrait: String
});

const Student = mongoose.model('Student', studentSchema);

module.export = Student;
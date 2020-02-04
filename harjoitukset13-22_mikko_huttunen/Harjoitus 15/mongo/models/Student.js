let mongoose = require('mongoose');
const Grade = require('./Grade');

let students = new mongoose.Schema({
    studentcode: { type: String, unique: true, required: true, match: /[a-z]{1}[0-9]{4}/ },
    name: { type: String, required: true, max: 80 },
    email: { type: String, unique: true, required: true, max: 60 },
    studypoints: { type: Number, required: false, min: 0, max: 300 },
    grades: { type: [Grade], required: true },
});

const StudentModel = mongoose.model('Student', students);
module.exports = StudentModel;
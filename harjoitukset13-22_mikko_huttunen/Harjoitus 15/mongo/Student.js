let mongoose = require('mongoose');

let students = new mongoose.Schema({
    studentcode: String,
    name: String,
    email: String,
    studypoints: Number,
    grades: [{
        coursecode: String,
        grade: Number,
    }],
});

module.exports = mongoose.model('Students', students);
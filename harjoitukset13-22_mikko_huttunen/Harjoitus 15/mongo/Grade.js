let mongoose = require('mongoose');

let grades = new mongoose.Schema({
    coursecode: String,
    grade: Number,
});

module.exports = mongoose.model('Grades', grades);
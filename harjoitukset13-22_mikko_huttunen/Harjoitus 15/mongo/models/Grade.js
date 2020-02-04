let mongoose = require('mongoose');

let GradeSchema = new mongoose.Schema({
    coursecode: String,
    grade: Number,
});

//module.exports = mongoose.model('Grade', GradeSchema);
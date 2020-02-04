let mongoose = require('mongoose');
const Schema = mongoose.Schema;

let Grade = new Schema({
    coursecode: { type: String, required: true, max: 50 },
    grade: { type: Number, required: false, min: 0, max: 5 },
});

module.exports = Grade;
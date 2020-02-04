require('./dbconnection');
const studentModel = require('./models/Student');

let student = new studentModel({
    studentcode: 't6789',
    name: 'Kalle Koululainen',
    email: 't6789@jamk.fi',
    studypoints: 30,
    grades: [{
        coursecode: 'HTS10900',
        grade: 4,
    }],
});

function handleError(err) {
    console.error(err);
    process.exit(1);
};

student.save()
    .then(doc => {
        console.log(doc)
    })
    .catch(err => {
        console.error(err)
    });
require('./dbconnection');
const studentModel = require('./models/Student');

studentModel
  .find({
    studypoints: {$lt: 100}
  })
  .then(doc => {
    console.log(doc)
  })
  .catch(err => {
    console.error(err)
  })
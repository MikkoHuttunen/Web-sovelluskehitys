require('./dbconnection');
const studentModel = require('./models/Student');

studentModel
  .findOneAndRemove({
    studentcode: 't6789',
  })
  .then(response => {
    console.log(response)
  })
  .catch(err => {
    console.error(err)
  });
require('./dbconnection');
const studentModel = require('./models/Student');

studentModel
  .findOneAndUpdate(
    {
        studentcode: 't6789'
    }, 
    {
        studypoints: 60
    },
    {
      new: true,
      runValidators: true
    })
  .then(doc => {
    console.log(doc)
  })
  .catch(err => {
    console.error(err)
  })
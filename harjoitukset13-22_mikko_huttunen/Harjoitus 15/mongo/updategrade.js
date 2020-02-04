require('./dbconnection');
const studentModel = require('./models/Student');

studentModel
  .findOneAndUpdate(
    {
        studentcode: 't6789'
    }, 
    {
        $set: {'grades.0.grade': 5 }
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
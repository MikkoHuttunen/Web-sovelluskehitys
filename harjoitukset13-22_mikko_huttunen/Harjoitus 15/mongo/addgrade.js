require('./dbconnection');
const studentModel = require('./models/Student');

studentModel
  .findOneAndUpdate(
    {
        studentcode: 't6789'
    }, 
    {
        $push: { grades: [{
            coursecode: 'HTS12300',
            grade: 3,
        }]
    }},
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
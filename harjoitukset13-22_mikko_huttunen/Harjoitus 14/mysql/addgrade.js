const connection = require('./dbconnection');
const Dbmethods = require('./Dbmethods');

function handleError(err) {
    console.error(err);
    process.exit(1);
}

Dbmethods.addGrade('a1234', 'cc100', '4', '5', function(err, result) {
    if (err) {
        return handleError(err);
    }
    console.log(result.affectedRows + ' records inserted' );
});

connection.end();
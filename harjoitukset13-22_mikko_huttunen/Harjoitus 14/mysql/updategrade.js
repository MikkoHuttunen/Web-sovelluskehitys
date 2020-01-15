const connection = require('./dbconnection');
const Dbmethods = require('./Dbmethods');

function handleError(err) {
    console.error(err);
    process.exit(1);
}

Dbmethods.updateGrade('5', 'a1234', 'cc100', function(err, result) {
    if (err) {
        return handleError(err);
    }
    console.log(result.affectedRows + ' records updated' );
});

connection.end();
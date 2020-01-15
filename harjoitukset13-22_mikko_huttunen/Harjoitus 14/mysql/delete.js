const connection = require('./dbconnection');
const Dbmethods = require('./Dbmethods');

function handleError(err) {
    console.error(err);
    process.exit(1);
}

Dbmethods.deleteGrade('a1234', function(err, result) {
    if (err) {
        return handleError(err);
    }
    console.log(result.affectedRows + ' records deleted' );
}),

Dbmethods.delete('a1234', function(err, result) {
    if (err) {
        return handleError(err);
    }
    console.log(result.affectedRows + ' records deleted' );
});

connection.end();
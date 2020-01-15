/*
 *  add.js lisää uuden opiskelijan kantaan
 */
const connection = require('./dbconnection');
const Dbmethods = require('./Dbmethods');

function handleError(err) {
    console.error(err);
    process.exit(1);
}

Dbmethods.add('a1234', 'Ossi Opiskelija', 'a1234@jamk.fi', 105, function(err, result) {
    if (err) {
        return handleError(err);
    }
    console.log(result.affectedRows + ' records inserted' );
});

connection.end();
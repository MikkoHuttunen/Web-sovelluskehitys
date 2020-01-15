const conn = require('./dbconnection');

const Dbmethods = {
    /*metodi on esitetty oliosyntaksilla eli se on olion sisältämä avain:arvo -pari.
    callback on anonyymi funktio jolla käsitellään kyselyn tulos. Se luodaan
    tiedostoon jossa tämä metodi suoritetaan (add.js)*/

    add: function (studentcode, name, email, studypoints, callback) {
        return conn.query('insert into Students set studentcode = ?, name = ?, email = ?, studypoints = ?',
            [studentcode, name, email, studypoints], callback);
    },

    findAll: function(callback) {
        return conn.query('select * from Students',
            callback);
    },

    deleteGrade: function(studentcode, callback) {
        return conn.query('delete from Grades where studentcode = ?',
            [studentcode], callback);
    },

    delete: function (studentcode, callback) {
        return conn.query('delete from Students where studentcode = ?',
            [studentcode], callback);
    },

    addGrade: function (studentcode, coursecode, grade, studypoints, callback) {
        return conn.query('insert into Grades set studentcode = ?, coursecode = ?, grade = ?',
            [studentcode, coursecode, grade], callback),
        conn.query('update Students set studypoints = studypoints + ? where studentcode = ?',
            [studypoints, studentcode], callback);
    },

    find: function (studypoints, callback) {
        return conn.query('select * from Students where studypoints < ?',
            [studypoints], callback);
    },

    update: function (studypoints, studentcode, callback) {
        return conn.query('update Students set studypoints = studypoints + ? where studentcode = ?',
            [studypoints, studentcode], callback);
    },

    updateGrade: function (grade, studentcode, coursecode, callback) {
        return conn.query('update Grades set grade = ? where studentcode = ? and coursecode = ?',
            [grade, studentcode, coursecode], callback);
    },
    // Tee tähän muut metodit
};

module.exports = Dbmethods;
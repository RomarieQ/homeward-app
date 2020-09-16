const Sequelize = require('sequelize');
// const sequelize = new Sequelize(process.env.DATABASE_URL, {
//     dialect: 'postgres'
// });

const sequelize = new Sequelize('homeward-app', 'postgres', 'LeatherManToolsarethebest!', { // create an instance of Sequelize, sequelize variable.
    host: 'localhost', // points to the local port for Sequelize.
    dialect: 'postgres' // identifies the QL dialect, this could be MSSQL, SQLLite, etc...
});

sequelize.authenticate().then(
    function() {
        console.log('homewardApp postgress database');
    },
    function(err) {
        console.log(err);
    }
);
module.exports = sequelize;
const { Sequelize } = require('sequelize');

const sequelize = new Sequelize('quizzer_games', 'root', '', {
    host: 'localhost',
    dialect: 'mysql'
});

module.exports = sequelize;

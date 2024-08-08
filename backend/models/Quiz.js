const { Sequelize, DataTypes } = require('sequelize');
const sequelize = require('../config/database');

const Quiz = sequelize.define('Quiz', {
    title: {
        type: DataTypes.STRING,
        allowNull: false
    }
});

const Question = sequelize.define('Question', {
    questionText: {
        type: DataTypes.STRING,
        allowNull: false
    }
});

const Option = sequelize.define('Option', {
    optionText: {
        type: DataTypes.STRING,
        allowNull: false
    },
    isCorrect: {
        type: DataTypes.BOOLEAN,
        defaultValue: false
    }
});

// Associations
Quiz.hasMany(Question, { foreignKey: 'QuizId' });
Question.belongsTo(Quiz, { foreignKey: 'QuizId' });
Question.hasMany(Option, { foreignKey: 'QuestionId' });
Option.belongsTo(Question, { foreignKey: 'QuestionId' });

module.exports = { Quiz, Question, Option };

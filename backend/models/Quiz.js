const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');

const Quiz = sequelize.define('Quiz', {
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    title: {
        type: DataTypes.STRING,
        allowNull: false
    }
});

const Question = sequelize.define('Question', {
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    questionText: {
        type: DataTypes.STRING,
        allowNull: false
    }
});

const Option = sequelize.define('Option', {
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    optionText: {
        type: DataTypes.STRING,
        allowNull: false
    },
    isCorrect: {
        type: DataTypes.BOOLEAN,
        allowNull: false
    }
});

Quiz.hasMany(Question, { onDelete: 'CASCADE' });
Question.belongsTo(Quiz);
Question.hasMany(Option, { onDelete: 'CASCADE' });
Option.belongsTo(Question);

module.exports = { Quiz, Question, Option };

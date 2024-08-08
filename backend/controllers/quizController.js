const { Quiz, Question, Option } = require('../models/Quiz');

// Get all quizzes
exports.getQuizzes = async (req, res) => {
    try {
        const quizzes = await Quiz.findAll({
            include: {
                model: Question,
                include: Option
            }
        });
        res.json(quizzes);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};

// Create a new quiz
exports.createQuiz = async (req, res) => {
    const { title, questions } = req.body;
    try {
        const quiz = await Quiz.create({ title });
        for (const question of questions) {
            const createdQuestion = await Question.create({ questionText: question.questionText, QuizId: quiz.id });
            for (const option of question.options) {
                await Option.create({ optionText: option.optionText, isCorrect: option.isCorrect, QuestionId: createdQuestion.id });
            }
        }
        res.status(201).json(quiz);
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
};

// Get a specific quiz
exports.getQuizById = async (req, res) => {
    try {
        const quiz = await Quiz.findByPk(req.params.id, {
            include: {
                model: Question,
                include: Option
            }
        });
        if (!quiz) return res.status(404).json({ message: 'Quiz not found' });
        res.json(quiz);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};

// Delete a quiz
exports.deleteQuiz = async (req, res) => {
    try {
        const quiz = await Quiz.findByPk(req.params.id);
        if (!quiz) return res.status(404).json({ message: 'Quiz not found' });

        await quiz.destroy();
        res.json({ message: 'Quiz removed' });
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};

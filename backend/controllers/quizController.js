const Quiz = require('../models/Quiz');

// Get all quizzes
exports.getQuizzes = async (req, res) => {
    try {
        const quizzes = await Quiz.find();
        res.json(quizzes);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};

// Create a new quiz
exports.createQuiz = async (req, res) => {
    const { title, questions } = req.body;
    const newQuiz = new Quiz({ title, questions });

    try {
        const savedQuiz = await newQuiz.save();
        res.status(201).json(savedQuiz);
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
};

// Get a specific quiz
exports.getQuizById = async (req, res) => {
    try {
        const quiz = await Quiz.findById(req.params.id);
        if (!quiz) return res.status(404).json({ message: 'Quiz not found' });
        res.json(quiz);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};

// Delete a quiz
exports.deleteQuiz = async (req, res) => {
    try {
        const quiz = await Quiz.findById(req.params.id);
        if (!quiz) return res.status(404).json({ message: 'Quiz not found' });

        await quiz.remove();
        res.json({ message: 'Quiz removed' });
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};

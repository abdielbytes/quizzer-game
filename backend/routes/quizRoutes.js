const express = require('express');
const router = express.Router();
const quizController = require('../controllers/quizController');

router.get('/quizzes', quizController.getQuizzes);
router.post('/quizzes', quizController.createQuiz);
router.get('/quizzes/:id', quizController.getQuizById);
router.delete('/quizzes/:id', quizController.deleteQuiz);

module.exports = router;

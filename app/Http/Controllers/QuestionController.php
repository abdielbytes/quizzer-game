<?php

namespace App\Http\Controllers;

use App\Models\Question;
use App\Models\Quiz;
use Illuminate\Http\Request;
use Inertia\Inertia;

class QuestionController extends Controller
{
    /**
     * Display a listing of the questions for a specific quiz.
     *
     * @param  Quiz  $quiz
     * @return \Inertia\Response
     */
    public function index(Quiz $quiz)
    {
        $questions = $quiz->questions;

        return Inertia::render('Question/Index', ['quiz' => $quiz, 'questions' => $questions]);
    }

    /**
     * Show the form for creating a new question for a specific quiz.
     *
     * @param  Quiz  $quiz
     * @return \Inertia\Response
     */
    public function create(Quiz $quiz)
    {
        return Inertia::render('Question/Create', ['quiz' => $quiz]);
    }

    /**
     * Store a newly created question in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  Quiz  $quiz
     * @return \Illuminate\Http\RedirectResponse
     */
    public function store(Request $request, Quiz $quiz)
    {
        $request->validate([
            'question_text' => 'required|string|max:255',
            'option1' => 'required|string|max:255',
            'option2' => 'required|string|max:255',
            'option3' => 'nullable|string|max:255',
            'option4' => 'nullable|string|max:255',
            'correct_option' => 'required|string|in:option1,option2,option3,option4',
        ]);

        $quiz->questions()->create($request->all());

        return redirect()->route('quizzes.questions.index', $quiz)->with('success', 'Question created successfully.');
    }

}

<?php
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\QuizController;
use Inertia\Inertia;

Route::get('/', function () {
    return Inertia::render('Welcome', [
        'canLogin' => Route::has('login'),
        'canRegister' => Route::has('register'),
        'laravelVersion' => Application::VERSION,
        'phpVersion' => PHP_VERSION,
    ]);
});

Route::get('/dashboard', function () {
    return Inertia::render('Dashboard');
})->middleware(['auth', 'verified'])->name('dashboard');

Route::middleware('auth')->group(function () {
    Route::get('/profile', [ProfileController::class, 'edit'])->name('profile.edit');
    Route::patch('/profile', [ProfileController::class, 'update'])->name('profile.update');
    Route::delete('/profile', [ProfileController::class, 'destroy'])->name('profile.destroy');
});

Route::get('active-quizzes', function (){
    return Inertia::render('ActiveQuizzes'); // Assuming you have an ActiveQuizzes.vue component
})->name('active-quizzes');

Route::get('create-quiz', function (){
    return Inertia::render('Quiz/CreateQuiz');
})->name('create-quiz');



// Other routes...

Route::middleware('auth')->group(function () {
    Route::get('quizzes', [QuizController::class, 'index'])->name('quizzes.index');
    Route::get('quizzes/create', [QuizController::class, 'create'])->name('quizzes.create');
    Route::post('quizzes', [QuizController::class, 'store'])->name('quizzes.store');

    Route::prefix('quizzes/{quiz}')->group(function () {
        Route::get('questions', [QuestionController::class, 'index'])->name('quizzes.questions.index');
        Route::get('questions/create', [QuestionController::class, 'create'])->name('quizzes.questions.create');
        Route::post('questions', [QuestionController::class, 'store'])->name('quizzes.questions.store');
        // Additional routes for show, edit, update, and delete can be added here.
    });

});


require __DIR__.'/auth.php';

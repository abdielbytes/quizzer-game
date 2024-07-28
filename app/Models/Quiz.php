<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;
use App\Models\Question;
class Quiz extends Model
{
    use HasFactory;
    protected $fillable = ['user_id', 'title', 'description'];

    /**
     * Get the user that owns the quiz.
     */
    public function user(): BelongsTo
    {
        return $this->belongsTo(User::class);
    }

    public function question(): HasMany
    {
        return $this->hasMany(Question::class);
    }
}

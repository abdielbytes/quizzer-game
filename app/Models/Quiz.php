<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Quiz extends Model
{
    use HasFactory;
    protected $fillable = ['user_id', 'title', 'description'];

    /**
     * Get the user that owns the quiz.
     */
    public function user()
    {
        return $this->belongsTo(User::class);
    }
}

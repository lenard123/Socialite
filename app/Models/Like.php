<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Like extends Model
{
    use HasFactory;

    public function liker()
    {
        return $this->belongsTo(User::class, 'user_id');
    }

    public function likeable()
    {
        return $this->morphTo();
    }
}

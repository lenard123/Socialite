<?php

namespace App\Models\Contracts;

use App\Models\Like;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Support\Facades\Auth;

abstract class Likeable extends Model
{
    public function likers()
    {
        return $this->morphMany(Like::class, 'likeable');
    }

    public function getIsLikeAttribute()
    {
        if (Auth::check()) {
            return Auth::user()->isLiked($this);
        }

        return false;
    }
}
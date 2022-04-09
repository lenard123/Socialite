<?php

namespace App\Models\Traits;

use App\Models\Like;

trait HasLikes
{
    public function likes()
    {
        return $this->hasMany(Like::class);
    }
}
<?php

namespace App\Models;

use App\Models\Contracts\Likeable;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\SoftDeletes;

class Post extends Likeable
{
    use HasFactory, SoftDeletes;

    protected $with = ['author'];

    protected $withCount = ['likers'];

    protected $appends = ['is_like'];

    public function author()
    {
        return $this->belongsTo(User::class, 'user_id');
    }
}

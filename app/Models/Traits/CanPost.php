<?php

namespace App\Models\Traits;

use App\Models\Post;

trait CanPost
{
    public function post($content) : Post
    {
        $post = new Post();
        $post->author()->associate($this);
        $post->content = $content;
        $post->save();
        return $post;
    }
}
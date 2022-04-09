<?php

namespace App\Models\Traits;

use App\Models\Contracts\Likeable;
use App\Models\Like;

trait CanLike
{
    public function like(Likeable $likeable)
    {
        if ($this->isLiked($likeable)) return $this;

        $like = new Like();
        $like->liker()->associate($this);
        $like->likeable()->associate($likeable);
        $like->save();

        return $this;
    }

    public function unlike(Likeable $likeable)
    {
        if (! $this->isLiked($likeable)) return $this;

        $likeable->likers()
            ->whereHas('liker', fn($q) => $q->whereId($this->id))
            ->delete();

        return $this;
    }

    public function isLiked(Likeable $likeable)
    {
        if (! $likeable->exists) return false;

        return $likeable->likers()
            ->whereHas('liker', fn($q) => $q->whereId($this->id))
            ->exists();
    }
}
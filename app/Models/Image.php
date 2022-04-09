<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Image extends Model
{
    use HasFactory;

    protected $fillable = ['reference'];

    public function getUrlAttribute()
    {
        return $this->reference;
    }

    public function setAbsolute(string $url)
    {
        $this->reference = $url;
        $this->type = 'absolute';
        $this->save();
    }
}

<?php

namespace App\Models;

use App\Models\Traits\CanLike;
use App\Models\Traits\CanPost;
use App\Models\Traits\HasLikes;
use App\Models\Traits\HasPosts;
use Illuminate\Contracts\Auth\MustVerifyEmail;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Foundation\Auth\User as Authenticatable;
use Illuminate\Notifications\Notifiable;
use Laravel\Sanctum\HasApiTokens;

class User extends Authenticatable
{
    use CanPost,
        CanLike,
        HasApiTokens, 
        HasFactory, 
        HasPosts,
        HasLikes, 
        Notifiable;

    /**
     * The attributes that are mass assignable.
     *
     * @var array<int, string>
     */
    protected $fillable = [
        'name',
        'email',
        'password',
        'github_id'
    ];

    /**
     * The attributes that should be hidden for serialization.
     *
     * @var array<int, string>
     */
    protected $hidden = [
        'password',
        'remember_token',
    ];

    /**
     * The attributes that should be cast.
     *
     * @var array<string, string>
     */
    protected $casts = [
        'email_verified_at' => 'datetime',
    ];

    protected $appends = ['avatar_url'];

    protected $with = ['avatar'];

    public function avatar()
    {
        return $this->belongsTo(Image::class)->withDefault([
            'type' => 'absolute',
            'reference' => 'https://res.cloudinary.com/djasbri35/image/upload/c_crop,h_1050,w_1050/v1649516817/global/default_avatar.png'
        ]);
    }

    public function getAvatarUrlAttribute()
    {
        return $this->avatar->url;
    }

    public function setAvatar(string $url)
    {
        $avatar = $this->avatar;
        $avatar->setAbsolute($url);

        $this->avatar()->associate($avatar);
        $this->save();
    }

}

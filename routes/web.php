<?php

use App\Models\User;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Route;
use Laravel\Socialite\Facades\Socialite;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

Route::get('/github/redirect', function () {
    return Socialite::driver('github')->redirect();
});

Route::get('/github/callback', function () {
    $githubUser = Socialite::driver('github')->user();
    $user = User::where('github_id', $githubUser->id)->first();

    if (!$user) {
        $user = User::create([
            'name' => $githubUser->name,
            'github_id' => $githubUser->id,
        ]);

        if ( !User::where('email', $githubUser->email)->exists() ) {
            $user->email = $githubUser->email;
        }

        $user->setAvatar($githubUser->avatar);
    }

    Auth::login($user);

    return redirect('/');
});


Route::view('{path}', 'index')->where('path', '(.*)');
<?php

namespace App\Http\Controllers;

use App\Models\Post;
use Illuminate\Http\Request;

class PostController extends Controller
{
    public function create(Request $request)
    {
        $this->validate($request, ['content' => 'required|max:600']);

        return $request->user()->post($request->content);
    }
}

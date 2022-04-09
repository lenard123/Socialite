<?php

namespace App\Http\Controllers;

use App\Http\Requests\LikeRequest;
use App\Http\Requests\UnlikeRequest;
use Illuminate\Http\Request;

class LikeController extends Controller
{
    public function like(LikeRequest $request)
    {
        $request->user()->like($request->likeable());

        return response()->json([
            'likers_count' => $request->likeable()->likers()->count(),
            'is_like' => true
        ]);
    }

    public function unlike(UnlikeRequest $request)
    {
        $request->user()->unlike($request->likeable());

        return response()->json([
            'likers_count' => $request->likeable()->likers()->count(),
            'is_like' => false
        ]);
    }
}

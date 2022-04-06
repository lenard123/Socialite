<?php

namespace App\Http\Responses;

use Laravel\Fortify\Contracts\LoginResponse as LoginResponseContracts;

class LoginResponse implements LoginResponseContracts
{
    public function toResponse($request)
    {
        return response()->json($request->user());
    }
}
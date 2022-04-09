<?php

namespace App\Http\Requests;

use App\Models\Contracts\Likeable;
use Illuminate\Foundation\Http\FormRequest;

class LikeRequest extends FormRequest
{
    public function authorize()
    {
        return true;
    }

    public function rules()
    {
        return [
            // the class of the liked object
            'likeable_type' => [
                "bail",
                "required",
                "string",
                function ($attribute, $value, $fail) {
                    if (! class_exists($value, true)) {
                        $fail($value . " is not an existing class");
                    }


                    if (! in_array(Likeable::class, class_parents($value))) {
                        $fail($value . " is not App\Models\Contracts\Likeable");
                    }
                },
            ],

            // the id of the liked object
            'id' => [
                "required",
                function ($attribute, $value, $fail) {
                    $class = $this->input('likeable_type');

                    if (! $class::where('id', $value)->exists()) {
                        $fail($value . " does not exists in database");
                    }
                },
            ],
        ];
    }

    public function likeable(): Likeable
    {
        $class = $this->input('likeable_type');

        return $class::findOrFail($this->input('id'));
    }
}

<?php

namespace App;

use Illuminate\Database\Eloquent\Model;
use App\User;
use App\ApplySubject;

class Apply extends Model
{
    protected $guarded = [];

    public function user(){
        return $this->belongsTo(User::class);
    }

}

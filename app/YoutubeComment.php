<?php

namespace App;

use Illuminate\Database\Eloquent\Model;
use App\User;
use App\Youtube;

class YoutubeComment extends Model
{
    protected $guarded = [];

    public function user(){
        return $this->belongsTo(User::class);
    }

    public function youtube(){
        return $this->belongsTo(Youtube::class);
    }
}

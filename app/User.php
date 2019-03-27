<?php

namespace App;

use Illuminate\Notifications\Notifiable;
use Illuminate\Contracts\Auth\MustVerifyEmail;
use Illuminate\Foundation\Auth\User as Authenticatable;

use App\Notice;
use App\NoticeComment;
use App\Youtube;
use App\YoutubeComment;
use App\Subject;
use App\Apply;
use App\ApplySubject;

class User extends Authenticatable
{
    use Notifiable;

    protected $fillable = [
        'name', 'email', 'password',
    ];

    protected $hidden = [
        'password', 'remember_token',
    ];

    protected $casts = [
        'email_verified_at' => 'datetime',
    ];

    public function notices(){
        return $this->hasMany(Notice::class);
    }
    public function noticeComments(){
        return $this->hasMany(NoticeComment::class);
    }

    public function youtubes(){
        return $this->hasMany(Youtube::class);
    }

    public function youtubeComments(){
        return $this->hasMany(YoutubeComment::class);
    }

    public function subjects(){
        return $this->hasMany(Subject::class);
    }

    public function applies(){
        return $this->hasMany(Apply::class);
    }

    //Helpers

    public function isAdmin()
    {
        return $this->id === 1;
    }
}

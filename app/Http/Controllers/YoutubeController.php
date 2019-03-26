<?php

namespace App\Http\Controllers;

use App\Youtube;
use Illuminate\Http\Request;
use App\Http\Requests\YoutubeRequest;
use App\YoutubeComment;

class YoutubeController extends Controller
{
    public function index(Request $request)
    {
        $youtubes = Youtube::with('user')->with('youtubeComments')->latest()->get();
        $user = $request->user();

        return response()->json([
            'youtubes'=>$youtubes,
            'user' => $user
        ]);
    }

    public function create()
    {
        //
    }

    public function store(YoutubeRequest $request)
    {
        $user = $request->user();
        $user->youtubes()->create($request->all());
    }

    public function show(Youtube $youtube, YoutubeComment $youtubeComment)
    {
        $youtube->user;

        $youtubeComments = $youtube->youtubeComments()->with('user')->latest()->get();

        return response()->json([
            'youtube' => $youtube,
            'youtubeComments' => $youtubeComments
        ]);
    }

    public function edit(Youtube $youtube)
    {
        //
    }

    public function update(Request $request, Youtube $youtube)
    {
        //
    }

    public function destroy(Youtube $youtube)
    {
        //
    }
}

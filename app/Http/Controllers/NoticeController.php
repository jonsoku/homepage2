<?php

namespace App\Http\Controllers;

use App\Notice;
use Illuminate\Http\Request;
use App\Http\Requests\NoticeRequest;
use Illuminate\Support\Facades\Validator;

class NoticeController extends Controller
{
    public function index(Request $request)
    {
        $notices = Notice::with('user')->with('noticeComments')->latest()->get();

        $user = $request->user();

        return response()->json([
            'notices' => $notices,
            'user' => $user
        ]);
    }

    public function store(NoticeRequest $request)
    {
        $user = $request->user();


        $user->notices()->create($request->all());

    }

    public function show(Request $request, Notice $notice)
    {
        $notice->user;
        $noticeComments = $notice->noticeComments()->with('user')->latest()->get();
        $user = $request->user();

        return response()->json([
            'notice' => $notice,
            'noticeComments' => $noticeComments,
            'user' => $user
        ]);
    }


    public function update(NoticeRequest $request, Notice $notice)
    {
        $notice->update($request->all());
    }

    public function destroy(Notice $notice)
    {
        $notice->delete();
    }
}

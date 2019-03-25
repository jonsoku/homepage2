<?php

namespace App\Http\Controllers;

use App\NoticeComment;
use Illuminate\Http\Request;
use App\Notice;

class NoticeCommentController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        //
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request, Notice $notice)
    {
        $user = $request->user();

        $user->noticeComments()->create(array_merge(
            $request->all(),
            ['notice_id' => $notice->id]
        ));
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\NoticeComment  $noticeComment
     * @return \Illuminate\Http\Response
     */
    public function show(NoticeComment $noticeComment)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\NoticeComment  $noticeComment
     * @return \Illuminate\Http\Response
     */
    public function edit(NoticeComment $noticeComment)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\NoticeComment  $noticeComment
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, NoticeComment $noticeComment)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\NoticeComment  $noticeComment
     * @return \Illuminate\Http\Response
     */
    public function destroy(NoticeComment $noticeComment)
    {
        //
    }
}

<?php

namespace App\Http\Controllers;

use App\Apply;
use App\ApplySuject;
use Illuminate\Http\Request;

class ApplyController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index(Request $request)
    {
        $user = $request->user()->with('applies')->get();
        return response()->json([
            'user' => $user
        ]);
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {

    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        $request->user()->applies()->create([
            'name' => request('name'),
            'gender' => request('gender'),
            'age' => request('age'),
            'java' => request('java'),
            'java2' => request('java2'),
            'java2' => request('java3'),
            'web' => request('web'),
            'web2' => request('web2'),
            'web3' => request('web3'),
        ]);
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Apply  $apply
     * @return \Illuminate\Http\Response
     */
    public function show(Apply $apply , ApplySuject $applySuject)
    {

    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\Apply  $apply
     * @return \Illuminate\Http\Response
     */
    public function edit(Apply $apply)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Apply  $apply
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, Apply $apply)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Apply  $apply
     * @return \Illuminate\Http\Response
     */
    public function destroy(Apply $apply)
    {
        //
    }
}

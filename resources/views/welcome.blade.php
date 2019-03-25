<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <meta name="csrf-token" content="{{ csrf_token() }}">
    <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.8.1/css/all.css" integrity="sha384-50oBUHEmvpQ+1lW4y57PTFmhCaXp0ML5d60M1M7uH2+nqUivzIebhndOJK28anvf" crossorigin="anonymous">
    <link rel="stylesheet" href="{{asset('css/style.css')}}">
    <link rel="stylesheet" href="{{asset('css/reset.css')}}">
    <title>Document</title>
</head>
<body>
    @if (Route::has('login'))
        <div class="login-form">
            @auth
                <a class="login-form-home" href="{{ url('/home') }}">Home</a>
            @else
                <a class="login-form-login" href="{{ route('login') }}">Login</a>
                @if (Route::has('register'))
                    <a class="login-form-register" href="{{ route('register') }}">Register</a>
                @endif
            @endauth
        </div>
    @endif
    <div id="root"></div>
    <script src="{{ asset('js/app.js') }}" defer></script>
</body>
</html>

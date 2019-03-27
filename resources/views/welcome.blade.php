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
    <style>
    @font-face { font-family: 'Busan'; font-style: normal; font-weight: 400; src: url('//cdn.jsdelivr.net/korean-webfonts/1/orgs/govs/busan/Busan/Busan.woff2') format('woff2'), url('//cdn.jsdelivr.net/korean-webfonts/1/orgs/govs/busan/Busan/Busan.woff') format('woff'); } .busan * { font-family: 'Busan', sans-serif; }
    @font-face { font-family: 'S-CoreDream-9Black'; src: url('https://cdn.jsdelivr.net/gh/projectnoonnu/noonfonts_six@1.2/S-CoreDream-9Black.woff') format('woff'); font-weight: normal; font-style: normal; }
    @font-face { font-family: 'S-CoreDream-3Light'; src: url('https://cdn.jsdelivr.net/gh/projectnoonnu/noonfonts_six@1.2/S-CoreDream-3Light.woff') format('woff'); font-weight: normal; font-style: normal; }
    </style>
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

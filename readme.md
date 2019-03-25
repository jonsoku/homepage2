#JONGSEOK TEST PAGE 1
    연습용 페이지입니다.

## Screens
- [ ] Home
- [ ] Introduce
- [ ] Notice
- [ ] Apply
- [ ] Board
- [ ] Post
- [ ] Task
- [ ] Contact

## 기능
- [ ] comment 삭제기능 
- [ ] 조회수기능
- [ ] 파일업로드기능
- [ ] 이미지 미리보기 기능
- [ ] 글자수 제한 (백엔드는 구현했는데.. 리액트 화면단에서 어떻게 해야 될지 모르겠음..)



### strat project
    composer create-project --prefer-dist laravel/laravel project2 "5.7.*"
### .env
    DB_CONNECTION=mysql
    DB_HOST=laravel.cim78dtgz3dv.ap-northeast-1.rds.amazonaws.com
    DB_PORT=3306
    DB_DATABASE=
    DB_USERNAME=
    DB_PASSWORD=

### AppServiceProvider.php
    App\Provider\AppServiceProvider.php에 아래 라인 추가.

    use Illuminate\Support\Facades\Schema;

    public function boot()
    {
        Schema::defaultStringLength(191);
    }
### setup
    php artisan preset react

    npm install && npm run dev

    yarn add react-router-dom
    npm install react-router-dom && axios && styled-components && styled-reset && react-js-pagination && react-player

    yarn add axios
    npm install axios

    yarn add styled-components
    npm install styled-components

    yarn add styled-reset
    npm install styled-reset

    npm install react-js-pagination
    
    npm install react-player

    php artisan serve
    
    npm run watch
    
### npm 관련
    Step 1: $ npm cache clean --force

    Step 2: delete node_modules by $ rm -rf node_modules folder or delete it manually by going into the directory and right-click > delete.

    Step 3: npm install

    To start again, $ npm start

    This worked for me. Hopes it works for you too.

    PS: Still if it is there, kindly check the error it displays in red and act accordingly. This error is specific to node.js environment. Happy Coding!!

### 기타 잡 필요한 것
        <meta name="csrf-token" content="{{ csrf_token() }}">
        <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.8.1/css/all.css" integrity="sha384-50oBUHEmvpQ+1lW4y57PTFmhCaXp0ML5d60M1M7uH2+nqUivzIebhndOJK28anvf" crossorigin="anonymous">
        <link rel="stylesheet" href="{{asset('css/style.css')}}">

### make auth
    php artisan make:auth
    php artisan migrate

### view에 넣기
    <!DOCTYPE html>
    <html lang="{{ str_replace('_', '-', app()->getLocale()) }}">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <meta http-equiv="X-UA-Compatible" content="ie=edge">
        <meta name="csrf-token" content="{{ csrf_token() }}">
        <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.8.1/css/all.css" integrity="sha384-50oBUHEmvpQ+1lW4y57PTFmhCaXp0ML5d60M1M7uH2+nqUivzIebhndOJK28anvf" crossorigin="anonymous">
        <link rel="stylesheet" href="{{asset('css/style.css')}}">
        <title>Document</title>
    </head>
    <body>
        @if (Route::has('login'))
            <div class="">
                @auth
                    <a href="{{ url('/home') }}">Home</a>
                @else
                    <a href="{{ route('login') }}">Login</a>
                    @if (Route::has('register'))
                        <a href="{{ route('register') }}">Register</a>
                    @endif
                @endauth
            </div>
        @endif
        <div id="root"></div>
        <script src="{{ asset('js/app.js') }}" defer></script>
    </body>
    </html>



### 폴더 및 파일 생성
    1. components/App.js 
    2. components/Router.js
    3. Route/~~.js
    4. components/Header.js
    5. components/GlobalStyles.js

### php laravel cache refresh
    php artisan clear-compiled
    composer dump-autoload
    php artisan cache:clear
    php artisan optimize


### babel (arrow function)
    npm install --save-dev babel-preset-stage-1
    npm install --save-dev babel-preset-env
    npm install --save-dev babel-plugin-transform-class-properties 
    npm install --save-dev babel-preset-react   

    ##create .babelrc
    {
        "presets": [
            "@babel/preset-env",
            "@babel/preset-react"
        ]
    }

### 라우트 -> 라우트 방법
    exact 를 제거한다.
    <Route path="/introduces" component={Introduce}/>
    <Route path="/introduces/academy" render={()=> <h1>popular</h1>} />


### 글로벌스타일 (reset)
    import reset from 'styled-reset';
    import {createGlobalStyle} from 'styled-components';

    const globalStyles = createGlobalStyle`
        ${reset};
        a{
            text-decoration:none;
            color:inherit;
        }
        *{
            box-sizing:border-box;
        }

    `;

    export default globalStyles;

    App.js의 <Router />밑에 넣어준다.


### Form 유효성 검사 (컨트롤러)

    php artisan make:request NoticeRequest
    (Notice) <-모델명

    store메소드에서 
    Request $request => NoticeRequest $request 

    User.php (model)

    //Helpers 추가..

    public function isAdmin()
    {
        return $this->id === 1;
    }

### input 류 value ''추가

    (예시)
     <TextField id="test" value={this.state.testValue || ''} />

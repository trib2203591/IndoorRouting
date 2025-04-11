---------
- npm install ol
- php artisan breeze:install
- composer require spatie/laravel-permission
- php artisan vendor:publish --provider="Spatie\Permission\PermissionServiceProvider"
- php artisan optimize:clear
- php artisan migrate

- fetch lại project
- tạo (chỉnh) file env phần database
- admin@gmail.con, mk 123
- js files của map nằm ở resources\js

-npm run dev
-php artisan serve

=> http://127.0.0.1:8000/admin để đăng nhập

- npm install chart.js

- dùng thêm một file js => vite.config.js thêm file vào:
    plugins: [
        laravel({
            input: [
                'resources/css/app.css',
                'resources/js/app.js',
                'resources/js/main.js',
                'resources/js/showChart.js'
                //...thêm file...
            ],
            refresh: true,
        }),
    ],



This is another version of the IndoorSensing project, it removes the sensing part and anything related to Sensorthing API
And on top of that add the Routing function to calculate path between 2 indoor location
This is just the front end code that connected to 
OGC-IMDF-API  https://github.com/vu0cay/OGC-IMDF-API.git
and
Routing-Service  https://github.com/vu0cay/Routing-Service.git

HOW TO RUN THE PROJECT
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




1.In new project run
npm install
composer install


2.Copy .env.example file
cp .env.example .env

3.Set up database
DB_CONNECTION=
DB_HOST=
DB_PORT=
DB_DATABASE=
DB_USERNAME=
DB_PASSWORD=

4.Finalizing
//npm run dev
//php artisan key:generate
php artisan migrate:fresh --seed
npm run dev
php artisan serve

go to laravel url : <url>/admin


TO HOST LAN FOR PHONES:
in .env:
	change VITE_API_URL to your your local ipv4(use cmd ipconfig) http://<yourlocalIPv4>8080
	change VITE_CUSC_API_TOKEN

change APP_URL to you local ipv4

run IMDF service
php artisan serve --host=<your local ipv4(use cmd ipconfig)> --port=8000
change VITE_IMDF_API_URL to http://<yourlocalIPv4>:8000


php artisan serve --host=<your local ipv4(use cmd ipconfig)> --port=8080
npm run build

then access http://<yourlocalIPv4>:8080 on your phone browser




extra notes:

the admin find feature red console log is ok, it works fine

the .env take effect each time you run npm run build

check featureFunction.js in public folder when changing IMDF host ip
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



import { defineConfig } from 'vite';
import laravel from 'laravel-vite-plugin';

export default defineConfig({
    plugins: [
        laravel({
            input: [
                'resources/css/app.css',
                'resources/css/scrollbar.css',
                'resources/css/style.css',

                'resources/js/app.js',
                'resources/js/main.js',
                'resources/js/mapForGuest/init/initialize.js',
                'resources/js/charts/airChart.js',
                'resources/js/charts/waterChart.js',

                'resources/images/file.png',
                'resources/images/ctu.png',
                'resources/images/dashboard.png',
                'resources/images/gps.png',
                'resources/images/logout.png',
                'resources/images/layers.png',
                'resources/images/location.png',
                'resources/images/parking.png',
            ],
            refresh: true,
        }),
    ],
    // build: {
    //     outDir: 'public',
    // },
    // resolve: {
    //     alias: {
    //         '@': '/resources/js',
    //     },
    // },
});

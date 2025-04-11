// vite.config.js
import { defineConfig } from "file:///D:/Dai_Hoc/NCKH/code/IDWM/4/IDWM/node_modules/vite/dist/node/index.js";
import laravel from "file:///D:/Dai_Hoc/NCKH/code/IDWM/4/IDWM/node_modules/laravel-vite-plugin/dist/index.js";
var vite_config_default = defineConfig({
  plugins: [
    laravel({
      input: [
        "resources/css/app.css",
        "resources/css/scrollbar.css",
        "resources/js/app.js",
        "resources/js/main.js",
        "resources/js/mapForGuest/init/initialize.js",
        "resources/js/charts/airChart.js",
        "resources/js/charts/waterChart.js",
        "resources/images/file.png",
        "resources/images/ctu.png",
        "resources/images/dashboard.png",
        "resources/images/gps.png",
        "resources/images/logout.png",
        "resources/images/layers.png",
        "resources/images/location.png",
        "resources/images/parking.png"
      ],
      refresh: true
    })
  ]
  // build: {
  //     outDir: 'public',
  // },
  // resolve: {
  //     alias: {
  //         '@': '/resources/js',
  //     },
  // },
});
export {
  vite_config_default as default
};
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsidml0ZS5jb25maWcuanMiXSwKICAic291cmNlc0NvbnRlbnQiOiBbImNvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9kaXJuYW1lID0gXCJEOlxcXFxEYWlfSG9jXFxcXE5DS0hcXFxcY29kZVxcXFxJRFdNXFxcXDRcXFxcSURXTVwiO2NvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9maWxlbmFtZSA9IFwiRDpcXFxcRGFpX0hvY1xcXFxOQ0tIXFxcXGNvZGVcXFxcSURXTVxcXFw0XFxcXElEV01cXFxcdml0ZS5jb25maWcuanNcIjtjb25zdCBfX3ZpdGVfaW5qZWN0ZWRfb3JpZ2luYWxfaW1wb3J0X21ldGFfdXJsID0gXCJmaWxlOi8vL0Q6L0RhaV9Ib2MvTkNLSC9jb2RlL0lEV00vNC9JRFdNL3ZpdGUuY29uZmlnLmpzXCI7aW1wb3J0IHsgZGVmaW5lQ29uZmlnIH0gZnJvbSAndml0ZSc7XG5pbXBvcnQgbGFyYXZlbCBmcm9tICdsYXJhdmVsLXZpdGUtcGx1Z2luJztcblxuZXhwb3J0IGRlZmF1bHQgZGVmaW5lQ29uZmlnKHtcbiAgICBwbHVnaW5zOiBbXG4gICAgICAgIGxhcmF2ZWwoe1xuICAgICAgICAgICAgaW5wdXQ6IFtcbiAgICAgICAgICAgICAgICAncmVzb3VyY2VzL2Nzcy9hcHAuY3NzJyxcbiAgICAgICAgICAgICAgICAncmVzb3VyY2VzL2Nzcy9zY3JvbGxiYXIuY3NzJyxcblxuICAgICAgICAgICAgICAgICdyZXNvdXJjZXMvanMvYXBwLmpzJyxcbiAgICAgICAgICAgICAgICAncmVzb3VyY2VzL2pzL21haW4uanMnLFxuICAgICAgICAgICAgICAgICdyZXNvdXJjZXMvanMvbWFwRm9yR3Vlc3QvaW5pdC9pbml0aWFsaXplLmpzJyxcbiAgICAgICAgICAgICAgICAncmVzb3VyY2VzL2pzL2NoYXJ0cy9haXJDaGFydC5qcycsXG4gICAgICAgICAgICAgICAgJ3Jlc291cmNlcy9qcy9jaGFydHMvd2F0ZXJDaGFydC5qcycsXG5cbiAgICAgICAgICAgICAgICAncmVzb3VyY2VzL2ltYWdlcy9maWxlLnBuZycsXG4gICAgICAgICAgICAgICAgJ3Jlc291cmNlcy9pbWFnZXMvY3R1LnBuZycsXG4gICAgICAgICAgICAgICAgJ3Jlc291cmNlcy9pbWFnZXMvZGFzaGJvYXJkLnBuZycsXG4gICAgICAgICAgICAgICAgJ3Jlc291cmNlcy9pbWFnZXMvZ3BzLnBuZycsXG4gICAgICAgICAgICAgICAgJ3Jlc291cmNlcy9pbWFnZXMvbG9nb3V0LnBuZycsXG4gICAgICAgICAgICAgICAgJ3Jlc291cmNlcy9pbWFnZXMvbGF5ZXJzLnBuZycsXG4gICAgICAgICAgICAgICAgJ3Jlc291cmNlcy9pbWFnZXMvbG9jYXRpb24ucG5nJyxcbiAgICAgICAgICAgICAgICAncmVzb3VyY2VzL2ltYWdlcy9wYXJraW5nLnBuZycsXG4gICAgICAgICAgICBdLFxuICAgICAgICAgICAgcmVmcmVzaDogdHJ1ZSxcbiAgICAgICAgfSksXG4gICAgXSxcbiAgICAvLyBidWlsZDoge1xuICAgIC8vICAgICBvdXREaXI6ICdwdWJsaWMnLFxuICAgIC8vIH0sXG4gICAgLy8gcmVzb2x2ZToge1xuICAgIC8vICAgICBhbGlhczoge1xuICAgIC8vICAgICAgICAgJ0AnOiAnL3Jlc291cmNlcy9qcycsXG4gICAgLy8gICAgIH0sXG4gICAgLy8gfSxcbn0pO1xuIl0sCiAgIm1hcHBpbmdzIjogIjtBQUFnUyxTQUFTLG9CQUFvQjtBQUM3VCxPQUFPLGFBQWE7QUFFcEIsSUFBTyxzQkFBUSxhQUFhO0FBQUEsRUFDeEIsU0FBUztBQUFBLElBQ0wsUUFBUTtBQUFBLE1BQ0osT0FBTztBQUFBLFFBQ0g7QUFBQSxRQUNBO0FBQUEsUUFFQTtBQUFBLFFBQ0E7QUFBQSxRQUNBO0FBQUEsUUFDQTtBQUFBLFFBQ0E7QUFBQSxRQUVBO0FBQUEsUUFDQTtBQUFBLFFBQ0E7QUFBQSxRQUNBO0FBQUEsUUFDQTtBQUFBLFFBQ0E7QUFBQSxRQUNBO0FBQUEsUUFDQTtBQUFBLE1BQ0o7QUFBQSxNQUNBLFNBQVM7QUFBQSxJQUNiLENBQUM7QUFBQSxFQUNMO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQVNKLENBQUM7IiwKICAibmFtZXMiOiBbXQp9Cg==

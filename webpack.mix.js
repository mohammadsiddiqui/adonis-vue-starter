let mix = require('laravel-mix');
mix.setPublicPath('public');
mix.js('vue/app.js', 'public/js')
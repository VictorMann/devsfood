const gulp = require('gulp');
const webpack = require('webpack-stream');
const named = require('vinyl-named');
const clean = require('gulp-clean');
const image = require('gulp-image');
const rename = require('gulp-rename');
const cssimport = require('gulp-cssimport');
const uglifycss = require('gulp-uglifycss');

function _clean() {
    return gulp.src('./dist')
    .pipe(clean({force: true}));
}

function html() {
    return gulp.src('./src/*.html')
    .pipe(gulp.dest('./dist'));
}

function js() {
    return gulp.src('./src/index.js')
    .pipe(named())
    .pipe(webpack({
        mode: 'production',
        output: {
            filename: 'bundle.min.js'
        },
        module: {
            rules: [
                {
                    test: /\.jsx?/i,
                    use: {
                        loader: 'babel-loader',
                        options: {
                            presets: [
                                '@babel/preset-env',
                                '@babel/preset-react'
                            ]
                        }
                    }
                }
            ]
        } 
    }))
    .pipe(gulp.dest('./dist'));
}

function css() {
    return gulp.src('./src/**/*.css')
    .pipe(cssimport())
    .pipe(uglifycss())
    .pipe(rename({extname: '.min.css'}))
    .pipe(gulp.dest('./dist'));
}

function imgs() {
    return gulp.src('./src/**/*.{jpg,jpeg,png,gif,svg}')
    .pipe(image())
    .pipe(gulp.dest('./dist'));
}

exports.clean = _clean;
exports.html = html;
exports.js = js;
exports.css = css;
exports.image = imgs;
exports.default = gulp.parallel(html, js, css);
'use strict';

var gulp = require('gulp');
var sass = require('gulp-sass');
var concat = require('gulp-concat');

gulp.task('sass', function () {
    return gulp.src('./styles/**/*.scss')
        .pipe(sass().on('error', sass.logError))
        .pipe(concat('all.css'))
        .pipe(gulp.dest('./css'));
});

gulp.task('sass:watch', function () {
    gulp.watch('./styles/**/*.scss', ['sass']);
});

var gulp = require('gulp');
var pug = require('gulp-pug');
var concat = require('gulp-concat');
var sass = require('gulp-sass');
var cleanCSS = require('gulp-clean-css');

gulp.task('build', ['pug', 'css']);

gulp.task('pug', function () {
	return gulp.src('app/*.pug')
		.pipe(pug())
		.pipe(gulp.dest('build'))
});

gulp.task('css', function () {
	return gulp.src('app/*.scss')
		.pipe(sass())
		.pipe(cleanCSS())
		.pipe(gulp.dest('build'))
});

gulp.task('watch', function () {
	gulp.watch('app/*.pug', ['pug']);
	gulp.watch('app/*.scss', ['css']);
});
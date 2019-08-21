
var gulp = require('gulp'),
    less = require('gulp-less'),
    rename = require('gulp-rename'),
    autoprefixer = require('gulp-rename');

gulp.task('less', function(){
return gulp.src('./app/less/**/*.less')
    .pipe(rename ({suffix: '.min'} ))
    .pipe(less({
        errorLogToConsole: true,
        outputStyle: 'compressed'
    }))
    .on('error', console.error.bind(console))
    .pipe(autoprefixer({
        cascade: false
    }))
    .pipe(gulp.dest('./app/css'))
});


gulp.task('default', gulp.parallel('less'));

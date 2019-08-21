
var gulp = require('gulp'),
less = require('gulp-less');

gulp.task('mytask', function() {
console.log('перевірка');
});

gulp.task('less', function(){
return gulp.src('./app/less/**/*.less') 
    .pipe(less())
    .pipe(gulp.dest('./app/css'))
});


gulp.task('default', gulp.parallel('less'));

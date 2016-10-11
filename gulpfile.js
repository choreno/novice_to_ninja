var gulp = require('gulp');
var browserSync = require('browser-sync').create();


gulp.task('browserSync', function () {
    browserSync.init({
        server: {

            baseDir: ['./', './app'],  //baseDir: 'source/'
            index: '/app/index.html' //change the start index html file
        }
    })
})


// configure which files to watch and what tasks to use on file changes
gulp.task('watches', ['browserSync'], function () {


    gulp.watch('app/**/*.html', browserSync.reload);
    gulp.watch('app/**/*.js', browserSync.reload);
    gulp.watch('app/**/*.css', browserSync.reload);

});



gulp.task('default', ['watches']);
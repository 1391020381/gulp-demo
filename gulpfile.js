var gulp  = require('gulp')
gulp.task('scripts',function(){
    console.log('gulp')
})
gulp.task('default',function(){
    console.log('default')
    gulp.run('scripts')
    console.log('end')
})
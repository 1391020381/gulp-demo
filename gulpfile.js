var gulp  = require('gulp')
var minifycss = require('gulp-minify-css')
// var jshint = require('gulp-jshint')
var uglify = require('gulp-uglify')
var imagemin = require('gulp-imagemin')
var renname = require('gulp-rename')
var clean = require('gulp-clean')
var concat = require('gulp-concat')
var notity = require('gulp-notify')
var cache = require('gulp-cache')
// var livereload = require('gulp-livereload')
// var htmlmin = require('gulp-htm')
var autoprefixer = require('gulp-autoprefixer')
var babel = require('gulp-babel')


gulp.task('scripts',function(){
    return gulp.src(['src/js/*.js'])
      .pipe(babel({
        presets:['env']
      }))
        // .pipe(uglify())
        .pipe(gulp.dest('src/dist/js'))
        .pipe(notity({
            message:'Scripts task complete'
        }))
})

gulp.task('clean',function(){
    return gulp.src(['src/dist'],{
        read:false
    })
    .pipe(clean())
})

gulp.task('default',['clean'],function(){
    gulp.run(['scripts'])
})

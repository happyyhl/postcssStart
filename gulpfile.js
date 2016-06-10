var gulp = require('gulp');
var postcss      = require('gulp-postcss');
var sourcemaps   = require('gulp-sourcemaps');
var autoprefixer = require('autoprefixer');
var uglify = require('gulp-uglify');

var sass = require('gulp-sass');
var group = require('gulp-group-files');
var sassFiles = {
    "sass1" : {
        src: "src/sass1/index.scss",
        srccss:"dest/style/index1/index.css",
        postcss:"dest/style/postcssStyle/index1",
        dest: "dest/style/index1"
    },
    "sass2" : {
        src: "src/sass2/index.scss",
        srccss:"dest/style/index2/index.css",
        postcss:"dest/style/postcssStyle/index2",
        dest: "dest/style/index2"
    }
};
var processors = [
  require('postcss-alias'),
  require('postcss-font-magician')({  }),
  require('postcss-center'),
  autoprefixer({ 
                browsers: ['last 10 versions','ie >= 6','safari 8','Android >= 4.0'],
                cascade: true,
                remove: false 
            }) ,
  require('postcss-triangle')
];
gulp.task('autoprefixer', function () {

    return group(sassFiles,function (key,fileset){
        return gulp.src(fileset.srccss)
             .pipe(sourcemaps.init())
             .pipe(postcss(processors))
             .pipe(sourcemaps.write('.'))
             .pipe(gulp.dest(fileset.postcss));
    })();
   /* return gulp.src('src/*.css')
        .pipe(sourcemaps.init())
        .pipe(postcss(processors))
        
        .pipe(postcss([
            
        ]))
        .pipe(postcss([
        ]))
        .pipe(sourcemaps.write('.'))
        .pipe(gulp.dest('dest'));*/
});
gulp.task('watch',function(){
    gulp.watch('dest/style/**/*.css',['autoprefixer']);
});

gulp.task('minify', function () {
   gulp.src('js/app.js')
      .pipe(uglify())
      .pipe(gulp.dest('dest/js'))
});

gulp.task('sass:compile',function (){
    return group(sassFiles,function (key,fileset){
        return gulp.src(fileset.src)
            .pipe(sass().on('error', sass.logError))
            .pipe(gulp.dest(fileset.dest));
    })();
});

gulp.task('sass:watch',function (){
    gulp.watch('src/**/*.scss',['sass:compile'])
});

gulp.task('default',['sass:watch','watch','autoprefixer']);
//gulp.task('default',['watch','autoprefixer']);
//gulp.task('default',['watch','autoprefixer']);
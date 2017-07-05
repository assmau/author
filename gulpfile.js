var gulp = require('gulp'),
	  watch = require('gulp-watch'),
	  sass = require('gulp-sass'),
	  rigger = require('gulp-rigger'),
    image = require('gulp-image'),
    jquery = require('gulp-jquery');



gulp.task('watch', function () {
    return watch('src/assets/**/*.scss', { ignoreInitial: false })
        .pipe(gulp.dest('dist/assets/css'));
});

gulp.task('sass:watch', function () {
  return gulp.src('src/assets/**/*.scss')
    .pipe(sass().on('error', sass.logError))
    .pipe(gulp.dest('dist/assets/css'));
});



// Index
gulp.task('index', function () {
    return watch('index.html', { ignoreInitial: false })
        .pipe(gulp.dest('dist/'));
});

gulp.task('rigger:index', function () {
    gulp.src('index.html')
        .pipe(rigger())
        .pipe(gulp.dest('dist/'));
});



// Image
gulp.task('image', function () {
  gulp.src('src/img/**')
    .pipe(image({
      pngquant: true,
      optipng: false,
      zopflipng: true,
      jpegRecompress: false,
      jpegoptim: true,
      mozjpeg: true,
      gifsicle: true,
      svgo: true,
      concurrent: 10
    }))
    .pipe(gulp.dest('dist/img/'));
});

gulp.task('default:image', ['image']);



gulp.task('jquery', function () {
    return gulp.src('src/js/**/*.js')
        .pipe(jquery({
            flags: ['-deprecated', '-event/alias', '-ajax/script', '-ajax/jsonp', '-exports/global']
        }))
        .pipe(gulp.dest('dist/js'));
});


gulp.task('script:jquery', function () {
    gulp.src('src/js/**/*.js')
        .pipe(rigger())
        .pipe(gulp.dest('dist/js'));
});
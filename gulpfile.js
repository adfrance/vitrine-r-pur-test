/*!
 * gulp
 * $ npm install gulp-ruby-sass gulp-autoprefixer gulp-cssnano gulp-jshint gulp-concat gulp-uglify gulp-notify gulp-rename --save-dev
 */

// Load plugins
const gulp         = require('gulp'),
      sass         = require('gulp-ruby-sass'),
      autoprefixer = require('gulp-autoprefixer'),
      cssnano      = require('gulp-cssnano'),
      jshint       = require('gulp-jshint'),
      uglify       = require('gulp-uglify'),
      rename       = require('gulp-rename'),
      concat       = require('gulp-concat'),
      notify       = require('gulp-notify'),
      babel        = require('gulp-babel')

const src = './assets'

// Styles
gulp.task('styles', function() {
  return sass(`${src}/style/main.sass`)
    .pipe(autoprefixer())
    .pipe(rename({ suffix: '.min' }))
    .pipe(cssnano({reduceIdents: false}))
    .pipe(gulp.dest('dist/css'))
    .pipe(notify({ message: 'Styles task complete' }))
})

// Scripts
gulp.task('scripts', function() {
  return gulp.src(`${src}/scripts/*.js`)
    .pipe(babel())
    .pipe(concat('main.js'))
    // .pipe(rename({ suffix: '.min' }))
    // .pipe(uglify())
    .pipe(gulp.dest(`./dist/js`))
    .pipe(notify({ message: 'Scripts task complete' }))
})


// Watch
gulp.task('watch', function() {

  // Watch .sass files
  gulp.watch(`${src}/style/*/**.sass`, ['styles'])
  gulp.watch(`${src}/style/*/*.sass`, ['styles'])
  gulp.watch(`${src}/style/*.sass`, ['styles'])

  // Watch .js files
  gulp.watch(`${src}/scripts/*.js`, ['scripts'])

})

// Default task
gulp.task('default', function() {
  gulp.start('styles', 'watch', 'scripts')
})
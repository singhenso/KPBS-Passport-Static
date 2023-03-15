const gulp = require('gulp');
const less = require('gulp-less');
const sourcemaps = require('gulp-sourcemaps');
const autoprefixer = require('gulp-autoprefixer');
const cleanCSS = require('gulp-clean-css');
const rename = require('gulp-rename');
const uglify = require('gulp-uglify');
const fileinclude = require('gulp-file-include');
const browserSync = require('browser-sync').create(); // Import BrowserSync
const replace = require('gulp-replace');

// Define paths
const paths = {
  styles: {
    src: 'src/less/style.less',
    dest: 'dist/css/'
  },
  script: {
    src: 'src/js/*.js',
    dest: 'dist/js/'
  },
  images: {
    src: 'src/img/**/*',
    dest: 'dist/img/'
  }
};

// Compile Less to CSS
function compileStyles() {
  return gulp.src(paths.styles.src)
    .pipe(sourcemaps.init())
    .pipe(less())
    .pipe(autoprefixer())
    .pipe(cleanCSS())
    .pipe(rename({ suffix: '.min' }))
    .pipe(sourcemaps.write('.'))
    .pipe(gulp.dest(paths.styles.dest))
    .pipe(browserSync.stream()); // Reload the CSS in the browser
}

// copy css:
function copyCSS() {
  return gulp.src('src/css/style.css')
    .pipe(gulp.dest('dist/css'));
}

//include
function includeHTML() {
  return gulp.src(['index.html'])
    .pipe(fileinclude({
      prefix: '@@',
      basepath: '@file'
    }))
    .pipe(replace(/dist\/img/g, './img')) // Replace "dist/img" with "/img"
    .pipe(gulp.dest('dist'))
    .pipe(browserSync.stream()); // Reload the HTML in the browser
}

// Minify and uglify JS
function minifyJS() {
  return gulp.src(paths.script.src)
    .pipe(uglify({ mangle: true }))
    .pipe(rename({ suffix: '.min' }))
    .pipe(gulp.dest(paths.script.dest))
    .pipe(browserSync.stream()); // Reload the JS in the browser
}

// Optimize images
function optimizeImages() {
  return gulp.src(paths.images.src)
    .pipe(gulp.dest(paths.images.dest))
    .pipe(browserSync.stream()); // Reload the images in the browser
}

// Watch for changes to Less, JS, and image files
function watch() {
  browserSync.init({
    server: {
      baseDir: './dist',
      serveStaticOptions: {
        extensions: ['html']
      }
    }
  }); // Initialize BrowserSync

  gulp.watch('src/less/**/*.less', compileStyles);
  gulp.watch('src/css/**/*.css', gulp.series(copyCSS, browserSync.reload));
  gulp.watch('src/js/**/*.js', minifyJS);
  gulp.watch('src/img/**/*', optimizeImages);
  gulp.watch(['index.html', 'src/blocks/**/*.html'], includeHTML);
}

// Export tasks
exports.watch = watch;
exports.minifyJS = minifyJS;
exports.optimizeImages = optimizeImages;
exports.includeHTML = includeHTML;

exports.default = gulp.series(gulp.parallel(compileStyles, copyCSS,minifyJS, optimizeImages, includeHTML), watch);

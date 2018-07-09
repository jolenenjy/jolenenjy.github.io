'use strict';

// -----------------------------------------------------------------------------
// Dependencies
// -----------------------------------------------------------------------------
var gulp = require('gulp'); 
var nunjucks = require( 'nunjucks' ) ;
var nunjucksRender = require('gulp-nunjucks-render');
var browserSync = require('browser-sync').create();
var siteOutput = './app';
var sass = require('gulp-sass');
var autoprefixer = require('gulp-autoprefixer');
var sassdoc = require('sassdoc');

// -----------------------------------------------------------------------------
// Configuration
// -----------------------------------------------------------------------------

var input = './app/scss/*.scss';
var inputMain = './app/scss/main.scss';
var output = siteOutput + '/css';
var inputTemplates = 'app/pages/**/*.+(html|nunjucks)';
var sassOptions = { outputStyle: 'expanded' };
var autoprefixerOptions = { browsers: ['last 2 versions', '> 5%', 'Firefox ESR'] };
var sassdocOptions = { dest: siteOutput + '/sassdoc' };


// -----------------------------------------------------------------------------
// Sass compilation
// -----------------------------------------------------------------------------

gulp.task('sass', function() {
    return gulp
      .src(inputMain)
      .pipe(sass(sassOptions).on('error', sass.logError))
      .pipe(autoprefixer(autoprefixerOptions))
      .pipe(gulp.dest(output))
      .pipe(browserSync.stream());
  });


// -----------------------------------------------------------------------------
// Templating
// -----------------------------------------------------------------------------
  
gulp.task('nunjucks', function() {
    // Gets .html and .nunjucks files in pages
    return gulp.src(inputTemplates)
    // Renders template with nunjucks
    .pipe(nunjucksRender({
        path: ['app/templates']
      }))
    // output files in app folder
    .pipe(gulp.dest('app'))
  });


// -----------------------------------------------------------------------------
// Static server
// -----------------------------------------------------------------------------

gulp.task('browser-sync', function() {
  browserSync.init({
    server: {
      baseDir: siteOutput
    }
  });
});


// -----------------------------------------------------------------------------
// Sass documentation generation
// -----------------------------------------------------------------------------

gulp.task('sassdoc', function() {
    return gulp
      .src(input)
      .pipe(sassdoc(sassdocOptions))
      .resume();
  });

// -----------------------------------------------------------------------------
// Watchers
// -----------------------------------------------------------------------------

gulp.task('watch', function() {
    // Watch the sass input folder for change,
    // and run `sass` task when something happens
    gulp.watch(input, ['sass']).on('change', function(event) {
      console.log('File ' + event.path + ' was ' + event.type + ', running tasks...');
    });

    gulp.watch('./js/*', ['scripts']).on('change', browserSync.reload);

    // Watch nunjuck templates and reload browser if change
    gulp.watch(inputTemplates, ['nunjucks']).on('change', browserSync.reload);

});


// -----------------------------------------------------------------------------
// Default task
// -----------------------------------------------------------------------------

gulp.task('default', ['sass', 'nunjucks', 'watch', 'browser-sync']);
'use strict';
require('dotenv').config({path: './config.env'})

var gulp = require('gulp');

var jshint = require('gulp-jshint');
var uglify = require('gulp-uglify');
var pump = require('pump');
var sourcemaps = require('gulp-sourcemaps');
var exec = require('child_process').exec;
var child = require('child_process');
var log = require('fancy-log');
const browserSync = require('browser-sync').create();
var awspublish = require('gulp-awspublish');

const siteRoot = 'public';

// Lint Task
gulp.task('lint', function(done) {
  return gulp.src('js/**/*.js')
    .pipe(jshint())
    .pipe(jshint.reporter('default'), done);
});

// Copy Javascript files from node_modules
gulp.task('vendor-scripts', function(done) {
  return gulp.src(['./node_modules/bootstrap/dist/js/bootstrap.min.js',
                  './node_modules/jquery/dist/jquery.min.js',
                  './node_modules/popper.js/dist/umd/popper.min.js',
                  './node_modules/bootstrap/dist/js/bootstrap.min.js.map',
                  './node_modules/jquery/dist/jquery.min.map',
                  './node_modules/popper.js/dist/umd/popper.min.js.map'])
    .pipe(gulp.dest('./public/js/vendor'), done);
});

gulp.task('app-scripts', function (done) {
  pump([
        gulp.src('src/js/main.js'),
        // sourcemaps.init(),
        uglify(),
        // sourcemaps.write('./'),
        gulp.dest('public/js')
    ],
    done
  );
});

// Jekyll builds the site after watching files
gulp.task('jekyll-build-and-watch', function() {
  const jekyll = child.spawn('jekyll',
    ['build',
      '--watch',
      '--incremental',
      '--drafts']);

  const jekyllLogger = (buffer) => {
    buffer.toString()
      .split(/\n/)
      .forEach((message) => log(message));
  };

  jekyll.stdout.on('data', jekyllLogger);
  jekyll.stderr.on('data', jekyllLogger);
});

gulp.task('jekyll-build', function(done) {
  exec('JEKYLL_ENV=production jekyll build', function (err, stdout, stderr) {
    console.log(stdout);
    console.log(stderr);
    done(err);
  });
});

gulp.task('test', function(done) {
  exec('htmlproofer --assume-extension ./public', function (err, stdout, stderr) {
    console.log(stdout);
    // console.log(stderr);
    done(err);
  });
});

// BroswerSync serves the site and handles reloads
gulp.task('serve', function() {
  browserSync.init({
    files: [siteRoot + '/**'],
    port: 4000,
    server: {
      baseDir: siteRoot
    }
  });
});

gulp.task('publish-staging', function(done) {
  // create a new publisher using S3 options
  // http://docs.aws.amazon.com/AWSJavaScriptSDK/latest/AWS/S3.html#constructor-property
  var publisher = awspublish.create({
    region: process.env.AWS_REGION,
    params: {
      Bucket: process.env.STAGING_BUCKET
    },
    accessKeyId: process.env.STAGING_ACCESS_KEY,
    secretAccessKey: process.env.STAGING_SECRET_ACCESS_KEY
  // }, {
  //   cacheFileName: 'aws-caches/.aws-staging-cache'
  });

  // define custom headers
  var headers = {
    'Cache-Control': 'max-age=0, no-transform, public'
    // ...
  };

  return gulp.src('./public/**/*.*')
     // gzip, Set Content-Encoding headers and add .gz extension
    .pipe(awspublish.gzip())

    // publisher will add Content-Length, Content-Type and headers specified above
    // If not specified it will set x-amz-acl to public-read by default
    .pipe(publisher.publish(headers))

    // delete files that are not in the local directory
    .pipe(publisher.sync())

    // create a cache file to speed up consecutive uploads
    .pipe(publisher.cache())

     // print upload updates to console
    .pipe(awspublish.reporter(), done);
});

gulp.task('publish-production', function(done) {
  // create a new publisher using S3 options
  // http://docs.aws.amazon.com/AWSJavaScriptSDK/latest/AWS/S3.html#constructor-property
  var publisher = awspublish.create({
    region: process.env.AWS_REGION,
    params: {
      Bucket: process.env.PRODUCTION_BUCKET
    },
    accessKeyId: process.env.PRODUCTION_ACCESS_KEY,
    secretAccessKey: process.env.PRODUCTION_SECRET_ACCESS_KEY
  // }, {
  //   cacheFileName: 'aws-caches/.aws-production-cache'
  });

  // define custom headers
  var headers = {
    'Cache-Control': 'max-age=0, no-transform, public'
    // ...
  };

  return gulp.src('./public/**/*.*')
     // gzip, Set Content-Encoding headers and add .gz extension
    // .pipe(awspublish.gzip())

    // publisher will add Content-Length, Content-Type and headers specified above
    // If not specified it will set x-amz-acl to public-read by default
    .pipe(publisher.publish(headers))

    // delete files that are not in the local directory
    .pipe(publisher.sync())

    // create a cache file to speed up consecutive uploads
    .pipe(publisher.cache())

     // print upload updates to console
    .pipe(awspublish.reporter(), done);
});

gulp.task('js', gulp.series('lint', 'vendor-scripts', 'app-scripts'));
gulp.task('build', gulp.series('jekyll-build', 'js'));
gulp.task('serve', gulp.parallel('jekyll-build-and-watch', 'js', 'serve'));
gulp.task('staging', gulp.series('build', 'publish-staging'));
gulp.task('publish', gulp.series('build', 'publish-production'));
gulp.task('default', gulp.series('build'));

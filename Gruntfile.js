module.exports = function(grunt) {
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),

    clean: {
      modernizr: ['_site/bower_components/modernizr/modernizr.js'],
      css: ['_site/css/*.css', '!_site/css/*.min.css']
    },
    uglify: {
      modernizr: {
        files: {
          '_site/bower_components/modernizr/modernizr.min.js': ['_site/bower_components/modernizr/modernizr.js']
        }
      }//,
      // app: {
      // // Grunt will search for "**/*.js" under "lib/" when the "uglify" task
      // // runs and build the appropriate src-dest file mappings then, so you
      // // don't need to update the Gruntfile when files are added or removed.
      //   files: [
      //     {
      //       expand: true,     // Enable dynamic expansion.
      //       src: ['_site/js/*.js'], // Actual pattern(s) to match.
      //       ext: '.min.js',   // Dest filepaths will have this extension.
      //       extDot: 'first'   // Extensions in filenames begin after the first dot
      //     }
      //   ]
      // }
    },
    exec: {
      build: {
        cmd: 'jekyll build'
      },
      serve: {
        cmd: 'jekyll serve --watch --detach'
      },
      deploy: {
        cmd: './publish.sh'
      }
    },
    watch: {
      src: {
        files: ['_posts/*.md',
                '_drafts/*.md',
                '_includes/*.html',
                '_layouts/*.html',
                '_plugins/*.*',
                '_sass/*.scss',
                'about/*.*',
                'css/*.css',
                'css/*.scss',
                'images/*.*',
                'js/*.js',
                'js/*.coffee',
                '*.yml',
                '*.html',
                '*.md',
                '*.xml'],
        tasks: ['default'],
        options: {
        }
      }
    }
  });

  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-exec');
  grunt.loadNpmTasks('grunt-contrib-clean');
  grunt.loadNpmTasks('grunt-contrib-watch');

  // grunt.registerTask('default', ['exec:build', 'uglify', 'clean']);
  grunt.registerTask('default', ['exec:build', 'uglify']);

  // grunt.registerTask('dev', ['exec:build', 'uglify', 'clean', 'watch']);
  grunt.registerTask('dev', ['exec:build', 'uglify', 'watch'])

  grunt.registerTask('deploy', ['default', 'exec:deploy']);
};

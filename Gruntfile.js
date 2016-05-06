module.exports = function(grunt) {
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),

    bower: {
      dev: {
        dest: '_site/assets',
        css_dest: '_site/css',
        js_dest: '_site/js',
        options: {
          expand: true
        }
      }
    },
    cssmin: {
      target: {
        files: [{
          expand: true,
          cwd: '_site/css',
          src: ['*.css', '!*.min.css'],
          dest: '_site/css',
          ext: '.min.css'
        }]
      }
    },
    uglify: {
      my_target: {
        files: {
          '_site/js/app.min.js': ['_site/js/app.js'],
          /*'_site/js/foundation/js/foundation.min.js': ['_site/js/foundation/js/foundation.js'],
          '_site/js/jquery/dist/jquery.min.js': ['_site/js/jquery/dist/jquery.js'],
          '_site/js/modernizr/modernizr.min.js': ['_site/js/modernizr/modernizr.js'],*/         
        }
      }
    },
    clean: {
      js: ['_site/js/**/*.js', '!_site/js/**/*.min.js'],
      css: ['_site/css/**/*.css', '!_site/css/**/*.min.css']
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
  grunt.loadNpmTasks('grunt-contrib-cssmin');
  grunt.loadNpmTasks('grunt-bower');

  grunt.registerTask('default', ['exec:build', 'bower', 'uglify', 'cssmin', 'clean']);
  grunt.registerTask('dev', ['default', 'watch'])
  grunt.registerTask('deploy', ['default', 'exec:deploy']);
};

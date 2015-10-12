module.exports = function(grunt) {

  // Project configuration.
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    
    // PRÉ PROCESSADOR LESS
    less:{
      development: {
        options: {
          paths: ["css"]
        },
        files: {
          "../code/app/webroot/css/skin/frontend.css": "css/less/frontend.less"
        }
      },
      production: {
        options: {
          paths: ["css"],
          //cleancss: true,
          //compress: true,
        },
        files: {
          "css/frontend.css": "css/less/frontend.less"
        }
      }
    },

    autoprefixer: {
      single_file: {
        options: {
          browsers: ['last 2 versions', 'ie 8', 'ie 9', 'ie 10', 'ie 11', 'firefox 2.0', 'chrome 4.0', 'safari 8', 'opera 27']
        },
        src: 'css/frontend.css',
        dest: 'css/frontend.css'
      },
    },

    // CONCATENA ARQUIVOS JAVASCRIPT
    concat: {
      options: {
        separator: ';',
      },
      dist: {
        src: ['js/controller.js'],
        dest: 'js/controller-ck.js',
      },
    },

    // VIGIA SE HÁ ALTERAÇÕES NOS ARQUIVOS
    watch: {
      css: {
        files: 'css/less/*.less',
        tasks: ['less'],
        options: {
          livereload: true,
        },
      },
      autoprefixer: {
        files: 'css/less/*.less',
        tasks: ['autoprefixer'],
        options: {
          livereload: true,
        },
      },
      concat: {
        files: ['js/*.js'],
        tasks: ['concat'],
        options: {
          livereload: true,
        },
      },
    },
  });

  // Load the plugin that provides the task.
  grunt.loadNpmTasks('grunt-contrib-less');
  grunt.loadNpmTasks('grunt-contrib-concat');
  grunt.loadNpmTasks('grunt-autoprefixer');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-autoprefixer');

  // Default task(s).
  grunt.registerTask('default', ['watch']);
};
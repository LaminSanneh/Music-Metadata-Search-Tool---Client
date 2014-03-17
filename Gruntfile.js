module.exports = function(grunt) {
  grunt.initConfig({
    pkg: grunt.file.readJSON( 'package.json' ),
    
    emberTemplates: {
      compile: {
        options: {
          templateBasePath: /js\/templates\//
        },
        files: {
          'js/templates.js': 'js/templates/**/*.hbs'
        }
      }
    },

    sass: {
      dist: {
        options:{
          style: 'compact',
          compass: true
        },
        files:{
          'css/min/main.min.css': 'scss/main.scss'
        }
      }
    },
    
    watch: {
//      livereload: {
//        options: { livereload: true },
//        files: ['css/min/main.min.css','js/min/main.min.js'],
//      },
      emberTemplates: {
        files: 'js/templates/**/*.hbs',
        tasks: ['emberTemplates']
      },
      js:{
        files: ['js/libs/controllers/*.js','js/libs/routes/*.js','js/libs/models/*.js','js/fixtures.js','js/libs/views/*.js','js/libs/router.js','js/templates.js','js/main.js'],
        tasks: ['uglify']
      },
      sassWatch: {
        files: 'scss/*.scss',
        tasks: ['sass']
      }
    },

    uglify: {
      options: {
        banner: '/*! <%= pkg.name %> <%= grunt.template.today("yyyy-mm-dd") %> */\n',
        mangle: false,
        beautify: true
      },
      build: {
        src: ['js/vendor/jquery-1.10.2.js','js/vendor/bootstrap.min.js', 'js/vendor/handlebars-runtime.js', 'js/vendor/ember-1.2.0.js',
              'js/vendor/moment.js','js/vendor/ember-data.js', 'js/main.js','js/libs/helpers/*.js', 'js/templates.js', 'js/libs/models/*.js', 
               'js/libs/controllers/*.js', 'js/libs/router.js','js/fixtures.js','js/libs/routes/*.js','js/libs/views/*.js'],
        dest: 'js/min/main.min.js'
      }
    }
  });
 
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-contrib-sass');
  grunt.loadNpmTasks('grunt-ember-templates');
  grunt.loadNpmTasks('grunt-contrib-uglify');
 
  // Default task(s).
  grunt.registerTask('default', ['emberTemplates','uglify','sass','watch']);
};
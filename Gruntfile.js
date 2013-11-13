module.exports = function (grunt) {

  // Project configuration.
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    jslint: {
      client: {
        src: [
          'src/js/*.js',
          'src/js/app/*.js'
        ],
        options: {
          failOnError: false
        }
      }
    },
    jasmine: {
      taskName: {
        options: {
          specs: 'test/js/app/*Spec.js',
          template: require('grunt-template-jasmine-requirejs'),
          templateOptions: {
            requireConfigFile: 'test/js/sampleprojconfig.js'
          }
        }
      }
    },
    copy: {
      toTest: {
        files: [
          {expand: true, cwd: 'src/', src: ['js/app/*.js'], dest: 'test', filter: 'isFile'}
        ]
      },
      toBuild: {
        files: [
          {expand: true, cwd: 'src/', src: ['**/*.htm'], dest: 'build', filter: 'isFile'},
          {expand: true, cwd: 'src/', src: ['**/*.css'], dest: 'build', filter: 'isFile'}
        ]
      }
    },
    uglify: {
      build: {
        files: [{
          expand: true,
          cwd: 'src/js',
          src: '**/*.js',
          dest: 'build/js'
        }]
      }
    }
  });

  grunt.loadNpmTasks('grunt-jslint');
  grunt.loadNpmTasks('grunt-contrib-copy');
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-contrib-jasmine');

  // Default task(s).
  grunt.registerTask('default', ['copy:toTest', 'jslint', 'jasmine', 'copy:toBuild', 'uglify']);

};
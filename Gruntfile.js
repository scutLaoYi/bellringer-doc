module.exports = function(grunt) {

  // Project configuration.
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    jade: {
      compile: {
        options: {
          pretty: true,
          data: {
            debug: false,
          }
        },
        files: {
          'dist/view/index.html': 'jade/index.jade',
          'dist/view/api.html': 'jade/api.jade',
          'dist/view/sdk.html': 'jade/sdk.jade'
        }
      }
    },
    watch: {
      scripts: {
        files: ['jade/*.jade', 'less/*.less', 'coffee/*.coffee'],
        tasks: ['jade', 'less', 'coffee'],
        options: {
          spawn: false,
        },
      },
    },
    clean: {
      html: ["dist/*.html"],
    },
    less: {
      development: {
        options: {
          paths: ["dist/css"]
        },
        files: {
          "dist/css/main.css": "less/main.less"
        }
      },
      production: {
        options: {
          paths: ["dist/css"],
          cleancss: true,
        },
        files: {
          "dist/css/main.css": "less/main.less"
        }
      }
    },
    coffee: {
      compile: {
        files: {
          'dist/js/main.js': 'coffee/main.coffee', // 1:1 compile
        }
      }
    }
  });

  // Load the plugin that provides the "jade" task.
  grunt.loadNpmTasks('grunt-contrib-jade');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-contrib-clean');
  grunt.loadNpmTasks('grunt-contrib-less');
  grunt.loadNpmTasks('grunt-contrib-coffee');
  // Default task(s).
  grunt.registerTask('default', ['jade']);

};
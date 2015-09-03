// # NPM module definitions.
module.exports = function(grunt) {

	// # Grunt-cli initial configuration starter.
	grunt.initConfig({

		jshint: {
			all:     ['development/**/*.js'], 
			options: {
				globals: {
					_:          false, 
					$:          false,
					jasmine:    false,
					describe:   false,
					it:         false,
					expect:     false,
					beforeEach: false,
					afterEach:  false,
					sinon:      false
				}, 
				browser: true,
				devel:   true
			}
		},

		testem: {
			unit: {
				options: {
					framework:     'jasmine2',
					launch_in_dev: ['PhantomJS'],
					before_tests:  'grunt jshint',
					serve_files:   [
						'node_modules/sinon/pkg/sinon.js',
						'development/**/*.js',
						'test/**/*.js'
					],
					watch_files: [
						'src/**/*.js',
						'test/**/*.js'
					]
				}
			}		
		}

	});

	grunt.loadNpmTasks('grunt-contrib-jshint');
	grunt.loadNpmTasks('grunt-contrib-testem');

};
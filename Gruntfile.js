// # NPM module definitions.
module.exports = function(grunt) {

	// # Grunt-cli initial configuration starter.
	grunt.initConfig({

		// # JsHint task.
		jshint: {
			all:     ['development/**/*.js'], 
			options: {
				globals: {					_:          false, 
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

		// # Testem task.
		testem: {
			unit: {
				options: {
					framework:     'jasmine2',
					launch_in_dev: ['PhantomJS'],
					before_tests:  'grunt jshint',
					serve_files:   [
						'node_modules/lodash/index.js',
						'node_modules/jquery/dist/jquery.js',
						'node_modules/sinon/pkg/sinon.js',
						'development/**/*.js',
						'tests/**/*.js'
					],
					watch_files: [
						'development/**/*.js',
						'tests/**/*.js'
					]
				}
			}		
		}

	});

	// # JsHint task. Used by testem.
	grunt.loadNpmTasks('grunt-contrib-jshint');

	// # Testem task. Trigger by running: `testem:run:unit` in the Terminal.
	grunt.loadNpmTasks('grunt-contrib-testem');

	// # Register the Grunt default task. Just run `grunt` in the console. 
	// # No longer required to run `testem:run:unit` in the Terminal. Just run `grunt`. 
	grunt.registerTask('default', ['testem:run:unit']);

};
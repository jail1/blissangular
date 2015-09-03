// # NPM module definitions.
module.exports = function(grunt) {

	// # Grunt-cli initial configuration starter.
	grunt.initConfig({

		jshint: {
			all:     ['development/**/*.js'], 
			options: {
				globals: {
					_: false, 
					$: false
				}, 
				browser: true,
				devel:   true
			}
		}

	});

	grunt.loadNpmTasks('grunt-contrib-jshint');

};
module.exports = function(grunt) {

	grunt.initConfig({

		jshint: {
			options: {
				jshintrc: true,
				ignores: ['templates.js', 'ember-app.js']
			},
			files: {
				src: ['*.js']
			}
		},

		emberTemplates: {
			compile: {
				options: {
					templateBasePath: 'templates/'
				},
				files: {
					'templates.js': 'templates/**/*.hbs'
				}
			}
		},

		less: {
			styles: {
				files: {
					'assets/css/style.css': 'assets/less/style.less'
				}
			}
		},

		watch: {
			jshint: {
				files: ['*.js'],
				tasks: ['jshint']
			},
			less: {
				files: ['assets/less/*.less'],
				tasks: ['less']
			},
			emberTemplates: {
				files: ['templates/**/*.hbs'],
				tasks: ['emberTemplates']
			},
			concat: {
				files: ['app.js', 'router.js', 'controllers/*.js', 'helpers/*.js', 'models/*.js', 'routes/*.js', 'views/*.js', 'templates.js'],
				tasks: ['concat']
			}
		},

		concat: {
			options: {
				separator: ';'
			},
			dist: {
				src: ['app.js', 'store.js', 'router.js', 'controllers/*.js', 'helpers/*.js', 'models/*.js', 'routes/*.js', 'views/*.js', 'templates.js'],
				dest: 'ember-app.js'
			}
		}
	});

	grunt.loadNpmTasks('grunt-contrib-jshint');
	grunt.loadNpmTasks('grunt-ember-templates');
	grunt.loadNpmTasks('grunt-contrib-watch');
	grunt.loadNpmTasks('grunt-contrib-less');
	grunt.loadNpmTasks('grunt-contrib-concat');

	grunt.registerTask('default', ['jshint', 'emberTemplates', 'less', 'concat']);
};
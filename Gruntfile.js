'use strict';

var paths = {
    js: ['*.js', 'test/**/*.js', '!test/coverage/**', '!bower_components/**', 'packages/**/*.js', '!packages/**/node_modules/**', '!packages/contrib/**/*.js', '!packages/contrib/**/node_modules/**'],
    html: ['packages/**/public/**/views/**', 'packages/**/server/views/**'],
    css: ['!bower_components/**', 'packages/**/public/**/css/*.css', '!packages/contrib/**/public/**/css/*.css']
};

module.exports = function (grunt) {
    if (process.env.NODE_ENV !== 'production') {
        require('time-grunt')(grunt);
    }
    grunt.loadNpmTasks('grunt-ziti');

    // Project Configuration
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        assets: grunt.file.readJSON('config/assets.json'),
        clean: ['bower_components/build'],
        watch: {
            js: {
                files: paths.js,
                tasks: ['jshint'],
                options: {
                    livereload: true
                }
            },
            html: {
                files: paths.html,
                options: {
                    livereload: true,
                    interval: 500
                }
            },
            css: {
                files: paths.css,
                tasks: ['csslint'],
                options: {
                    livereload: true
                }
            }
        },
        jshint: {
            all: {
                src: paths.js,
                options: {
                    jshintrc: true
                }
            }
        },
        uglify: {
            core: {
                options: {
                    mangle: false
                },
                files: '<%= assets.core.js %>'
            }
        },
        csslint: {
            options: {
                csslintrc: '.csslintrc'
            },
            src: paths.css
        },
        cssmin: {
            core: {
                files: '<%= assets.core.css %>'
            }
        },
        nodemon: {
            dev: {
                script: 'server.js',
                options: {
                    args: [],
                    ignore: ['node_modules/**'],
                    ext: 'js,html',
                    nodeArgs: ['--debug'],
                    delayTime: 1,
                    cwd: __dirname
                }
            }
        },
        concurrent: {
            tasks: ['nodemon', 'watch'],
            options: {
                logConcurrentOutput: true
            }
        },
        mochaTest: {
            options: {
                reporter: 'spec',
                require: [
                    'server.js',
                    function () {
                        require('meanio/lib/util').preload(__dirname + '/packages/**/server', 'model');
                    }
                ]
            },
            src: ['packages/**/server/tests/**/*.js']
        },
        env: {
            test: {
                NODE_ENV: 'test'
            }
        },
        karma: {
            unit: {
                configFile: 'karma.conf.js'
            }
        },
		ziti: {
			subset: {
                options: {
                    html: {
                        pattern: '\\.html?$'
                    },
                    js: {
                        pattern: '\\.js$'
                    },
                    css: {
                        pattern: '\\.css$'
                    },
                    font: {
                        pattern: '\\.ttf$',
                        charsFilePattern: '\\.txt$'
                    },
                    subset: true,
                    optimize: true,
                    convert: true,
                    deleteCharsFile: true
                },
                files: {
                    'packages/wedding/public/assets/fonts/XinGothic-Regular.ttf': [
                        'packages/**/public/views/**/*.html',
                        'fonts/XinGothic-Regular.ttf'
                    ],
                    'packages/wedding/public/assets/fonts/XinGothic-Bold.ttf': [
                        'packages/**/public/views/**/*.html',
                        'fonts/XinGothic-Bold.ttf'
                    ],
                    'packages/wedding/public/assets/fonts/QXyingbixing.ttf': [
                        'packages/**/public/views/**/*.html',
                        'fonts/QXyingbixing.ttf'
                    ],
                    'packages/wedding/public/assets/fonts/PTSans-NarrowBold.ttf': [
                        'packages/**/public/views/**/*.html',
                        'fonts/PTSans-NarrowBold.ttf'
                    ],
                    'packages/wedding/public/assets/fonts/PTSans-Narrow.ttf': [
                        'packages/**/public/views/**/*.html',
                        'fonts/PTSans-Narrow.ttf'
                    ],
                    'packages/wedding/public/assets/fonts/GreatVibes-Regular.ttf': [
                        'packages/**/public/views/**/*.html',
                        'fonts/GreatVibes-Regular.ttf'
                    ]
                }
			}
		}
    });

    //Load NPM tasks
    require('load-grunt-tasks')(grunt);

    //Default task(s).
    if (process.env.NODE_ENV === 'production') {
        grunt.registerTask('default', ['clean', 'cssmin', 'uglify', 'concurrent']);
    } else {
        grunt.registerTask('default', ['clean', 'jshint', 'csslint', 'concurrent']);
    }

    //Test task.
    grunt.registerTask('test', ['env:test', 'mochaTest', 'karma:unit']);

    // For Heroku users only.
    // Docs: https://github.com/linnovate/mean/wiki/Deploying-on-Heroku
    grunt.registerTask('heroku:production', ['cssmin', 'uglify']);
};

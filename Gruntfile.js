var webpack = require('webpack');
module.exports = function(grunt) {

    // Load all tasks(s).
    require('load-grunt-tasks')(grunt);

    // Config tasks(s).
    grunt.initConfig({

        dir: {

            /** public path */ 

            public: "public",
            public_js: "<%= dir.public %>/js",
            public_css: "<%= dir.public %>/css",

            /** src path */

            src: "src",
            src_js: "<%= dir.src %>/js",
            src_sass: "<%= dir.src %>/sass"

        },

        connect: {   // << create web-server
            production: {
                options: {
                    port: 7000,
                    base: ["<%= dir.public %>"],
                    keepalive: true,
                    open: true
                }
            },
            dev: {
                options: {
                    port: 7000,
                    base: ["<%= dir.public %>"],
                }
            }
        },

        sass: { // << CSS Processor (Compile scss file to css file)
            options: {
                sourceMap: true
            },
            dist: {
                files: {
                    '<%= dir.public_css %>/app.css': '<%= dir.src_sass %>/app.scss'
                }
            }
        },

        watch: { // << Livereload convenient for develop
            livereload: {
                files: [
                    '<%= dir.public %>/*.html',
                    '<%= dir.public %>/**/*.html',
                    '<%= dir.public_css %>/*.css',
                    '<%= dir.public_js %>/*.js',
                ],
                options: {
                    livereload: true
                }
            },
            jsCompile: {
                files: ['<%= dir.src_js %>/*.js'],
                tasks: ['webpack']
            },
            cssCompile: {
                files: ['<%= dir.src_sass %>/*.scss'],
                tasks: ['sass']
            }
        },

        injector: { // << inject Javascript file to index.html
            dev: {
                files: {
                     "<%= dir.public %>/index.html": [
                        '<%= dir.public_js %>/*.js',
                        '<%= dir.public_css %>/*.css',
                    ],
                },
                options: {
                    ignorePath: "public/",
                    relative: true,
                    addRootSlash: false
                }
            }
        },

         wiredep: { // << inject components (css, js) file to index.html
            options: {
                devDependencies: true
            },
            components: {
                src: [ '<%= dir.public %>/index.html' ]
            }
        },

        webpack: { // << Compile Javascript es6 to Javascript es5, ** I'm not sure
            dev: {
                entry: ['./src/js/app.js'],
                output: {
                    path: './public/js',
                    filename: 'app.js'
                },
                module: {
                    loaders: [
                        {
                            test: /\.vue$/,
                            loader: 'vue-loader'
                        },
                        {
                            test: /\.js$/,
                            loader: 'babel-loader',
                            exclude: /node_modules/
                        }
                    ]
                },
                resolve: {
                    extensions: ['.js'],
                    alias: {
                        'vue': 'vue/dist/vue.common.js'
                    }
                },
                plugins: [
                    new webpack.ProvidePlugin({
                        $: 'jquery',
                        jquery: 'jquery',
                        'window.jQuery': 'jquery',
                        jQuery: 'jquery'
                    })
                ]
            }
        }

    });


    // Grunt tasks(s).
    grunt.registerTask('default', [ 'sass', 'webpack', 'wiredep', 'injector', 'connect:dev', 'watch' ]);
    grunt.registerTask('build', ['sass', 'webpack', 'wiredep', 'injector', 'connect:production']);
};
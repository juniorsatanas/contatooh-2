/*global module */

module.exports = function (grunt) {
    'use strict';

    grunt.initConfig({
        /*copy: {
            project: {
                expand: true,
                cwd: '.',
                src: ['**', '!gruntfile.js', '!package.json', '!bower.json'],
                dest: 'dist'
            }
        },
        clean: {
            dist: {
                src: 'dist'
            }
        },*/
        usemin : {
            //html: 'dist/app/views/**/*.ejs'
            html: 'app/views/**/*.ejs'
        },
        useminPrepare: {
            options: {
                /*root: 'dist/public',
                dest: 'dist/public'*/
                root: 'public',
                dest: 'public'
            },
            //html: 'dist/app/views/**/*.ejs'
            html: 'app/views/**/*.ejs'
        },
        ngAnnotate: {
            scripts: {
                expand: true,
                //src: ['dist/public/js/**/*.js']
                src: ['public/js/**/*.js']
            }
        }
    });

    //grunt.registerTask('default', ['dist', 'minifica']);
    //grunt.registerTask('dist', ['clean', 'copy']);
    grunt.registerTask('minifica', ['useminPrepare', 'ngAnnotate', 'concat', 'uglify', 'cssmin', 'usemin']);

    //grunt.loadNpmTasks('grunt-contrib-copy');
    //grunt.loadNpmTasks('grunt-contrib-clean');

    grunt.loadNpmTasks('grunt-ng-annotate');

    grunt.loadNpmTasks('grunt-contrib-concat');
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-cssmin');

    grunt.loadNpmTasks('grunt-usemin');

};
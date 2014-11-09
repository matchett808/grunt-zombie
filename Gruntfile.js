/*
 * grunt-zombie
 * https://github.com/matchett808/grunt-zombie
 *
 * Copyright (c) 2014 Iain Matchett
 * Licensed under the MIT license.
 */

'use strict';

module.exports = function(grunt) {

  // Project configuration.
  grunt.initConfig({
    // Configuration to be run (and then tested).
    zombie: {
        options: {
	'targetfiles': 'test/test.js'
         }
     }
});
  grunt.loadTasks('tasks');
  // By default, lint and run all tests.
  grunt.registerTask('default', ['zombie']);

};

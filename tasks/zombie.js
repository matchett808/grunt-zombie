/*
 * grunt-zombie
 * https://github.com/matchett808/grunt-zombie
 *
 * Copyright (c) 2014 Iain Matchett
 * Licensed under the MIT license.
 */

'use strict';

module.exports = function(grunt) {
var Browser = require("zombie");
var assert = require("assert");
  // Please see the Grunt documentation for more information regarding task
  // creation: http://gruntjs.com/creating-tasks

  grunt.registerTask('zombie', 'Run Zombie JS tests from Grunt', function() {
	var done = this.async();
	var target = this.options().targetfiles;
	var child_proc = grunt.util.spawn({cmd:"node", args: [target]},function(error, result, code){
		if(error)
		{
		grunt.log.error('Unspecified Error: '+ error);
		}
		if(code == 0)
		{
		grunt.log.oklns("Test Completed successfully");
		}
		child_proc.stdout.pipe(process.stdout);
		child_proc.stderr.pipe(process.stderr);
	});
	
            child_proc.stdout.pipe(process.stdout);
            child_proc.stderr.pipe(process.stderr);
  }); //grunt.registerTask
}; //module.exports

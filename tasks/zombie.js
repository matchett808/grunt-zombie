/*
 * grunt-zombie
 * https://github.com/matchett808/grunt-zombie
 *
 * Copyright (c) 2014 Iain Matchett
 * Licensed under the MIT license.
 */

'use strict';

module.exports = function(grunt) {

  // Please see the Grunt documentation for more information regarding task
  // creation: http://gruntjs.com/creating-tasks

  grunt.task.registerTask('zombie', 'Run Zombie JS tests from Grunt', function() {
        var done = grunt.task.current.async();
        if ( !this.options().targetfiles ) {
             grunt.fail.warn('You must specify a test file.');
                }
	var target = this.options().targetfiles;
              if (!grunt.file.exists(target)) {
          grunt.log.warn('Source file "' + target + '" not found.');
          return;
        }
          

	var child_proc = grunt.util.spawn({cmd:"node", args: [target]},function(error, result, code){
        grunt.log.subhead("Test Output:");
		if(error)
        {
        grunt.log.write(result.stdout["red"].bold);
        grunt.log.subhead("Oh no!");
		}
		if(code == 0)
		{
        grunt.log.write(result.stdout["green"].bold);
        grunt.log.subhead("Test Result:");
		grunt.log.oklns("Test Completed successfully");
		}
	});
	
  });
};

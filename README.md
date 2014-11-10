# grunt-zombie

> Run Zombie JS tests from Grunt

## Getting Started
This plugin requires Grunt `~0.4.5`

If you haven't used [Grunt](http://gruntjs.com/) before, be sure to check out the [Getting Started](http://gruntjs.com/getting-started) guide, as it explains how to create a [Gruntfile](http://gruntjs.com/sample-gruntfile) as well as install and use Grunt plugins. Once you're familiar with that process, you may install this plugin with this command:

```shell
npm install grunt-zombie --save-dev
```

Once the plugin has been installed, it may be enabled inside your Gruntfile with this line of JavaScript:

```js
grunt.loadNpmTasks('grunt-zombie');
```

## The "zombie" task

### Overview
In your project's Gruntfile, add a section named `zombie` to the data object passed into `grunt.initConfig()`.

```js
grunt.initConfig({
  zombie: {
    options: {
      targetfiles: "path/to/target/testfile.js"
    },
  },
});
```

### Options

#### options.targetfiles
Type: `String`
Default value: no default value **you must specify this**

A string value pointing to the test you would like to run.

## Contributing
In lieu of a formal styleguide, take care to maintain the existing coding style. Add unit tests for any new or changed functionality. Lint and test your code using [Grunt](http://gruntjs.com/).

## Release History

  - **0.2.0**: Documentation update - fully working version, added roadmap
  - **0.1.5**: (RC 0.2.0) Fully working version
  - **0.1.4**: 
  - **0.1.3**: 
  - **0.1.2**: 
  - **0.1.1**: 
  - **0.1.0**: Initial Release


## Roadmap for 0.3.0

- add passing a directory or array of files and loop through accordingly
- add improved ('prettified') output
- add a 'build test task' that accepts a url (default to localhost/directory) that checks for JS console errors
- any other suggestions? File an issue...

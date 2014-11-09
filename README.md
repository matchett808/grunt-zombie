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
      // Task-specific options go here.
	targetfiles: 'File'
    },
  },
});
```

### Options

#### options.targetfiles
Type: `String`
Default value: `',  '`

### Usage Examples
Install as above, point towards zombie test file, enjoy! :)

#### Default Options
No Default Options

```js
grunt.initConfig({
  zombie: {
    options: {
	targetfiles: 'test/build-test.js'
	},
  },
});
```

#### Custom Options
No custom options

## Release History

* 2014-11-09	v0.1.0	Base Project, supports 1 file - no looping....baulks on error as desired

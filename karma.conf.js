'use strict';
// Karma configuration

let baseLibs = [
  'node_modules/systemjs/dist/system-polyfills.js',
  'node_modules/systemjs/dist/system.js',
  'node_modules/es6-shim/es6-shim.js',
  'node_modules/rxjs/bundles/Rx.js',
  'node_modules/angular2/bundles/angular2-polyfills.js',
  'node_modules/angular2/bundles/angular2.dev.js',
  'node_modules/angular2/bundles/router.dev.js',
  'node_modules/angular2/bundles/http.dev.js'
];

module.exports = function (config) {
  config.set({

    // base path that will be used to resolve all patterns (eg. files, exclude)
    basePath: '',


    // frameworks to use
    // available frameworks: https://npmjs.org/browse/keyword/karma-adapter
    frameworks: ['jasmine'],


    // list of files / patterns to load in the browser
    files: [
      ...baseLibs,
      'node_modules/angular2/bundles/testing.dev.js',
      'karma.shim.js',
      { pattern: 'app/**/*.js', included: false }
    ],

    // list of files to exclude
    exclude: [
    ],

    // proxied base paths
    // proxies: {
    //   // required for component assests fetched by Angular's compiler
    //   "/app/": "/base/app/"
    // },

    // preprocess matching files before serving them to the browser
    // available preprocessors: https://npmjs.org/browse/keyword/karma-preprocessor
    preprocessors: {
      "app/**/!(*spec|*mock).js": ['coverage']
    },

    coverageReporter: {
      dir : 'report/coverage/',
      reporters: [{ 
        type: 'json', 
        subdir : '.',
        file : 'coverage-final.json',
      }]
    },
    
    // test results reporter to use
    // possible values: 'dots', 'progress'
    // available reporters: https://npmjs.org/browse/keyword/karma-reporter
    reporters: ['mocha', 'coverage'],


    // web server port
    port: 9876,


    // enable / disable colors in the output (reporters and logs)
    colors: true,


    // level of logging
    // possible values: config.LOG_DISABLE || config.LOG_ERROR || config.LOG_WARN || config.LOG_INFO || config.LOG_DEBUG
    logLevel: config.LOG_INFO,


    // enable / disable watching file and executing tests whenever any file changes
    autoWatch: true,


    // start these browsers
    // available browser launchers: https://npmjs.org/browse/keyword/karma-launcher
    browsers: ['Chrome'],


    // Continuous Integration mode
    // if true, Karma captures browsers, runs the tests and exits
    singleRun: false,

    // Concurrency level
    // how many browser should be started simultaneous
    concurrency: Infinity
  })
}

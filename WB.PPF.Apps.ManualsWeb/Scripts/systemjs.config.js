﻿/**
 * System configuration for Angular 2 apps
 * Adjust as necessary for your application needs.
 */
(function (global) {
    var routerVer = '@3.0.0-alpha.3'; // lock router version

    // map tells the System loader where to look for things
    var map = {
        'app': 'app', // 'dist',

        '@angular': 'node_modules/@angular',
        '@angular/router': 'https://npmcdn.com/@angular/router' + routerVer,
        'angular2-in-memory-web-api': 'node_modules/angular2-in-memory-web-api',
        'rxjs': 'node_modules/rxjs'
    };

    // packages tells the System loader how to load when no filename and/or no extension
    var packages = {
        'app': { main: 'main.js', defaultExtension: 'js' },
        'rxjs': { defaultExtension: 'js' },
        'angular2-in-memory-web-api': { main: 'index.js', defaultExtension: 'js' },
    };

    var ngPackageNames = [
      'common',
      'compiler',
      'core',
      'http',
      'platform-browser',
      'platform-browser-dynamic',
      'router-deprecated',
      'upgrade',
    ];

    // Individual files (~300 requests):
    function packIndex(pkgName) {
        packages['@angular/' + pkgName] = { main: 'index.js', defaultExtension: 'js' };
    }

    // Bundled (~40 requests):
    function packUmd(pkgName) {
        packages['@angular/' + pkgName] = { main: pkgName + '.umd.js', defaultExtension: 'js' };
    }

    var setPackageConfig = System.packageWithIndex ? packIndex : packUmd;

    // Add package entries for angular packages
    ngPackageNames.forEach(setPackageConfig);

    // No umd for router yet
    packages['@angular/router'] = { main: 'index.js', defaultExtension: 'js' };

    var config = {
        map: map,
        packages: packages
    };

    System.config(config);

})(this);

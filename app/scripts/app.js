'use strict';

/**
 * @ngdoc overview
 * @name mwApp
 * @description
 * # mwApp
 *
 * Main module of the application.
 */
angular
  .module('mwApp', [
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch',
    'ui.router',
    'snap',
    'ngMap',
    'angulartics',
    'angulartics.google.analytics',
    'vimeoEmbed'
  ])
  .config(function(snapRemoteProvider) {

    snapRemoteProvider.globalOptions = {
      disable: 'right',
      maxPosition: 300

    };
  })
  .config(function($stateProvider, $urlRouterProvider, $locationProvider) {
    //
    // For any unmatched url, redirect to /state1
    $urlRouterProvider.otherwise('/');
    //
    // Now set up the states
    $stateProvider
      .state('home', {
        url: '/',
        views: {
          content: {
            // templateUrl: 'views/home.html'
          }
        }
      })
      .state('about', {
        url: '/about',
        views: {
          content: {
            templateUrl: 'views/about.html',
            controller: 'AboutCtrl'
          }
        }
      })
      .state('contact', {
        url: '/contact',
        views: {
          content: {
            templateUrl: 'views/contact.html',
            controller: 'ContactCtrl'
          }
        }
      })
      .state('services', {
        url: '/services',

        views: {
          content: {
            templateUrl: 'views/services.html'

          }
        }
      })
      .state('works', {
        url: '/works',

        views: {
          content: {
            templateUrl: 'views/works.html',
            controller: 'WorksCtrl'
          }
        }
      })

    .state('works.video', {
      url: '/:work/video/:id',
      views: {
        sub: {
          templateUrl: 'views/video.html',
          controller: 'VideoCtrl'
        }
      }
    });
    $locationProvider.html5Mode(true).hashPrefix('!');

  }).run(function($state, $rootScope, snapRemote) {
    $rootScope.$on('$stateChangeStart', function(e, toState) {
      snapRemote.close();
      if (toState.name === 'home') {
        $rootScope.isHome = true;
      } else {
        $rootScope.isHome = false;
      }
    });
  });
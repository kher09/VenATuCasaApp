// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
// 'starter.controllers' is found in controllers.js
angular.module('starter', ['ionic', 'starter.controllers', 'angularUtils.directives.dirPagination'])

.run(function($ionicPlatform) {
  $ionicPlatform.ready(function() {
    // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
    // for form inputs)
    if (window.cordova && window.cordova.plugins.Keyboard) {
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
    }
    if (window.StatusBar) {
      // org.apache.cordova.statusbar required
      StatusBar.styleDefault();
    }
  });
})

.config(function($stateProvider, $urlRouterProvider) {
  $stateProvider

  .state('app', {
    url: "/app",
    abstract: true,
    templateUrl: "templates/menu.html",
    controller: 'AppCtrl'
  })

  .state('app.login', {
    url: "/login",
    abstract: true,
    templateUrl: "templates/login.html",
    controller: 'AppCtrl'
  })

  .state('app.venatucasa', {
      url: "/venatucasa",
      views: {
        'menuContent': {
          templateUrl: "templates/inicio.html",
          controller: 'VistaInicio'
        }
      }
    })

  .state('app.lista', {
    url: "/lista",
    views: {
      'menuContent': {
        templateUrl: "templates/listacasas.html",
        controller: 'ListaPropiedades'
      }
    }
  })

  .state('app.detallepropiedad', {
    url: "/detallepropiedad",
    views: {
      'menuContent': {
        templateUrl: "templates/detallepropiedad.html",
        controller: 'DetallesPropiedad'
      }
    }
  })

  .state('app.requisitos', {
    url: "/requisitos",
    views: {
      'menuContent': {
        templateUrl: "templates/requisitos.html"
      }
    }
  })

  .state('app.contacto', {
    url: "/contacto",
    views: {
      'menuContent': {
        templateUrl: "templates/contacto.html"
      }
    }
  })
  // if none of the above states are matched, use this as the fallback
  $urlRouterProvider.otherwise('/app/venatucasa');
});

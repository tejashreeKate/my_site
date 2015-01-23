var app = angular.module("mySite",['ngRoute','uiGmapgoogle-maps'])
 .config(function ($routeProvider,$httpProvider, $provide) {
    $routeProvider
    .when('/', {
        templateUrl: 'views/home.html',
        controller:"HomeCtrl"
    })
    .when('/profile', {
        templateUrl: 'views/profile.html',
        controller:"HomeCtrl"
    })
    .when('/about', {
        templateUrl: 'views/about.html',
        controller:"HomeCtrl"
    })
    .when('/contact', {
        templateUrl: 'views/contact.html',
        controller:"HomeCtrl"
    })
})
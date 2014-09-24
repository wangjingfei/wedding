'use strict';

//Setting up route
angular.module('mean.wedding').config(['$stateProvider', '$urlRouterProvider', function ($stateProvider, $urlRouterProvider) {
    $stateProvider.state('home', {
        url: '/home',
        templateUrl: 'wedding/views/index.html',
        controller: 'HomeController'
    }).state('wedding', {
        url: '/wedding',
        templateUrl: 'wedding/views/wedding.html'
    }).state('album', {
        url: '/album',
        templateUrl: 'wedding/views/album.html',
        controller: 'AlbumController'
    }).state('links', {
        url: '/links',
        templateUrl: 'wedding/views/links.html'
    }).state('wishes', {
        url: '/wishes',
        templateUrl: 'wedding/views/wishes.html'
    }).state('contacts', {
        url: '/contacts',
        templateUrl: 'wedding/views/contacts.html'
    });

    $urlRouterProvider.otherwise('/home');
}]);

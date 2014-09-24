'use strict';

//Setting up route
angular.module('mean.wedding').config(['$stateProvider',
    function ($stateProvider) {
        $stateProvider.state('home page', {
            url: '/home',
            templateUrl: 'wedding/views/index.html'
        }).state('wedding', {
            url: '/wedding',
            templateUrl: 'wedding/views/wedding.html'
        }).state('album', {
            url: '/album',
            templateUrl: 'wedding/views/album.html'
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
    }
]);

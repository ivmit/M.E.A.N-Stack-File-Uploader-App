/**
 * Created by imitrach on 9/21/2016.
 */
var app = angular.module('superheroApp', ['ngRoute', 'angular-filepicker'])
    .config(function($routeProvider, filepickerProvider){


        $routeProvider.when('/addSuperhero', {
            templateUrl: 'partials/addSuperHero.html',
            controller: 'addSuperHeroController'
        })
        .when('/gallery', {
            templateUrl: 'partials/gallery.html',
            controller: 'galleryController'
        })
        .when('/detail/:id', {
            templateUrl: 'partials/detail.html',
            controller: 'detailController'
        })
        .otherwise({redirectTo: '/addSuperhero'});

        filepickerProvider.setKey('ApNlGi3SRSqSU2zTnRgP6z');

    });
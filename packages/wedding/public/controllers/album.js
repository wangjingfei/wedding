/**
 * Created by fify on 9/24/14.
 */
'use strict';

angular.module('mean.wedding').controller('AlbumController', ['$scope', function ($scope) {
    $('.gallery')._TMS({
        show: 0,
        pauseOnHover: true,
        prevBu: false,
        nextBu: false,
        playBu: false,
        duration: 700,
        preset: 'fade',
        pagination: $('.img-pags').uCarousel({show: 3, shift: 0, rows: 1}),
        pagNums: false,
        slideshow: 7000,
        numStatus: true,
        banners: false,
        waitBannerAnimation: false,
        progressBar: false
    })
}]);

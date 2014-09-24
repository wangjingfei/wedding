/**
 * Created by fify on 9/24/14.
 */
'use strict';

angular.module('mean.wedding').controller('HomeController', ['$scope', function ($scope) {
    $(document).ready(function () {
        $('.slider')._TMS({
            show: 0,
            pauseOnHover: true,
            prevBu: '.prev',
            nextBu: '.next',
            playBu: false,
            duration: 800,
            preset: 'fade',
            pagination: '.pags',
            pagNums: false,
            slideshow: 7000,
            numStatus: false,
            banners: false,
            waitBannerAnimation: false,
            progressBar: false
        })
    });
}]);

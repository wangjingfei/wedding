/**
 * Created by fify on 9/24/14.
 */
'use strict';

angular.module('mean.wedding').controller('HomeController', ['$scope', function ($scope) {
    $scope.slideImgs = [];
    $scope.slideImgs.push('/wedding/assets/img/slide-1.jpg');
    $scope.slideImgs.push('/wedding/assets/img/slide-2.jpg');
    $scope.slideImgs.push('/wedding/assets/img/slide-3.jpg');
    $scope.slideImgs.push('/wedding/assets/img/slide-4.jpg');
//    $(document).ready(function () {
//        $('.slider')._TMS({
//            show: 0,
//            pauseOnHover: true,
//            prevBu: '.prev',
//            nextBu: '.next',
//            playBu: false,
//            duration: 800,
//            preset: 'fade',
//            pagination: '.pags',
//            pagNums: false,
//            slideshow: 7000,
//            numStatus: false,
//            banners: false,
//            waitBannerAnimation: false,
//            progressBar: false
//        });
//    });
}]);

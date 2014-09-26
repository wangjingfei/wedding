/**
 * Created by fify on 9/24/14.
 */
'use strict';

angular.module('mean.wedding').controller('HomeController', ['$scope', function ($scope) {
    $scope.slideImgs = [];
    $scope.slideImgs.push('/wedding/assets/img/slides/slide-1.jpg');
    $scope.slideImgs.push('/wedding/assets/img/slides/slide-2.jpg');
    $scope.slideImgs.push('/wedding/assets/img/slides/slide-3.jpg');
    $scope.slideImgs.push('/wedding/assets/img/slides/slide-4.jpg');

    $scope.slideNavImgs = [];
    $scope.slideNavImgs.push('/wedding/assets/img/slides/slide-1-sm.jpg');
    $scope.slideNavImgs.push('/wedding/assets/img/slides/slide-2-sm.jpg');
    $scope.slideNavImgs.push('/wedding/assets/img/slides/slide-3-sm.jpg');
    $scope.slideNavImgs.push('/wedding/assets/img/slides/slide-4-sm.jpg');
}]);

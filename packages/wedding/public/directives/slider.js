/**
 * Created by fify on 9/25/14.
 */
'use strict';

angular.module('mean.wedding').directive('slider', ['$interval', function($interval) {
    return {
        restrict: 'E',
        templateUrl: 'wedding/views/templates/slider.html',
        scope: {
            sliderImgs: '=',
            sliderNavImgs: '='
        },
        link: function(scope, element, attrs) {
            var sliderHeight = 670;
            var interval = null;

            if(attrs.sliderHeight) {
                sliderHeight = scope.$eval(attrs.sliderHeight);
            }

            // Show the first image.
            scope.currentImgIndex = 0;

            // Set the height of the slider.
            element.css('height', sliderHeight + 'px');

            scope.selectImg = function(index) {
                scope.currentImgIndex = index;

                restartInterval();
            };

            scope.selectNext = function() {
                scope.currentImgIndex += 1;
                if(scope.currentImgIndex >= scope.sliderImgs.length) {
                    scope.currentImgIndex = 0;
                }

                restartInterval();
            };

            scope.selectPrevious = function() {
                scope.currentImgIndex -= 1;
                if(scope.currentImgIndex < 0) {
                    scope.currentImgIndex += scope.sliderImgs.length;
                }

                restartInterval();
            };

            function restartInterval() {
                if(interval) {
                    $interval.cancel(interval);
                }

                interval = $interval(function() {
                    scope.selectNext();
                }, 10*1000);
            }

            // Start the interval counter.
            restartInterval();
        }
    };
}]);

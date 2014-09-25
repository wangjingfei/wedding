/**
 * Created by fify on 9/25/14.
 */
'use strict';

angular.module('mean.wedding').directive('slider', function() {
    return {
        restrict: 'E',
        templateUrl: 'wedding/views/templates/slider.html',
        scope: {
            sliderImgs: '='
        },
        link: function(scope, element, attrs) {
            var sliderHeight = 670;
            if(attrs.sliderHeight) {
                sliderHeight = scope.$eval(attrs.sliderHeight);
            }

            // Show the first image.
            scope.currentImgIndex = 0;

            // Set the height of the slider.
            element.css('height', sliderHeight + 'px');

            element.css('background-color', 'green'); // Only for test.

            // TODO 2. Watch the currentImgIndex and change the picture;
            scope.$watch('currentImgIndex', function(index) {
                // TODO 1. Background change animation;
            });
            // TODO 3. Automatically change the currentImgIndex;
            // TODO 4. Enable previous and next button;
            // TODO 5.

            scope.selectImg = function(index) {
                scope.currentImgIndex = index;
            };
        }
    };
});

/**
 * Created by fify on 9/25/14.
 */

angular.module('mean.wedding').directive('slide', function() {
    return {
        restrict: 'E',
        templateUrl: 'wedding/views/templates/slide.html',
        scope: {
            slideImgs: '='
        },
        link: function(scope, element, attrs) {
            var slideHeight = 670;
            if(attrs.slideHeight) {
                var slideHeight = scope.$eval(attrs.slideHeight);
            }

            // Set slide height.

            // TODO 1. Background change animation;
            // TODO 2. Wath the currentImgIndex and change the picture;
            // TODO 3. Automatically change the currentImgIndex;
            // TODO 4. Enable previous and next button;
            // TODO 5.
        }
    }
});

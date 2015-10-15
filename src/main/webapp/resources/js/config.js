var angModule = angular.module("shalivahanaApp", ['ui.router', 'ngAnimate']);

angModule.config(['$urlRouterProvider', '$stateProvider',
    function ($urlRouterProvider, $stateProvider)
    {
        $stateProvider.state('home', {
            url: '/home',
            templateUrl: 'views/headerviews/home.html',
            controller: 'HomeController'
        });

        $stateProvider.state('history', {
            url: '/history',
            templateUrl: 'views/headerviews/history.html'
                //controller: 'AboutusController'
        });

        $stateProvider.state('members', {
            url: '/members',
            templateUrl: 'views/headerviews/members.html'
                //controller: 'ProjectsController'
        });

        $stateProvider.state('meetings', {
            url: '/meetings',
            templateUrl: 'views/headerviews/meetings.html'
        });

        $stateProvider.state('contactus', {
            url: '/contactus',
            templateUrl: 'views/headerviews/contactus.html'
        });

        $urlRouterProvider.otherwise('/home');
    }
]);

angModule.controller('HomeController', ['$scope', '$interval', function ($scope, $interval ) {
    $scope.currentIndex = HomeConroller.currentIndex;
    $scope.direction = HomeConroller.direction;

    $scope.slides = HomeConroller.init();

    $scope.nextSlide = function (index) {
        return HomeConroller.nextSlide(index);
    };

    $scope.prevSlide = function () {
        return HomeConroller.prevSlide();
    };

    $scope.isCurrentSlideIndex = function (index) {
        return HomeConroller.isCurrentSlideIndex(index);
    };

    $scope.setCurrentSlideIndex = function (index) {
        return HomeConroller.setCurrentSlideIndex(index);
    };

    $interval(function () {
        $scope.prevSlide();
    }, 5000);
    //console.log($scope.slides, HomeConroller.init());
}]);

/*angModule.animation('.slide-animation', function () {
    return {
        beforeAddClass: function (element, className, done) {
            var scope = element.scope();

            if (className == 'ng-hide') {
                var finishPoint = element.parent().width();
                if (scope.direction !== 'right') {
                    finishPoint = -finishPoint;
                }
                TweenMax.to(element, 0.5, {
                    left: finishPoint,
                    onComplete: done
                });
            } else {
                done();
            }
        },
        removeClass: function (element, className, done) {
            var scope = element.scope();

            if (className == 'ng-hide') {
                element.removeClass('ng-hide');

                var startPoint = element.parent().width();
                if (scope.direction === 'right') {
                    startPoint = -startPoint;
                }

                TweenMax.fromTo(element, 0.5, {
                    left: startPoint
                }, {
                    left: 0,
                    onComplete: done
                });
            } else {
                done();
            }
        }
    }
});*/

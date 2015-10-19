var angModule = angular.module("shalivahanaApp", ['ui.router', 'ngAnimate']);

angModule.config(['$urlRouterProvider', '$stateProvider',
    function ($urlRouterProvider, $stateProvider)
    {
        $stateProvider.state('home', {
            url: '/home',
            templateUrl: 'home/home-view.html',
            controller: 'HomeController'
        });

        $stateProvider.state('history', {
            url: '/history',
            templateUrl: 'history/history-view.html'
                //controller: 'AboutusController'
        });

        $stateProvider.state('members', {
            url: '/members',
            templateUrl: 'members/members-view.html',
            controller: 'MemberController'
        });

        $stateProvider.state('meetings', {
            url: '/meetings',
            templateUrl: 'views/headerviews/meetings-view.html'
        });

        $stateProvider.state('contactus', {
            url: '/contactus',
            templateUrl: 'views/headerviews/contactus-vew.html'
        });

       /* $urlRouterProvider.otherwise('/home');*/
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


angModule.controller("MemberController",["$scope","$http", function($scope, $http){
    $scope.member = {};
    //$scope.member.address = {};
    $scope.addNewMember = function(newMember)
    {
        /*var request = $http({
            method : "POST",
            url : 'members/add/',
            data: newMember,
            headers : {
                'Content-Type' : "application/json"
            }
        });*/
        var request = $http.post('http://localhost:8080/#/members/addMember', newMember);

        console.log(newMember);
        request.success(function (data, status, headers)
        {
            alert("Member Added Successfully");
        });

        request.error(function(data, status, headers, config)
        {
            console.log(data, status);
            alert("Something went Wrong");
        });
        //MemberController.addNewMember($scope, $http, newMember);
    };

    $scope.testingController = function()
    {

        var request = $http({
            method : "GET",
            url : "members/testing",
            headers : {
                'Content-Type' : "application/json"
            }
        });
        request.success(function (data, status, headers)
        {
            alert("Get Service Success  "+status +" << Data is >>"+data.toString());
        });
        request.error(function(data, status, headers, config)
        {
            console.log(config);
            alert("Something went Wrong");
        });
    }
}]);

angModule.factory('myFactory', function($http){
    var factory = {};

    factory.member = function(success, error) {

        return $http({method: 'POST', url: '/member'});
    };
    factory.postStuff = function(stuff){

    };
    return factory;
});

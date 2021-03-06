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

        $stateProvider.state('signup', {
            url: '/signup',
            templateUrl: 'signup/signup-view.html'
        });

        $stateProvider.state('login', {
            url: '/login',
            templateUrl: 'login/login-info.html',
            controller: LoginController
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


angModule.controller("MemberController",["$scope","$http", function($scope, $http){
    $scope.member = {};
    $scope.role = {};
    $scope.gender = {};

    //$scope.member.address = {};{"President", "Vice-President", "Treasurer", "Member"}
    $scope.roles = [{Id: 0, Description: "-- Choose Role --"},
        {Id: 1, Description: "President"},
        {Id: 2, Description: "Vice-President"},
        {Id: 3, Description: "Treasurer"},
        {Id: 4, description: "Member"}];

    $scope.genderArray = [{Id:1, Value:"Male"},{Id:2, Value:"Female"},{Id:3, Value:"Other"}];

    $scope.addNewMember = function(newMember)
    {
        $scope.member.gender = $scope.gender.Value;
        $scope.member.role = $scope.role.Description;
        var request = $http.post('members/addMember', $scope.member);

        console.log(newMember);
        request.success(function (data, status, headers)
        {
            alert("Member Added Successfully");
        });

        request.error(function (data, status, headers, config) {
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

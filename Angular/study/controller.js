var app = angular.module('mainApp',['ngRoute']);
    app.config(function($routeProvider){
      $routeProvider
      .when('/',{
        template: '<h1>Welcome Home</h1>'
      })
      .when('/first',{
        template: '<h1>Welcome 1st</h1>'
        templateUrl: "4a.html"
      })
      .when('/second',{
        template: '<h1>Welcome 2nd</h1>'
        templateUrl: "4b.html"
      })
      .otherwise({
        redirectTo: '/'
      });
    });
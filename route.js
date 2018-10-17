angular.module("ecommerce").config(["$routeProvider", function ($routeProvider) {
    $routeProvider.when("/home", {
        templateUrl: "view/home.html",
        controller: "homeController"
    });



}]);
(function(){
    var app = angular.module('PhonecatApp', ['phonecatFilters', 'phonecatAnimations', 'ngRoute', 'PhonecatControllers']);

    app.config(['$routeProvider',
        function ($routeProvider) {
            $routeProvider.
            when('/phones', {
                templateUrl: 'views/phones.html',
            }).
            when('/phone/:phoneId', {
                templateUrl: 'views/phone.html',
            }).
            when('/phoneform/:phoneId', {
                templateUrl: 'views/phoneform.html',
            }).
            when('/about', {
                templateUrl: 'views/about.html',
            }).
            otherwise({
                redirectTo: '/phones'
            });
    }]);

})();


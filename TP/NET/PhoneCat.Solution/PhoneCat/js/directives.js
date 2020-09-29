(function () {
    var app = angular.module('PhonecatDirectives', []);
    app.directive('phoneItem', function () {
        return {
            restrict: 'E',
            templateUrl: 'views/phoneitemdirective.html'
        }
    });
})();
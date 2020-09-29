var rest = "phones/";

(function () {
    var app = angular.module('PhonecatControllers', []);

    app.controller('PhoneController', ['$http', '$routeParams', function ($http, $routeParams) {
        this.phone = {};

        this.setImage = function (imageUrl) {
            this.mainImageUrl = imageUrl;
        }

        this.email = "contact@cyrilvincent.com";
        this.postPhone = function (c) {
            alert(c.email + " post the phone " + c.phone.name + " (" + c.phone.id + ")\nIl ne reste qu'à poster le c.phone sur le serveur");
        }

        var c = this;
        var uri = rest + $routeParams.phoneId + '.json';
        $http.get(uri).success(function (data) {
            c.phone = data;
            c.mainImageUrl = c.phone.images[0];

        }).error(function (data, status) {
            alert("XHR Error " +uri + ": " + status);
        });

    }]);

    app.controller('PhoneListController', ['$http', function ($http) {
        this.phones = [];
        this.orderProp = 'age';
        this.query = '';
        var c = this;

        $http.get(rest + 'phones.json').success(function (data) {
			c.phones = data;
        }).error(function (data, status) {
            alert("XHR Error " + status);
        });

    }]);

    app.controller('AboutController', function () {
        this.email = "contact@cyrilvincent.com";
        this.web = "www.cyrilvincent.com";
    });

})();

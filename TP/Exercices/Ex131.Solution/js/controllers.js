(function () {
    var app = angular.module('PhonecatControllers', []);

    app.controller('PhoneController', ['Phone', 'Basket', '$routeParams', function (Phone, Basket, $routeParams) {
        this.phone = {};

        this.setImage = function (imageUrl) {
            this.mainImageUrl = imageUrl;
        }
		
        this.email = "contact@cyrilvincent.com";
        this.postPhone = function (c) {
            alert(c.email + " post the phone " + c.phone.name + " (" + c.phone.id + ")\nIl ne reste qu'à poster le c.phone sur le serveur");
        }

		var c = this;
        Phone.get({phoneId: $routeParams.phoneId}).$promise.then(
			function(p) {
				c.phone = p;
				c.mainImageUrl = p.images[0];
			},
			function(reason) {
				alert("Phone error: "+reason);
			}
		);
		
		this.addToBasket = function (phone) {
			Basket.add(phone);
			alert(Basket.count());
        }

    }]);

    app.controller('PhoneListController', ['Phone', function (Phone) {
        this.Phones = {};
		this.phones = Phone.query();
        this.orderProp = 'age';
        this.query = '';
    }]);

    app.controller('AboutController', ['Counter', function (Counter) {
        this.email = "contact@cyrilvincent.com";
        this.web = "www.cyrilvincent.com";
		Counter.count();
		this.count = Counter.getCount();
	}]);

})();

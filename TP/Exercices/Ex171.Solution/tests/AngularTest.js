describe('FirstTest', function(){
  it('1 + 1', function() {
    var i = 1 + 1;
    expect(i).toBe(2);
  });
});

describe('AboutController', function(){
	beforeEach(module('PhonecatControllers'));
	var c;
	beforeEach(inject(function ($controller) {
		c = $controller('AboutController');
	}));
	it('AboutController', function() {
		expect(c.email).toBe('contact@cyrilvincent2.com');
	});
});



describe('PhoneListController', function(){
	beforeEach(module('PhonecatControllers'));
	var c;
	var $http;
	beforeEach(inject(function ($controller, $httpBackend) {
		c = $controller('PhoneListController');
		$http = $httpBackend;
		$http.when('GET', 'phones/phones.json').respond(200,phonesDB);
	}));
	it('PhoneListController', function() {
		expect(c.orderProp).toBe('age');
		$http.flush();
		expect(c.phones.length).toBe(2);
	});
});

var phonesDB = [
    {
        "age": 0,
        "id": "motorola-xoom-with-wi-fi",
        "imageUrl": "img/phones/motorola-xoom-with-wi-fi.0.jpg",
        "name": "Motorola XOOM\u2122 with Wi-Fi",
        "snippet": "The Next, Next Generation\r\n\r\nExperience the future with Motorola XOOM with Wi-Fi, the world's first tablet powered by Android 3.0 (Honeycomb)."
    },
    {
        "age": 1,
        "id": "motorola-xoom",
        "imageUrl": "img/phones/motorola-xoom.0.jpg",
        "name": "MOTOROLA XOOM\u2122",
        "snippet": "The Next, Next Generation\n\nExperience the future with MOTOROLA XOOM, the world's first tablet powered by Android 3.0 (Honeycomb)."
    }
];



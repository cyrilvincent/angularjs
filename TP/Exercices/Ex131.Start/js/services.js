var phonecatServices = angular.module('PhonecatServices', ['ngResource']);

phonecatServices.factory('Counter', function() {
	var s = {};              
	var i = 0;
             
	s.count = function() {
		i++;
	};
	
	s.getCount = function() {
		return i;
	}
                    
    return s;
});

phonecatServices.value('User', {
	user: {
		firstname: 'Cyril',
		lastname: 'Vincent',
    },
	role: 'admin'
});

var basket = function() {
	this.phones = [];
	
	this.add = function(p) {
		this.phones.push(p);
	}
	
	this.count = function() {
		return this.phones.length;
	}
}




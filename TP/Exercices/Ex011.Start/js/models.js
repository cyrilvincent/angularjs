var phone = function() {
	this.age=0;
	this.name='';
	this.id='';
	this.imageUrl = '';
	this.snippet = '';
}

var basket = function() {
	this.phones = [];
	
	this.add = function(p) {
		this.phones.push(p);
	}
	
	this.length = function() {
		return this.phones.length;
	}
}
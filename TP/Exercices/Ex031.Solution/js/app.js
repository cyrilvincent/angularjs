(function(){
    var app = angular.module('PhonecatApp', []);

    app.controller('PhoneController', function() {
        this.phone = nexus;
    });

})();

var nexus = {
    "id": "nexus-s",
    "name": "Nexus S",
    "snippet": "Fast just got faster with Nexus S. A pure Google experience, Nexus S is the first phone to run Gingerbread (Android 2.3), the fastest version of Android yet."
}
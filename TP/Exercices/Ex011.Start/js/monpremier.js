(function() {
   var counter = 1;
   that = this;
   document.getElementById('button1').onclick = function() {
      console.log("counter = " + counter);
      console.log("this = " + this);
      console.log("that = " + that);
   }
   counter++;
})();

var toto;


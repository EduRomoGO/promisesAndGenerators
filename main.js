'use strict';

var escribeTras2Segundos = function(callback) {
	setTimeout(function() {
		console.log('llamando a callback');
		callback();
	}, 2000)
};

escribeTras2Segundos(function(){
	escribeTras2Segundos(function(){

	});
});

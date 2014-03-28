var op = require('openport'),
 http = require('http'),
 moment = require('moment');

var getPortAsync = function(callback) {
	 
  	// find an open port
	op.find(function(err, port) {
	  	if(err) { 
	  		callback(-1); 
	  		console.log(err); 
	  		return; 
	  	}

	  	// yea! we have an open port.
  		callback(port);
  	});
}

console.log('[' + moment().format() + '] about to get port');

getPortAsync(function(response) {
		console.log('[' + moment().format() + '] Async is cool! Port: ', response);
	}, function(error) {
		console.error('[' + moment().format() + '] Failed!', error);
});

console.log('[' + moment().format() + '] after call to get port');

		

 
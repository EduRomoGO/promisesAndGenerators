'use strict';

console.log('starting app');

function wait(millis, n, callback) {
	setTimeout(function() {
		if (n % 2 !== 0) {
			callback(new Error('fail'));
			return;
		}
		callback(null, {id: n});
	}, millis);
}

// wait(1000, 0, function(err, data) {
// 	console.log(err, data);
// });


function run(generator) {
	let iterator = generator(function() {
		iterator.next(Array.from(arguments));
	});
	iterator.next();
}

run(function*(follow) {
	let res = yield wait(1000, 0, follow);
	console.log(res);
	res = yield wait(1000, 0, follow);
	console.log(res);
});
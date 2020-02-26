// Example 1
// What is a Closure
function relationshipWithRoss(person) {
	relationship = true
	console.log(`${person} in relationship with Ross!`)
	return function change(status) {
		relationship = status;
		console.log(`${person} changed the relationship to ${relationship}`);
	}
}

let rachelWithRoss = relationshipWithRoss('Rachel')
rachelWithRoss(false);

// Example 2
// Scope
let global = 'AfterAcademy';

function call() {
	let local = 'local';

	function inner() {
		let innerVar = 'Inner';
		console.log(global);
		console.log(local);
	}
	// console.log(innerVar);
	inner();
}
call();

// console.log(local);

// Example 3
// Problem
for (var i = 0; i < 3; i++) {
	setTimeout(function () { console.log(i); }, 1000 + i);
}

// Solution
function createLog(value) {
	return function () { console.log(value); }
}

for (var i = 0; i < 3; i++) {
	setTimeout(createLog(i), 1000 + i);
}

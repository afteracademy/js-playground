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

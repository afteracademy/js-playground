(function () {
	const exLog = console.log;
	console.log = function () {
		exLog.apply(console, arguments);
		if (arguments) {
			let output = [];
			Object.values(arguments).forEach(arg => {
				if (typeof arg === 'object') output.push(`<pre>${syntaxHighlight(JSON.stringify(arg, undefined, 4))}</pre>`)
				else output.push(`<p>${String(arg)}</p>`)
			});
			document.getElementById("json").innerHTML = output.join('<br/>');
		}
	}
})()

function isJsonString(str) {
	try {
		var json = JSON.parse(str);
		return (typeof json === 'object');
	} catch (e) {
		return false;
	}
}

function syntaxHighlight(json) {
	json = json.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');
	return json.replace(/("(\\u[a-zA-Z0-9]{4}|\\[^u]|[^\\"])*"(\s*:)?|\b(true|false|null)\b|-?\d+(?:\.\d*)?(?:[eE][+\-]?\d+)?)/g, function (match) {
		var cls = 'number';
		if (/^"/.test(match)) {
			if (/:$/.test(match)) {
				cls = 'key';
			} else {
				cls = 'string';
			}
		} else if (/true|false/.test(match)) {
			cls = 'boolean';
		} else if (/null/.test(match)) {
			cls = 'null';
		}
		return '<span class="' + cls + '">' + match + '</span>';
	});
}
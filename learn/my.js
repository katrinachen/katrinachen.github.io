/**
 * 
 */

var obj
function load() {

	loadJSON(function(response) {
		// Parse JSON string into object
		obj = JSON.parse(response);
		
	});

}

function loadJSON(callback) {
 
	var xobj = new XMLHttpRequest();
	xobj.overrideMimeType("application/json");
	xobj.open('GET', 'data.json', true);
	xobj.onreadystatechange = function() {
		if (xobj.readyState == 4 && xobj.status == "200") {
			callback(xobj.responseText);
		}
	};
	xobj.send(null);
}
function clickme() {
	alert("clickme");
//	alert(obj[0].name);
	var d = document.getElementById("demo");
	d.innerText = obj[0].name;
}
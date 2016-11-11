/**
 * 
 */

var obj
function loadData() {

	loadJSON(function(response) {
		// Parse JSON string into object
		obj = JSON.parse(response);
		
	});

}

function loadJSON(callback) {
 
	var xobj = new XMLHttpRequest();
	xobj.overrideMimeType("application/json");
	xobj.open('GET', 'json/hsk2.json', true);
	xobj.onreadystatechange = function() {
		if (xobj.readyState == 4 && xobj.status == "200") {
			callback(xobj.responseText);
		}
	};
	xobj.send(null);
}
function clickme() {
	//lert("clickme");
//	alert(obj[0].name);
	var d = document.getElementById("demo");
	d.innerText ="爱好 "+obj[2].py+obj[0].ch;
}
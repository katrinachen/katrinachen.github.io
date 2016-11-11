/**
 * 
 */
//
var mydata;
var obj;
var output;
var sliderElement;
var totalWords;
var objJson;
var record=0;
////////////

$(document).ready(function() {
	
	output = $('#spanOutput');
	sliderElement = $('#slider');
	totalWords = $('.totalWords');	
	
	setSlider(); //setting slider two
	
	load();//Loading Json file to objJson.
//	alert(objJson[record].id);//not working.
	alert(objJson[record].ch);
//	alert("kk");
//	fillAllLabel();
	///////Button Click Handler
	$('button').click(function(e) {
		alert(objJson[record].ch);// Working
		// var target = e.target || e.srcElement;
//		$("label[class='id']")	.html(objJson[record].id);
		var className = e.target.getAttribute("class");
		//var x = document.getElementById(className);	
//		
		if (e.target.innerText == "Show") {
			e.target.innerText = "Hide";			
			$("label[class='"+className+"']").show();			
		} else if (e.target.innerText == "Hide") {
			e.target.innerText = "Show";
			$("label[class='"+className+"']").hide();
		} else if (e.target.innerText == "Show All") {
			document.getElementById("showall").disabled = true;
			document.getElementById("clearall").disabled = false;
			$("label[class='id']").show();			

		} else if (e.target.innerText == "Clear All") {
			document.getElementById("showall").disabled = false;
			document.getElementById("clearall").disabled = true;
			$("label[class='id']").hide();
		}
	});
	

	// //////////////////Slider 1 event	
	$("#fader").on("change", function() {		
		$('#volume').html("HSK-" + this.value);
		setSlider();
		output.html('1 ~ 30 words');
		switch (this.value) {
		case "1":
			sliderElement.slider("option", "max", 150);
			totalWords.html("Total:" + 150);
			break;
		case "2":			
			sliderElement.slider("option", "max", 300);
			totalWords.html("Total:" + 300);
			break;
		case "3":
			sliderElement.slider("option", "max", 600);
			totalWords.html("Total:" + 600);
			break;
		case "4":
			sliderElement.slider("option", "max", 1200);
			totalWords.html("Total:" + 1200);
			break;
		case "5":
			sliderElement.slider("option", "max", 2500);
			totalWords.html("Total:" + 2500);
			break;
		case "6":
			sliderElement.slider("option", "max", 2500);
			totalWords.html("Total:" + 2500);
			break;
		}

	});
//	fillAllLabel();
	
	function fillAllLabel(){
//		alert(1);//working
//		alert(objJson[record].id);//not working
//		$("label[class='id']").html("Hello");	//working
//		$("label[class='id']").html(objJson[record].id);//not working
//		$("label[class='ch']").html(objJson[record].ch);
//		$("label[class='py']").html(objJson[record].py);
//		$("label[class='eng']").html(objJson[record].eng);
////		$("label[class='id']").hide();
//		$("label[class='ch']").hide();
//		$("label[class='py']").hide();
//		$("label[class='eng']").hide();
	}
});
//Filling data to label
//function fillAllLabel(){
////	alert(1);//working
////	alert(objJson[record].id);//not working
////	$("label[class='id']").html("Hello");	//working
////	$("label[class='id']").html(objJson[record].id);//not working
////	$("label[class='ch']").html(objJson[record].ch);
////	$("label[class='py']").html(objJson[record].py);
////	$("label[class='eng']").html(objJson[record].eng);
//////	$("label[class='id']").hide();
////	$("label[class='ch']").hide();
////	$("label[class='py']").hide();
////	$("label[class='eng']").hide();
//}

/////////////////////
function setSlider(){		
	sliderElement.slider({
		range : true,
		min : 0,
		max : 150,
		step : 10,
		values : [ 0, 30 ],
		slide : function(event, ui) {
			if(ui.values[0]==ui.values[1]){

				output.html(ui.values[0]+ ' ~ ' + ui.values[1] + ' words');
			}
			else{
			output.html((ui.values[0] +1)+ ' ~ ' + ui.values[1] + ' words');
			}
			$('.words').html(ui.values[1] - ui.values[0]);
		}
	});
}
// ////JASON Function.
function load() {
	
		loadJSON(function(response) {
		// Parse JSON string into object
			
		objJson = JSON.parse(response);		
	});
		
}
function loadJSON(callback) {
	
	var xobj = new XMLHttpRequest();
	xobj.overrideMimeType("application/json");
	xobj.open('GET', 'json/hsk1.json', true);
	xobj.onreadystatechange = function() {
		if (xobj.readyState == 4 && xobj.status == "200") {
			callback(xobj.responseText);
		}
	};
	xobj.send(null);
}

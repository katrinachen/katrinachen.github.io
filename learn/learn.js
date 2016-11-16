
var mydata;
var obj;
var output;
var sliderElement;
var totalWords;
var objJson;
var record = 0;
var min=0;
var max=29;
var file=1;
// //////////

$(document).ready(function() {

	output = $('#spanOutput');
	sliderElement = $('#slider');
	totalWords = $('.totalWords');

	setSlider();

	$("#fader").val("1");

	//Loading Json file to objJson.
	$.getJSON('json/hsk1.json', function (json) {
		objJson = json;
		fillAllLabel();
		$("#previous").prop("disabled",true);
		hideText();
	});

	// /////Button Click Handler

	$('button').click(function(e) {
		var className = e.target.getAttribute("class");
		if (e.target.innerText == "Show") {
			e.target.innerText = "Hide";
			$("label[id='" + className + "']").show();
		} else if (e.target.innerText == "Hide") {
			e.target.innerText = "Show";
			$("label[id='" + className + "']").hide();
		} else if (e.target.innerText == "Show All") {
			showText();
		} else if (e.target.innerText == "Clear All") {
			hideText();
		}else if (e.target.innerText == "Previous") {
			$("#next").prop("disabled",false);
			record-=1;
			if(record==min){
				$("#previous").prop("disabled",true);
			}
			fillAllLabel();
			$(".sn").html(record+1);
			hideText();

		}else if (e.target.innerText == "Next") {
			$("#previous").prop("disabled",false);
			record+=1;
			if(record==max-1){
				$("#next").prop("disabled",true);
			}
			fillAllLabel();
			$(".sn").html(record+1);
			hideText();
		}
	});

	// //////////////////Slider 1 event
	$("#fader").on("change", function() {		
		setSlider();
		output.html('1 ~ 30 words');
		switch (this.value) {
		case "1":
			file="1";
			sliderElement.slider("option", "min", 0);
			sliderElement.slider("option", "max", 150);
			totalWords.html("Total:" + 150);
			break;
		case "2":
			file="2";
			sliderElement.slider("option", "min", 0);
			sliderElement.slider("option", "max", 300);
			totalWords.html("Total:" + 300);
			break;
		case "3":
			file="3";
			sliderElement.slider("option", "min", 0);
			sliderElement.slider("option", "max", 600);
			totalWords.html("Total:" + 600);
			break;
		case "4":
			file="4";
			sliderElement.slider("option", "min", 0);
			sliderElement.slider("option", "max", 1200);
			totalWords.html("Total:" + 1200);
			break;
		case "5":
			file="5-1";
			sliderElement.slider("option", "min", 0);
			sliderElement.slider("option", "max", 1250);
			totalWords.html("Total:" + 1250);
			break;
		case "6":
			file="5-2";
			sliderElement.slider("option", "min", 1250);
			sliderElement.slider("option", "max", 2500);			
			totalWords.html("Total:" + 1250);
			break;
		case "7":
			file="6-1";		
			sliderElement.slider("option", "min", 0);
			sliderElement.slider("option", "max", 1250);
			totalWords.html("Total:" + 1250);
			break;
		case "8":
			file="6-2";
			sliderElement.slider("option", "min", 1250);
			sliderElement.slider("option", "max", 2560);
			totalWords.html("Total:" + 1260);
			break;
		}
		//alert("File "+file);
		$('#volume').html("HSK" + file);
		$.getJSON('json/hsk' + file + '.json', function (json) {	
//			alert(1);
			objJson = json;
			record=0;
			fillAllLabel();
			$("#previous").prop("disabled",true);
			hideText();			
		});
	});

});
function hideText(){
	$("#showall").prop("disabled",false);
	$("#clearall").prop("disabled",true);
	$(".body label").hide();
	$(".body button").html("Show");
}
function showText(){
	$("#showall").prop("disabled",true);
	$("#clearall").prop("disabled",false);
	$(".body label").show();
	$(".body button").html("Hide");
}
// Filling data to label
function fillAllLabel() {
//	alert(objJson[record].id);
	$(".sn").html(objJson[record].id);
	$("#ch").html(objJson[record].ch);
	$("#py").html(objJson[record].py);
	$("#eng").html(objJson[record].eng);
	$(".body label").hide();
}

// ///////////////////
function setSlider() {
	sliderElement.slider({
		range : true,
		min : 0,
		max : 150,
		step : 10,
		values : [ 0, 30 ],
		slide : function(event, ui) {
			if (ui.values[0] == ui.values[1]) {

				output.html(ui.values[0] + ' ~ ' + ui.values[1] + ' words');
			} else {
				output.html((ui.values[0] + 1) + ' ~ ' + ui.values[1]
						+ ' words');
			}
			min=ui.values[0];
			max=ui.values[1];
			record=min;
			fillAllLabel();
			hideText();
			
//			if(min==0)
			$("#previous").prop("disabled",true);
		}
	});
}



//////////////////////////////////////////////////////
//var mydata;
//var obj;
//var output;
//var sliderElement;
//var totalWords;
//var objJson;
//var record = 0;
//var min=0;
//var max=29;
//var file=1;
//// //////////
//
//$(document).ready(function() {
//
//	output = $('#spanOutput');
//	sliderElement = $('#slider');
//	totalWords = $('.totalWords');
//
//	setSlider(); 
//	//Loading Json file to objJson.
//	load(function() {			
//		fillAllLabel();
//		$("#previous").prop("disabled",true);
//		hideText();
//	});
//
//	// /////Button Click Handler
//
//	$('button').click(function(e) {
//		var className = e.target.getAttribute("class");
//		if (e.target.innerText == "Show") {
//			e.target.innerText = "Hide";
//			$("label[id='" + className + "']").show();
//		} else if (e.target.innerText == "Hide") {
//			e.target.innerText = "Show";
//			$("label[id='" + className + "']").hide();
//		} else if (e.target.innerText == "Show All") {
//			showText();			
//		} else if (e.target.innerText == "Clear All") {			
//			hideText();
//		}else if (e.target.innerText == "Previous") {	
//			$("#next").prop("disabled",false);
//			record-=1;
//			if(record==min){				
//				$("#previous").prop("disabled",true);				
//			}		
//			fillAllLabel();
//			$(".sn").html(record+1);
//			hideText();
//			
//		}else if (e.target.innerText == "Next") {	
//			$("#previous").prop("disabled",false);
//			record+=1;
//			if(record==max-1){				
//				$("#next").prop("disabled",true);
//			}
//			fillAllLabel();
//			$(".sn").html(record+1);
//			hideText();
//		}		
//	});
//
//	// //////////////////Slider 1 event
//	$("#fader").on("change", function() {
//		$('#volume').html("HSK-" + this.value);
//		setSlider();
//		output.html('1 ~ 30 words');
//		switch (this.value) {
//		case "1":
//			file=1;
//			sliderElement.slider("option", "max", 150);
//			totalWords.html("Total:" + 150);
//			break;
//		case "2":
//			file=2;
//			sliderElement.slider("option", "max", 300);
//			totalWords.html("Total:" + 300);
//			break;
//		case "3":
//			file=3;
//			sliderElement.slider("option", "max", 600);
//			totalWords.html("Total:" + 600);
//			break;
//		case "4":
//			file=4;
//			sliderElement.slider("option", "max", 1200);
//			totalWords.html("Total:" + 1200);
//			break;
//		case "5":
//			file=5;
//			sliderElement.slider("option", "max", 2500);
//			totalWords.html("Total:" + 2500);
//			break;
//		case "6":
//			file=6;
//			sliderElement.slider("option", "max", 2500);
//			totalWords.html("Total:" + 2500);
//			break;
//		}
//		//alert("File "+file);
//
//	});
//	
//});
//function hideText(){
//	$("#showall").prop("disabled",false);
//	$("#clearall").prop("disabled",true);
//	$(".body label").hide();
//	$(".body button").html("Show");
//}
//function showText(){
//	$("#showall").prop("disabled",true);
//	$("#clearall").prop("disabled",false);
//	$(".body label").show();
//	$(".body button").html("Hide");
//}
//// Filling data to label
//function fillAllLabel() {
//	$("label[id='id']").html(objJson[record].id);
//	$("label[id='ch']").html(objJson[record].ch);
//	$("label[id='py']").html(objJson[record].py);
//	$("label[id='eng']").html(objJson[record].eng);
//	$(".body label").hide();
//}
//
//// ///////////////////
//function setSlider() {
//	sliderElement.slider({
//		range : true,
//		min : 0,
//		max : 150,
//		step : 10,
//		values : [ 0, 30 ],
//		slide : function(event, ui) {
//			if (ui.values[0] == ui.values[1]) {
//
//				output.html(ui.values[0] + ' ~ ' + ui.values[1] + ' words');
//			} else {
//				output.html((ui.values[0] + 1) + ' ~ ' + ui.values[1]
//						+ ' words');
//			}			
//			min=ui.values[0];
//			max=ui.values[1];
//			record=min;	
//			fillAllLabel();
//			hideText();
//			$(".sn").html(record+1);
////			if(min==0)
//			$("#previous").prop("disabled",true);			
//		}
//	});
//}
//// ////JASON Function.
//function load(callback) {
//
//	loadJSON(function(response) {
//		// Parse JSON string into object
//		objJson = JSON.parse(response);
//		callback();
//	});
//
//}
//function loadJSON(callback) {
//	var xobj = new XMLHttpRequest();
//	xobj.overrideMimeType("application/json");
////	xobj.open('GET', 'json/hsk1.json', true);
//	xobj.open('GET', 'json/hsk'+file+'.json', true);
//	xobj.onreadystatechange = function() {
//		if (xobj.readyState == 4 && xobj.status == "200") {
//			callback(xobj.responseText);
//		}
//	};
//	xobj.send(null);
//}


/**
 * 
 */
//
var mydata;
 $(document).ready(function() {
//	 mydata=5;
//	 alert(mydata);
	 //button events
        $('button').click(function(e) { 
//        	var target = e.target || e.srcElement;
        	var className=e.target.getAttribute("class");
    		var x=document.getElementById(className);
        	//turn show to hide and vice versa
        	
        	if(e.target.innerText=="Show"){
        		e.target.innerText="Hide";
        		x.innerText = "b";
        		        		
        	}else if(e.target.innerText=="Hide"){
        		e.target.innerText="Show";
        		x.innerText="";        		
        	}else if(e.target.innerText=="Show All"){        		
        		document.getElementById("showall").disabled = true;
        		document.getElementById("clearall").disabled = false;
        		
        		
        	}else if(e.target.innerText=="Clear All"){
        		document.getElementById("showall").disabled = false;
        		document.getElementById("clearall").disabled = true;
        		
        	}
        		
//        	alert(e.target.getAttribute("class"));
//           alert(e.target.innerText);
           // return false;
        });
        ////////////////////Slider 1 event
        var output=$('#spanOutput');
        var sliderElement=$('#slider');
        var totalWords=$('.totalWords');
        $("#fader").on("change", function(){
        	$('#volume').html("HSK-"+this.value);
        	switch(this.value){
        	case "1":
        		sliderElement.slider("option", "max", 150);
        		totalWords.html("Total:"+150);
        		break;
        	case "2":
        		sliderElement.slider("option", "max", 300);
        		totalWords.html("Total:"+300);
        		break;
        	case "3":
        		sliderElement.slider("option", "max", 600);
        		totalWords.html("Total:"+600);
        		break;
        	case "4":
        		sliderElement.slider("option", "max", 1200);
        		totalWords.html("Total:"+1200);
        		break;
        	case "5":
        		sliderElement.slider("option", "max", 2500);
        		totalWords.html("Total:"+2500);
        		break;
        	case "6":
        		sliderElement.slider("option", "max", 2500);
        		totalWords.html("Total:"+2500);
        		break;        	
        	}
        	
        	
        	
        });
//		////////slider2 event
        
    	sliderElement.slider({
    		range:true,
    		min:0,
    		max:150,
    		step:10,
    		values:[1,20],
    		slide:function(event,ui){
    			output.html(ui.values[0]+' ~ '+ui.values[1]+' words');
    			$('.words').html(ui.values[1]-ui.values[0]);
    		}
    	});
    	
    });
// function update(vol) {
//		document.querySelector('#volume').value = "HSK-"+vol;
//	}
//$(document).ready(function(){
// alert("This is Hello World by JQuery");
//});

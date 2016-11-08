/**
 * 
 */
//
var mydata;
 $(document).ready(function() {
//	 mydata=5;
//	 alert(mydata);
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
    });
 function update(vol) {
		document.querySelector('#volume').value = "HSK-"+vol;
	}
//$(document).ready(function(){
// alert("This is Hello World by JQuery");
//});

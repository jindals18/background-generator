var h3=document.querySelector("h3");
var color1=document.querySelector(".color1");
var color2=document.querySelector(".color2");
var body=document.getElementsByTagName("body")[0];
var button=document.getElementsByTagName("button")[0];
var input=document.querySelectorAll("input");
var flag=0;
//background:linear-gradient(to right, rgb(235, 54, 228), rgb(229, 83, 27));

function setGradient(){
	body.style.background=
	"linear-gradient(to right,"
	+color1.value
	+","
	+color2.value
	+")";
	h3.textContent="background:"+body.style.background+";";
	flag===1;
}

function random(){
	for(j=0;j<2;j++){
		var letters = "0123456789ABCDEF"; 
	    var color = '#'; 
	    for (var i = 0; i < 6; i++) {
	       color += letters[(Math.floor(Math.random()*16))]; 
	    }
	    input[j].value=color;
	}
	flag===1;
}

if(flag===0){
	h3.textContent="background:linear-gradient(to right, rgb(0, 255, 0), rgb(255, 0, 0));";
}

color1.addEventListener("input",setGradient);
	
color2.addEventListener("input",setGradient);

button.addEventListener("click",random);

button.addEventListener("click",setGradient);
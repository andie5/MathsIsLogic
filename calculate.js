//Mathematical functions
var number1;
var number2;
var maxNum = 10;
var maxTries = 5;
var count = 0;

function generateNumbers(){	
	number1 = Math.ceil(Math.random()*maxNum);
	number2 = Math.ceil(Math.random()*maxNum);
	
	document.getElementById("number1_sum").innerHTML = number1;
	document.getElementById("number2_sum").innerHTML = number2;
	
	document.getElementById("number1").innerHTML = number1;
	document.getElementById("number2").innerHTML = number2;
};

/**CustomAlert ={
	render:
	
}*/
	

function CustomAlert(){
    this.render = function(dialog){
        var winW = window.innerWidth;
        var winH = window.innerHeight;
        var dialogoverlay = document.getElementById('dialogoverlay');
        var dialogbox = document.getElementById('dialogbox');
        dialogoverlay.style.display = "block";
        dialogoverlay.style.height = winH+"px";
        dialogbox.style.left = (winW/2) - (550 * .5)+"px";
        dialogbox.style.top = "100px";
        dialogbox.style.display = "block";
        document.getElementById('dialogboxhead').innerHTML = "Acknowledge This Message";
        document.getElementById('dialogboxbody').innerHTML = dialog;
        document.getElementById('dialogboxfoot').innerHTML = '<button onclick="Alert.ok()">OK</button>';
    }
	this.ok = function(){
		document.getElementById('dialogbox').style.display = "none";
		document.getElementById('dialogoverlay').style.display = "none";
	}
}
var Alert = new CustomAlert();

function add(){
	var answer = document.getElementById("submitAns");
	var correctAns = number1 + number2;
	answer.onclick =  function() {
		var userAns = document.getElementById("answer").value;
		//console.log("This is the user's answer "+userAns);
		//console.log("This is the real answer "+correctAns);
		//console.log(parseInt(userAns));
		
		if (count < maxTries) {
		if(userAns == ""){
			alert("Please enter an answer");
		}
		else if(isNaN(parseInt(userAns))){
			alert("Please enter a number");
		}
		else if (parseInt(userAns) != correctAns)
		{	
			count++;
			alert("That is the incorrect answer");
		}
		else if (parseInt(userAns) == correctAns)
		{			
			alert("That is the correct answer");
			 document.getElementById("answer").value = "";
			 generateNumbers();
			 add();
		}
	}
	else {
		alert("The correct answer is "+correctAns);
	}
	}
}

/* Can have an onsubmit event handler if the user clicks enter for the answer to be submitted
/**
function minus(){
	var number1 = Math.Random*maxNum;
	var number2 = Math.Random*maxNum;
	// To make the subtraction easier, we want the first number to be bigger than the second.
	if (number1 < number2){
		var tempNum = number1;
		number1 = number2;
		number2 = tempNum;	
	}	
	number1 - number2;
};

function multiply(){
	var number1 = Math.Random*maxNum;
	var number2 = Math.Random*maxNum;
	number1 * number2;
};

function divide(){
	var number1 = Math.Random*maxNum;
	var number2 = Math.Random*maxNum;
	
	// To make the division easier, we want the first number to be bigger than the second.
	if (number1 < number2){
		var tempNum = number1;
		number1 = number2;
		number2 = tempNum;	
	}	
};*/

window.onload = function(){
	generateNumbers();
	add();
};


/* Clear a textbox
 function tryAgain() {
	             document.getElementById("txtField").value = "";
		     outPut.innerHTML = "";
		     document.getElementById("tryAgainBtn").style.display = "none";
		     randomNumber = Math.floor(Math.random()*1000);
		}*/
		
		/*Another way to start the function
		
		 function myFunction() {
	         randomNumber = Math.floor(Math.random()*1000);
		 document.getElementById("checkBtn").onclick = checkAnswer;
		 document.getElementById("tryAgainBtn").onclick = tryAgain;
	     }
			*/
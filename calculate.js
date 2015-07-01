//Mathematical functions
var number1;
var number2;
var maxNum = 10;
var maxTries = 5;
var count = 0;

function generateNumbers(){	
	number1 = Math.ceil(Math.random()*maxNum);
	number2 = Math.ceil(Math.random()*maxNum);	
}

function setPageNumbers(operator){
	
	document.getElementById("number1_sum").innerHTML = number1;
	document.getElementById("number2_sum").innerHTML = number2;
	document.getElementById("operator").innerHTML = operator;
	
	document.getElementById("number1").innerHTML = number1;
	document.getElementById("number2").innerHTML = number2;
};

function add(){
	setPageNumbers("+");
	
	var answer = document.getElementById("submitAns");
	var correctAns = number1 + number2;
	answer.onclick =  function() {
		var userAns = document.getElementById("answer").value;		
		checkUserAnswer("add", userAns, correctAns);
		
	}
}

//Validation checks on the user's answer
function checkUserAnswer(type, userAns, correctAns){
	if (count < maxTries) {
		if(userAns === ""){
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
		else if (parseInt(userAns) === correctAns)
		{			
			alert("That is the correct answer");
			 document.getElementById("answer").value = "";
			 generateNumbers();
			 
			 if(type ==="add") {
				 add();
			 }
			 else if(type ==="minus") {
				 minus();
			 }
			 
		}
	}
	else {
		alert("The correct answer is "+correctAns);
	}
}


// Can have an onsubmit event handler if the user clicks enter for the answer to be submitted

function minus(){
	// To make the subtraction easier, we want the first number to be bigger than the second.
	if (number1 < number2){
		var tempNum = number1;
		number1 = number2;
		number2 = tempNum;	
	}	
	setPageNumbers("-");
	
	var answer = document.getElementById("submitAns");
	answer.onclick =  function() {
		
		var userAns = document.getElementById("answer").value;
		var correctAns = number1 - number2;
	
		checkUserAnswer("minus", userAns, correctAns);
		
	}
	
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
};
	generateNumbers();

window.onload = function(){
	//generateNumbers();
	//add();
	//minus();
};

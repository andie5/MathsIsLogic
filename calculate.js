//Mathematical functions
var number1;
var number2;
var maxNum = 10;
var maxTries = 5;
var count = 0;


// Generate the random numbers and store them
function generateNumbers(){
	number1 = Math.ceil(Math.random()*maxNum);
	number2 = Math.ceil(Math.random()*maxNum);
}

//Display the random numbers generated
function setPageNumbers(operator){
	document.getElementById("number1_sum").innerHTML = number1;
	document.getElementById("number2_sum").innerHTML = number2;
	document.getElementById("operator").innerHTML = operator;

	document.getElementById("number1").innerHTML = number1;
	document.getElementById("number2").innerHTML = number2;
};

/**Calculate the sum of the 2 random numbers that are generated
1- Display the page numbers randomly generated
2- Create a handle on the submit answer button
3- Do the calculation, then call the function to check the user's answer*/
function add(){
	setPageNumbers("+");

	var answer = document.getElementById("submitAns");
	var correctAns = number1 + number2;
	answer.onclick =  function() {
		var userAns = document.getElementById("answer").value;
		checkUserAnswer("add", userAns, correctAns);

	}
}

/**Calculate the subtraction of the 2 random numbers that are generated
1- Display the page numbers randomly generated
2- Create a handle on the submit answer button
3- Do the calculation, then call the function to check the user's answer*/
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


/**Calculate the sum of the 2 random numbers that are generated
1- Display the page numbers randomly generated
2- Create a handle on the submit answer button
3- Do the calculation, then call the function to check the user's answer*/
function multiply(){
	setPageNumbers("*");

	var answer = document.getElementById("submitAns");
	answer.onclick =  function() {

	var userAns = document.getElementById("answer").value;
	var correctAns = number1 * number2;

	checkUserAnswer("multiply", userAns, correctAns);
	}
};


/**Calculate the division calculation of the 2 random numbers that are generated
1- Display the page numbers randomly generated
2- Create a handle on the submit answer button
3- Do the calculation, then call the function to check the user's answer*/
function divide(){
	// To make the division easier, we want the first number to be bigger than the second.
	if (number1 < number2){
		var tempNum = number1;
		number1 = number2;
		number2 = tempNum;
	}
	setPageNumbers("/");

	var answer = document.getElementById("submitAns");
	answer.onclick =  function() {

	var userAns = document.getElementById("answer").value;
	var correctAns = number1 / number2;

	checkUserAnswer("divide", userAns, correctAns);
	}
};

/*Validation checks on the user's answer
Check what calculation/operator we are dealing with - if the answer the user
has entered is correct, recall the function to reset the page and random numbers
generated*/
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
			 else if(type ==="multiply") {
				 multiply();
			 }
			 else {
				 divide();
			 }
		}
	}
	else {
		alert("The correct answer is "+correctAns);
	}
}


// Call the generate the random numbers as soon as the page is open
generateNumbers();

window.onload = function(){
};

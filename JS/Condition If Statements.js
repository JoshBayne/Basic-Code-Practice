// if statements can only be true of false
 /* if (condition is true) {
	statement is executed
} */

//example
function test (myCondition) { //Names the function and the argument
	if (myCondition) { //sets the conditional if statement
		return "It was true."; //if the value is true then this is output
	}

	return "It was false."; //if the value is false then this is what is output
}
test(true); //returns "It was true."
test(false); //returns "It was false."

/* When the test function is called wuth the value of true, the if statement evaluates myCondition to see if its true or not
Since it is in fact true, the function returns as much. When we call with the value of false, myCondition is 
evaluated as not true and the statement in the {} is not executed, and returns that it was false.
*/

function trueOrFalse (wasThatTrue) {
	if (wasThatTrue) {
		return "Yes, that was true";
	}
	return "No, that was false";
}

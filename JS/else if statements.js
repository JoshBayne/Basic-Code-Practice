/* When a condition for an If statement is true, the conde is executed. But what if the condition is false? Normally the code would not execute. With and else statement though, an alternate chunk of code would be executed. */
//example
if (num > 10) {
	return "Bigger than 10";
} else {
	return "10 or Less";
}

//example function code
function testElse (val) {
	var result = "";

	if (val > 5) {
		result = "Bigger than 5";
	} else {
		result = "5 or Smaller";
	}
	return result;
}

testElse(4); //5 or Smaller
testElse(15); //Bigger than 5

/* If you have multiple conditions that need to be addressed, you can chain if statements together with else if statements. */

//example code
if (num > 15) {
	return "Bigger than 15";
} else if (num < 5) {
	return "Smaller than 5";
} else {
	return "Between 5 and 15";
}

//example funciton
function testElseIf(val){
	if (val > 10) {
		return "Greater than 10";
	} else if (val < 5) {
		return "Smaller than 5";
	} else {
		return "Between 5 and 10";
	}
}

testElseIf(7);//Between 5 and 10


/* Order is important in if and else if statements
The loop is executed from top to bottom so you will want to be careful of what comes first. Take these two code snippets as examples.

first:

function foo(x) {
	if (x < 1){
		return "Less than One";
	} else if (x < 2) {
		return "Less than two";
	} else {
		return "Greater than or equal to two";
	}
}

and the second switches the order of these statements
second:

function bar(x) {
	if (x < 2) {
		return "Less than two";
	} else if (x < 1) {
		return "Less than one";
	} else {
		return "Greater than or equal to two";
	}
}

While the two functions look nearly identicle, if we pass a number to both we geet different outouts.
foo(0); //"Less than one"
bar(0); //"Less than two"
*/
//example code
function orderMyLogic(val){
	if (val < 5) {
		return "Less than 5";
	} else if (val < 10) {
		return "Less than 10";
	} else {
		return "Greater than or equal to 10";
	}
}

orderMyLogic(7);//Less than 10
orderMyLogic(15);//Greater than or equal to 10


/* if/else statements can be chained together for complex logic. Here is pseudocode opf multiple chained if/else if statements.

if (condition1) {
	statement1
} else if (condition2) {
	statement2
} else if (condition3) {
	statement3
...
} else {
	statementN
} */

//example code
function testSize(num){
	if (num < 5){
		return "Tiny";
	} else if (num < 10) {
		return "Small";
	} else if (num < 15) {
		return "Medium";
	} else if (num < 20) {
		return "Large";
	} else {
		return "Huge";
	}
}

testSize(7); //Tiny
testSize(20); //Huge
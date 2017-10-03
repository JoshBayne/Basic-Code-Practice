/* Javascript has several comparison operators, all of which are boolean (true or false)

the most basic is the == operator. This compares two values and checks if they are equal. If equal it will 
return true, if unequal it will return false. Note the two equal signs, = will asign value to an item on the
left side of the sign with the input at the right. */

function equalityTest (myVal) { //we set the function name and arguments
	if (myVal == 10) { //the condition of if myVal input is equal to 10
		return "Equal"; //we return Equal
	}
	return "Not Equal"; //if not equal to 10 then we return Not Equal
}
 /* For Javascript to compare two different data types, like strings and numbers, it has to convert one type
 to the other. Once done however, it can compare like so... */
 1 == 1 //True
 1 == 2 //False
 1 == '1' //True
 "3" == 3 //True

 //Example code

 function testEqual (val){
 	if (val == 12) {
 		return "Equal";
 	}
 	return "Not Equal"
 }

testEqual(12); //Equal
testEqual("12"); //Equal
testEqual(10); //Not Equal

/* Strict Equality === is the counterpart to the == equality operator. Unlike equality (==), strict equality (===)
tests both the value and the data type. So... */
3 === 3 //True
3 === '3' //False
/* in the second example, 3 is a number and '3' is a string, so they are not strictly equal */

//Example code
function testStrict (val) {
	if (val === 7) {
		return "Equal";
	}
	return "Not Equal";
}


/* The inequality operator (!=) is the opposite of the equality operator (==). It means Not Equal and returns
False when two items are equal and vice versa. Like ==, != will convert data types. So...*/
1 != 2 //True
1 != "1" //False
1 != '1' //False
1 != true //false
0 != false //false

//example code
function testNotEqual (val) {
	if (val != 99) {
		return "Not Equal";
	}
	return "Equal"
}

testNotEqual(10); //True
testNotEqual(99); //False
testNotEqual('99');//False

/* the Strict Inequality (!==) operator is the opposite of the strict equality (===) operator, It means Strictly not equal and returns false when equality would return true. Like ===, !== will not convert data types. */
3 !== 3 //False
3 !== '3' //True
4 !== 3 //True

//Example Code
function testStrictNotEqual (val){
	if (val !==17) {
		return "Not Equal";
	}
	return "Equal";
}

testStrictNotEqual(10); //Not Equal
testStrictNotEqual(17) //Equal

/* the greater than > operator compares the values of two numbers. If the number to the left is larger than the number to the right, it returns true, otherwise it will return false */
//examples
5 > 3 //true
7 > '3' //true
2 > 3 //false
'1' > 9 //false

//example code
function testGreaterThan (val){
	if (val > 100) {
		return "Over 100";
	}

	if (val > 10){
		return "Over 10";
	}

	return "10 or Under";
}

testGreaterThan(10); //"10 or Under"
testGreaterThan(99); //"Over 10"
testGreaterThan(101); //"Over 100"

/* The greater than or equal to operator >= compares the values of two numbers. If the number to the left is greater than or equal to the number on the right, it returns true. Otherwise it will return false. */
//examples
6 >= 6 //true
7 >= '3' //true
2 >= 3 //false
'7' >= 9 //false

//example code
 function testGreaterOrEqual (val) {
 	if (val >= 20) {
 		return "20 or Over";
 	}

 	if (val >= 10) {
 		return "10 or Over";
 	}

 	return "9 or Under";
 }

 testGreaterOrEqual(10); //"10 or Over"
 testGreaterOrEqual(100); //"20 or Over"

 /* the less than operator < compares the values of two numbers. If the number to the left is smaller in value than the number to the right, it returns true. Otherwise it returns false */
 //examples
 2 < 5 //true
 '3' < 7 //true
 5 < 5 //false
 3 < 2 //false
 '8' < 4 //false

 //example code
 function testLessThan (val) {
 	if (val < 25) {
 		return "Under 25";
 	}

 	if (val < 55) {
 		return "Under 55";
 	}

 	return "55 and Over";
 }

 testLessThan(10); //"Under 25"
 testLessThan(55); //"55 and Over"

 /* the less than or equal to <= operator compares the value of two numbers. If the number to the left is smaller or equal to the number on the right, then it returns true, otherwise it will return false */
 //examples
 4 <= 5 //true
 '7' <= 7 //true
 5 <= 5 //true
 3 <= 2 //false
 '8' <= 4 //false

 //example code
 function testLessOrEqual (val) {
 	if (val <= 12) {
 		return "Smaller Than or Equal to 12";
 	}

 	if (val <= 24) {
 		return "Smaller Than or Equal to 24";
 	}

 	return "25 or More";
 }

testLessOrEqual(23); //"Smaller Than or Equal to 24"
testLessOrEqual(30); //"25 or More"

/* The logical and operator && returns true if and only if the operands to the left AND right og it are true. The same result can be achieved by nesting one if statement inside another like so

if (num > 5) {
	if (num > 10) {
		return "Yes";
	}
}
return "No";

This function will only return Yes if and only if the num is between 6 and 9. This can be more easily written as...

if (num > 5 && num < 10) {
	return "Yes";
} 
return "No";

*/
//example code
function testLogicalAnd (val) {
	if (val <= 50 && val >= 25) {
		return "Yes";
	}
	return "No";
}

testLogicalAnd(33); //Yes
testLogicalAnd(10); //No

/* The logical or operator || returns true if EITHER of the operands is true. Otherwise it will return false. So instead of writing

if (num > 10) {
	return "No";
}
if (num < 5) {
	return "No";
}
return "Yes";

we can write out...

if (num > 10 || num < 5) {
	return "No";
}
return "Yes";
*/

//example code
function testLogicalOr(val){
	if (val < 10 || val > 20) {
		return "Outside";
	}
	return "Inside"
}

testLogicalOr(0); //Outside
testLogicalOr(19); //Inside
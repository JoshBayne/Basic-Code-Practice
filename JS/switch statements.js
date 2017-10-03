/* If you have many options to choose from, use a swtich statement. A Switch statement tests a vlaue and can have many case statements which defines various possible values. Statements are exectuted from the first matched case value until a break is encountered.

here is a pseudocode example
switch (num) {
	case value1:
		statement1;
		break;
	case value2:
		statement2;
		break;
...
	case valueN:
		statementN;
		break;
}

case values are tested with a strict equality ===. the break tells JavaScript to stop executing statemtents. If the break is omitted, the next statement will be executed. */

//example code
function caseInSwitch(val){
	var answer = "";

	switch (val) {
		case (1):
		answer = "alpha";
		break;

		case(2):
		answer = "beta";
		break;

		case(3):
		answer = "gamma";
		break;

		case(4):
		answer = "delta";
		break;
	}
	return answer;
}

caseInSwitch(1); //alpha

/* In a switch statement you may not be able to specify all possible values as case statements. Instead you can add the default statement which will be executed if no matching case statements are found. Think of it like the final else statement in an if/else chain.
A default statement should be the last case.

switch (num) {
	case value1:
	statement1;
	break;

	case value2:
	statement2;
	break;
...
	default:
	defaultStatement;
} */

//example code
function switchOfStuff(val) {
	var answer = "";

	switch (val){
		case("a"):
		answer = "apple";
		break;

		case("b"):
		answer = "bird";
		break;

		case("c"):
		answer = "cat";
		break;

		default:
		answer = "stuff";
	}

	return answer;
}

switchOfStuff(1); //stuff
switchOfStuff("b");//bird

/* If the break statement is omitted from a switch statements case, the following case statements are executed until a break is encountered. If you have multiple inputs with the same output, you can represent them in a switch statement like this:
sitch(val) {
	case 1:
	case 2:
	case 3:
		result ="1, 2, or 3";
		break;
	case 4:
		result = "4 alone";
}

Cases for 1 2 and 3 will; all produce the smae result.
*/
//example Code
function sequentialSizes(val) {
	var answer = "";
	switch (val) {
		case(1):
		case(2):
		case(3):
			answer = "Low";
			break;
		case(4):
		case(5):
		case(6):
			answer = "Mid";
			break;
		case(7):
		case(8):
		case(9):
			answer = "High";
			break;
	}
	return answer;	
}

sequentialSizes(1);//Low
sequentialSizes(9);//High

/* If you have many options to choose from, a switch statement can be easier to write than many chained if/else statements. The following:
if (val ===1) {
	answer = "a";
} else if (val === 2) {
	answer = "b";
} else {
	answer = "c";
}
can be rewritten as:
switch (val) {
	case 1:
		answer = "a";
		break;
	case 2:
		answer = "b";
		break;
	default:
		answer = "c";
}
*/
//example code
function chainToSwitch(val){
	var answer = "";

switch(val){
	case("bob");
	answer = "Marley";
	break;
	case(42):
	answer = "The Answer";
	break;
	case(1):
	answer = "There is no #1";
	break;
	case(99):
	answer = "Missed me by this much!";
	break;
	case(7):
	answer = "Ate Nine";
	break;
}
return answer;
}
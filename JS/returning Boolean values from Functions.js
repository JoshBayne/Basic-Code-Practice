/* You may recall that all comparison operators return a boolean true or false value.
a common anti-pattern is to use an if/else statement to do a comparison and then return true/false:
function isEqual(a,b) {
	if (a === b) {
	return true;
	} else {
	return false;
	}
}

since === returns true or false, we can return the result of the comparison

function isEqual(a,b) {
	return a === b;
} */
//example
function idLess(a,b){
	return a < b;
}
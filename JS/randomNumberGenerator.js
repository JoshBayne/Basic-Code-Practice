/* Random numbers are useful for creating random behavior. JavaScript has a Math.random() function that generates a random decimal between 0 (inclusive) and not quite up to 1 (exclusive). Thus Math.random() can return a 0 but never quite a full 1 */
function randomFraction () {
	return Math.random();
}

randomFraction; //will generate a random fraction

/*It's great that we can generate random decimal numbers, but it's even more useful if we use it to generte random whole numbers.
	1. Use Math.random() to generate random decimal.
	2. Multiply that random decimal by 20
	3. Use another function Math.floor() to round the number down to it's nearest whole number.
Remember that Math.random() can never quite return a 1 and, because we're rounding down, it's impossible to actully get 20. This technique will give us a whole number between 0 and 19.
Putting it all together, this is what the code looks like: */
Math.floor(Math.random()*20);
/*We are calling Math.random(), multiplying it by 20, then passing the value to Math.floor() function to round the value down to the nearest whole number. */

var randomNumberBetween0and19 = Math.floor(Math.random()*20);
function randomWholeNum() {
	return Math.floor(Math.random()*10);
}
randomWholeNum;//random number between 0 and 9

/*Instead of generating a random number between 0 and a given number like we did before, we can generate a random number that falls within a range of two specific numbers.
To do this, we'll define a minimum number min and a maximum number max.
Here's the formula we'll use.*/
Math.floor(Math.random()*(max-min+1))+min;
//example code
function ourRandomRange(ourMin, OurMax) {
	return Math.floor(Math.random()*(ourMax-ourMin+1))+ourMin;
}
ourRandomRange(1,9);

function randomRange(myMin, myMax) {
	return Math.floor(Math.random()*(myMax-myMin+1))+myMin;
}
var myRandom=randomRange(5,15); //ranom number between 5 and 15
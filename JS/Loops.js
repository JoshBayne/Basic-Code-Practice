/* You can run the same code multiple times by using a loop. The most common type of JavaScript loop is called a "for loop" because it runs "for" a speciofic number of times.
For loops are declared with three optional expressions seperated by semicolons:
for ([initialization]; [condition]; [final-expression])
the initialization statement is executed one time only before the loop starts. it is typically used to define and setup your loop variable.
the condition statement is evaluated at the beginning of every loop iteration and will continue as long as it evaluates to true. When condition is false at the start of the iteration, the loop will stop executing. This means if condition starts as false, your loop will never execute.
the final-expression is executed at the end of each loop iteration, prior to the next condition check and is usually used to increment or decrement you loop counter.
In the following example we initialize with i=0 and iterate while our condition i<5 is true. We'll increment i by 1 in each loop iteration with i++ as our final-expression.
var ourArray = [];
for (var i=0; i<5; i++) {
	ourArray.push(i);
}
ourArray will now contain [0,1,2,3,4]. */
//example
var ourArray = [];

for (var i = 0; i < 5; i++) {
	ourArray.push(i);
}
//ourArray=[0,1,2,3,4]
 var myArray=[];

 for (var i=1; i<6; i++) {
 	myArray.push(i);
 }
//myArray=[1,2,3,4,5]

/*For loops don't have to iterate one at a time. By changing our final-expression, we can count by even numbers.
We'll start at i=0 and loop while i<10. We'll increment i by 2 each loop with i += 2.*/
//example
var ourArray = [];
for (var i=0; i<10; i += 2) {
	ourArray.push(i);
}
//ourArray = [0,2,4,6,8]

var myArray = [];
for (var i=1; i<10; i+=2) {
	myArray.push(i);
}
//myArray = [1,3,5,7,9]

/* A for loop can also count backwards, so long as we can define the right conditions.
In order to count backwards by twos, we;ll need to change our initialization, condition, and final-expression.
We'll start at i=10 and loop while i > 0. We'll decrement i by 2 each loop with i -= 2. */
var ourArray = [];
for (var i=10; i>0; i-=2) {
	ourArray.push(i);
}
//ourArray = [10,8,6,4,2]
var myArray = [];
for (var i=9; i>0; i-=2) {
	myArray.push(i);
}
//myArray= [9,7,5,3,1]

/* A common tast in JavaScript is to iterate through the contents of an array. One way to do that is with a for loop. This code will output each element of the array arr to the console: */
var arr = [10,9,8,7,6];
for (var i=0; i<arr.length; i++) {
	console.log(arr[i]);
}
/* Remember that arrays have zero-based numbering, which means that thelast index of the array is length-1. Our condition for this loop is i<arr.length, which stops whem i is at length-1. */
var ourArr = [9, 10, 11, 12];
var ourTotal = 0;
for (var i=0; i<ourArr.length; i++) {
	ourTotal += ourArr[i];
}
//42
var myArr = [2,3,4,5,6];
var myTotal = 0;
for (var i=0; i<myArr.length; i++) {
	myTotal += myArr[i];
}
//20


/* You may have heard the term Object before. Objects are similar to arrays, except instead of using indexes to access and modify their data, you acces the data in objects through what are called properties.
Example
var cat = {
	"name": "Whiskers",
	"legs": 4,
	"tails": 1,
	"enemies": ["Water", "Dogs"]
};
Objects are useful for storing data in a structured way, and can represent real world objects, like a cat. */
//Example
var myDog = {
	"name": "George",
	"tails": 1,
	"legs": 4,
	"friends": ["Me", "Dad", "Mom"]
};

/* There are two ways to access the properties of an object: the dot operator . and the bracket notation [] similar to an array.
The dot operator is what you use when you know the name of the property you're trying to access ahead of time.
here is an example of using the dot operator.
var myObj = {
	prop1: "val1",
	prop2: "val2"
};
var prop1val = myObj.prop1 //val1
var prop2val = myObj.prop2 //val2
*/
//example
var testObj = {
	"hat": "ballcap",
	"shirt": "jersey",
	"shoes": "cleats"
};
var hatValue = testObj.hat // ballcap
var shirtValue = testObj.shirt //jersey

/* the second way to access the properties of an object is bracket notation []. If the property of an object you are trying to access has a space in it, you will need to use bracket notation.
Here is a sample of using bracket notation to read an object property.
var myObj = {
	"Space Name": "Kirk",
	"More Space": "Spock"
};
myObj["Space Name"];// Kirk
myObj['More Space']; //Spock
*/
//example
var testObj = {
	"an entree": "hamburger",
	"my side": "veggies",
	"the drink": "water"
};
var entreeValue = testObj["an entree"]; //hamburger
var drinkValue = testObj["the drink"]; //water

/* Another use of bracket notation on objects is to use a variable to access a property. This can be very useful for iterating through lists of the object properties or for doing the lookup.
Here is an example of using a variable to access a property:
var someProp = "propName";
var myObj = {
	propName: "Some Value"
}
myObj[someProp]; // "Some Value"

Here is one more:
var myDog = "Hunter";
var dogs = {
	Fido: "Mutt",
	Hunter: "Doberman",
	Snoopie: "Beagle"
}
var breed = dogs[myDog];
console.log(breed); //Dobermanm
*/
//example
var testObj = {
	12: "Namath",
	16: "Montana",
	19: "Unitas"
};
var playerNumber = 16;
var player = testObj[playerNumber]; //Montana

/* After you've created a JavaScript object, you can update its properties at any time just like you would update any other variable. You can use either dot or bracket notation to update.
For example:
var ourDog = {
	"name": "Camper",
	"legs": 4,
	"tails": 1,
	"friends": ["everything!"]
};
since he's a particulary happy dog lets change his name to "Happy Camper". Here's how we update his oibjects name property:
ourDog.name = "Happy Camper";
or
ourDog["name"] = "Happy Camper";

Now when we evaluate ourDog.name, instead of getting Camper we'll get the new name of Happy Camper. */
//example
var myDog = {
	"name": "Coder",
	"legs": 4,
	"tails": 1,
	"friends": ["Me"]
};

myDog.name = "George";
/* You can add new properties to existing JavaScript objects the same way you would modify them,
Heres how we would add "bark" to the property ourDog:
ourdog.bark = "bow-wow";
or
ourDog["bark"] = "bow-wow"; */
//so we can add bark to our previous dog function
myDog.bark = "woof";
//we can also delete properties from an object like this:
delete myDog.tails;

/* Objects can be thought of as a key/value storage, like a dictionary. If you have tabular data, you can use an object to "lookup" value rather than a switch statement or an else/if chain. This is most useful when you know that your input data is limited to a certain range. Like so...*/
function phoneticLookup(val) {
	var result = "";
	var lookup = {
		"alpha": "Adams",
		"bravo": "Boston",
		"charlie": "Chicago",
		"delta": "Denver",
		"echo": "Easy",
		"foxtrot": "Frank"
	};
	result = lookup[val];
	return result;
}
phoneticLookup("charlie"); //Chicago

/* Sometimes it is useful to check if the property of a given object exists or not. We can use the .hasOwnProperty(propname) method of objects to determine if that object has the given property name. .hasOwnProperty() returns true or false if the porperty is found or not found.
var myObj = {
	top: "hat",
	bottom: "pants"
};
myObj.hasOwnProperty("top"); //true
myObj.hasOwnProperty("middle"); //false
*/
var myObj = {
	gift: "pony",
	pet: "kitten",
	bed: "sleigh"
};

function checkObj(checkProp){
	var result = myObj.hasOwnProperty(checkProp);
	if(result){
		return myObj[checkProp];
	}else {
		return "Not Found";
	}
}

/* Sometimes you may want to store data in a flexible Data Structure. A JavaScript object is one way to handle flexible data. They allow for arbitrary combinations of strings, number,s booleans, arrays, functions, and objects.
Here is an example of a complex data structure. 
var ourMusic = [
	{
		"artist": "Daft Punk",
		"title": "Homework"
		"release_year": 1997,
		"formats": [
			"CD",
			"Cassette",
			"LP"],
		"gold": true
	}
];
This is an array which contains one object inside. The object has various pieces of metadata about an album. It also has a nested "formats" array. IUf you want to add more album records, you can do this by adding records to the top level array.
Objects hold data in a property, which is a key-value format. In the example above, "artist": "Daft Punk" is a property that has a key of "artist" and a value of "Daft Punk".
JavaScript Object Notation or JSON is a related data interchange format used to store data,
{
	"artist": "Dafty Punk",
	"title": "Homework",
	"release_year": 1997,
	"formats": [
		"CD",
		"Cassette",
		"LP"
	],
	"gold": true
}
NOTE you will need to add a comma after every object in an array, unless it is the last object in the array. */
//example
var myMusic = [
	{
		"artist": "Billy Joel",
		"title": "Piano Man",
		"release_year": 1973,
		"formats": [
			"CS",
			"8T",
			"LP"],
		"gold": "true"
	}, //need the comma as it's in an array
	{
		"artist": "Daft Punk",
		"title": "Human After All",
		"release_year": 2005,
		"formats": [
			"CD",
			"Cassette",
			"LP"],
		"gold": false
	}

];

/* The sub-properties of object can be accessed by cahining together the dot or bracket-notation.
Here is a nested object:
var ourStorage = {
	"desk": {
		"drawer": "stapler"
	},
	"cabinet": {
		"top drawer": {
			"folder1": "a file",
			"folder2": "secrets"
		},
		"botton drawer": "soda"		
	}
};
ourStorage.cabinet["top drawer"].folder2; //"secrets"
ourStorage.desk.drawer; //"stapler" */
//example
var myStorage = {
	"car": {
		"inside": {
			"glove box": "maps",
			"passenger seat": "crumbs"
		},
		"outside": {
			"trunk": "jack"
		}
	}
};
var gloveBoxContents = myStorage.car.inside["glove box"];
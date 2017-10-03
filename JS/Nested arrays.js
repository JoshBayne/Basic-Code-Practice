/* As we have seen in earlier examples, objects can contain both nested objects and nested arrays. Similar to accessing nested objects, Array Bracket notation can be chained to access nested arrays.
Here is an example of how to access a nested array:
var ourPets = [
	{
		"animalType": "cat",
		"names": [
			"Meowzer",
			"Fluffy",
			"Kit-Cat"
		]
	},
	{
		"animalType": "dog",
		"names": [
			"Spot",
			"Bowser",
			"Frankie"
		]
	}
];
ourPets[0].names[1]; //Fluffy
ourPets[1].names[0]; //Spot
*/
//example code
var myPlants = [
	{
		type: "flowers",
		list: [
			"rose",
			"tulip",
			"dandelion"
		]
	},
	{
		type: "trees",
		list: [
			"fir",
			"pine",
			"birch"
		]
	}
];

var secondTree = myPlants[1].list[1]; //pine
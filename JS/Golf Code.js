/* In the game of Golf, each hole has a par meaning the average number of strokes a golfer is expected to make in order to sink the ball ina hole to complete the play. Depending on how far above or below par your strokes are, there is a different nickname.
This function will be passed par and strokes arguments. Return the correct strink according to this table which lists the strokes in order of priority, top to bottom.

1 - Hole-in-one!
<=par-2 - Eagle
par-1 - Birdie
par - Par
par+1 - Bogey
par+2 - Double Bogey
>=par+3 - Go Home!
*/

function golfScore(par, strokes) {
	if (strokes = 1) {
		return "Hole-in-one!";
	} else if (strokes <= par-2) {
		return "Eagle";
	} else if (strokes == par-1) {
		return "Birdie";
	} else if (strokes == par) {
		return "Par";
	} else if (strokes == par+1) {
		return "Bogey";
	} else if (strokes == par+2) {
		return "Double Bogey";
	} else {
		return "Go Home!";
	}
} 
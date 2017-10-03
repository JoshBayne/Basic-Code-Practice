var count = 0;

function cc(card) {
	switch(card) {
		case(2):
		case(3):
		case(4):
		case(5):
		case(6):
			count++;
			break;
		case(10):
		case("J"):
		case("Q"):
		case("K"):
		case("A"):
			count--;
			break;
	}
	if (count > 0) {
		return count + " Bet";
	} else {
		return count + " Hold";
	}
}

/* This is a function to count cards in BlackJack. 
If the card is a 2,3,4,5 or 6 it will add 1 to the count, if the card os 10,J,Q,K or A it will subtract 1 from the count. 
7,8,9 don't add or subtract anything. If the count is Positive, it will return the current count and the string Bet, if negative 
it will return the current count and the string Hold.*/

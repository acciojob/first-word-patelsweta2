function firstWord(s) {
  // your code here
	s = s.trim();
	const words = s.split(' ');
	return words[0];
	
	
}

// Do not change the code below

const s = prompt("Enter String:");
alert(firstWord(s));

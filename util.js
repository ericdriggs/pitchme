
//returns random element in array
function getRandomElement( ar ) {
  var index = getRandomIndex( ar.length );
  return ar[index];
}

//from 0 to max
function getRandomIndex( max ) {
  return getRandomInt(0, max);
}

//from min to max - 1
function getRandomInt(min, max) {
  return Math.floor(Math.random() * (max - min)) + min;
}

//from min to max
function getRandomIntInclusive(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

function formatNameAndKnownFor( person ) {
	return person.name + ' (' + person.knownFor + ')';
}


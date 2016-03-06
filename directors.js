var directors = [
	 { rank : 1, name : "Christopher Nolan", knownFor : "The Dark Knight", popularity : 195.23}
	,{ rank : 2, name : "Francis Ford Coppola", knownFor : "The Godfather", popularity : 163.59}
	,{ rank : 3, name : "Frank Darabont", knownFor : "The Shawshank Redemption", popularity : 91.68}
	,{ rank : 4, name : "Steven Spielberg", knownFor : "Saving Private Ryan", popularity : 82.72}
	,{ rank : 5, name : "Peter Jackson", knownFor : "The Lord of the Rings", popularity : 79.53}
	,{ rank : 6, name : "Martin Scorsese", knownFor : "The Wolf of Wall Street", popularity : 73.15}
	,{ rank : 7, name : "Quentin Tarantino", knownFor : "Pulp Fiction", popularity : 44.63}
	,{ rank : 8, name : "Hayao Miyazaki", knownFor : "Spirited Away", popularity : 37.24}
	,{ rank : 9, name : "David Fincher", knownFor : "Fight Club", popularity : 24.81}
	,{ rank : 10, name : "Robert Zemeckis", knownFor : "Back to the Future", popularity : 12.1}
	,{ rank : 11, name : "Ridley Scott", knownFor : "Blade Runner", popularity : 11.34}
	,{ rank : 12, name : "James Cameron", knownFor : "Aliens", popularity : 8.83}
	,{ rank : 13, name : "Joel Coen", knownFor : "No Country for Old Men", popularity : 5.69}
	,{ rank : 14, name : "Clint Eastwood", knownFor : "Actor, Million Dollar Baby", popularity : 5.6}
	,{ rank : 15, name : "The Watchowskis", knownFor : "The Matrix", popularity : 4.45}
	,{ rank : 17, name : "Roman Polanski", knownFor : "The Pianist", popularity : 3.88}
	,{ rank : 18, name : "Fernando Meirelles", knownFor : "City of God", popularity : 3.52}
	,{ rank : 19, name : "Jonathan Demme", knownFor : "The Silence of the Lambs", popularity : 3.21}
	,{ rank : 20, name : "Bryan Singer", knownFor : "The Usual Suspects", popularity : 3.08}
	,{ rank : 21, name : "Roberto Benigni", knownFor : "Actor, Life Is Beautiful", popularity : 2.84}
	,{ rank : 22, name : "Andrew Stanton", knownFor : "Finding Nemo", popularity : 2.75}
	,{ rank : 23, name : "Luc Besson", knownFor : "The Fifth Element", popularity : 2.73}
	,{ rank : 24, name : "Guy Ritchie", knownFor : "Snatch.", popularity : 2.69}
	,{ rank : 25, name : "Terry Jones", knownFor : "Monty Python and the Holy Grail", popularity : 2.25}
	,{ rank : 26, name : "Ron Howard", knownFor : "Actor, A Beautiful Mind", popularity : 2}
	,{ rank : 27, name : "Terry Gilliam", knownFor : "Monty Python and the Holy Grail", popularity : 1.96}
	,{ rank : 28, name : "Rob Reiner", knownFor : "Stand by me", popularity : 1.79}
	,{ rank : 29, name : "Pete Docter", knownFor : "Up", popularity : 1.78}
	,{ rank : 30, name : "Richard Linklater", knownFor : "Boyhood", popularity : 1.36}
	,{ rank : 31, name : "Steven Chow", knownFor : "Kung Fu Hustle", popularity : 1.4}
	,{ rank : 32, name : "Chan-wook Park", knownFor : "Oldboy", popularity : 1.3}
	,{ rank : 33, name : "Wolfgang Petersen", knownFor : "Troy", popularity : 1.2}
	,{ rank : 34, name : "Mel Gibson", knownFor : "Actor, Braveheart", popularity : 1.04}
	,{ rank : 35, name : "Lee Unkrich", knownFor : "Editorial Department, Finding Nemo", popularity : 1.03}
	,{ rank : 36, name : "Darren Aronofsky", knownFor : "Requiem for a Dream", popularity : 0.99}
	,{ rank : 37, name : "Michel Gondry", knownFor : "Eternal Sunshine of the Spotless Mind", popularity : 0.88}
	,{ rank : 38, name : "John Lasseter", knownFor : "Toy Story", popularity : 0.87}
	,{ rank : 39, name : "Curtis Hanson", knownFor : "L.A. Confidential", popularity : 0.85}
	,{ rank : 40, name : "Guillermo del Toro", knownFor : "Pan's Labyrinth", popularity : 0.8}
	,{ rank : 41, name : "David Lynch", knownFor : "Mulholland Dr.", popularity : 0.71}
];

function getRandomDirector() {
	var director = getRandomElement(directors);
	return formatNameAndKnownFor(director);
}
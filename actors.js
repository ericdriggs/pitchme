var actors = [
	 { rank : 1, name : "Ryan Reynolds", gender : "male", knownFor : "Deadpool" }
	,{ rank : 2, name : "Ed Skrein", gender : "male", knownFor : "Deadpool" }
	,{ rank : 3, name : "Tom Hardy", gender : "male", knownFor : "Mad Max: Fury Road" }
	,{ rank : 4, name : "Leonardo DiCaprio", gender : "male", knownFor : "Inception" }
	,{ rank : 5, name : "Taron Egerton", gender : "male", knownFor : "Kingsman: The Secret Service" }
	,{ rank : 6, name : "T.J. Miller", gender : "male", knownFor : "Deadpool" }
	,{ rank : 7, name : "Johnny Depp", gender : "male", knownFor : "Pirates of the Carribean" }
	,{ rank : 8, name : "Stefan Kapicic", gender : "male", knownFor : "Deadpool" }
	,{ rank : 9, name : "Travis Fimmel", gender : "male", knownFor : "Vikings" }
	,{ rank : 10, name : "Jeffrey Dean Morgan", gender : "male", knownFor : "Watchmen" }
	,{ rank : 12, name : "Tom Cruise", gender : "male", knownFor : "Top Gun" }
	,{ rank : 13, name : "Domhnall Gleeson", gender : "male", knownFor : "Ex Machina" }
	,{ rank : 14, name : "Bobby Cannavale", gender : "male", knownFor : "Ant-Man" }
	,{ rank : 15, name : "Norman Reedus", gender : "male", knownFor : "The Boondock Saints" }
	,{ rank : 16, name : "Henry Cavill", gender : "male", knownFor : "Man of Steel" }
	,{ rank : 17, name : "Michael Fassbender", gender : "male", knownFor : "Inglourious Basterds" }
	,{ rank : 18, name : "Eddie Redmayne", gender : "male", knownFor : "The Theory of Everything" }
	,{ rank : 19, name : "Sam Claflin", gender : "male", knownFor : "The Hunger Games" }
	,{ rank : 20, name : "Benicio Del Toro", gender : "male", knownFor : "Snatch" }
	,{ rank : 21, name : "John Travolta", gender : "male", knownFor : "Pulp Fiction" }
	,{ rank : 22, name : "Sacha Baron Cohen", gender : "male", knownFor : "Borat" }
	,{ rank : 23, name : "Daniel Craig", gender : "male", knownFor : "Skyfall" }
	,{ rank : 24, name : "Adam Driver", gender : "male", knownFor : "Star Wars - The Force Awakens" }
	,{ rank : 25, name : "Sylvester Stallone", gender : "male", knownFor : "Rocky" }
	,{ rank : 26, name : "Tom Ellis", gender : "male", knownFor : "Favorite Son" }
	,{ rank : 27, name : "Brad Pitt", gender : "male", knownFor : "Inglourious Basterds" }
	,{ rank : 28, name : "Matt Damon", gender : "male", knownFor : "The Bourne Identity" }
	,{ rank : 29, name : "Tom Hiddleston", gender : "male", knownFor : "The Avengers" }
	,{ rank : 30, name : "Chris Hemsworth", gender : "male", knownFor : "Thor" }
	,{ rank : 32, name : "Joseph Gordon-Levitt", gender : "male", knownFor : "Inception" }
	,{ rank : 33, name : "Benedict Samuel", gender : "male", knownFor : "The Walk" }
	,{ rank : 34, name : "Aaron Tveit", gender : "male", knownFor : "Les Misérables" }
	,{ rank : 35, name : "Hugh Jackman", gender : "male", knownFor : "Wolverine" }
	,{ rank : 36, name : "Gerard Butler", gender : "male", knownFor : "300" }
	,{ rank : 37, name : "Chris Pratt", gender : "male", knownFor : "Guardians of the Galaxy" }
	,{ rank : 38, name : "Zac Efron", gender : "male", knownFor : "17 Again" }
	,{ rank : 39, name : "Zach McGowan", gender : "male", knownFor : "Dracula Untold" }
	,{ rank : 40, name : "Tom Hanks", gender : "male", knownFor : "The Da Vinci Code" }
	,{ rank : 41, name : "Idris Elba", gender : "male", knownFor : "Prometheus" }
	,{ rank : 42, name : "Channing Tatum", gender : "male", knownFor : "21 Jump Street" }
	,{ rank : 43, name : "Christian Bale", gender : "male", knownFor : "The Dark Knight" }
	,{ rank : 44, name : "Austin Butler", gender : "male", knownFor : "Aliens in the Attic" }
	,{ rank : 45, name : "James Franco", gender : "male", knownFor : "127 Hours" }
	,{ rank : 46, name : "Vin Diesel", gender : "male", knownFor : "Furious 7" }
	,{ rank : 47, name : "Robert De Niro", gender : "male", knownFor : "Goodfellas" }
	,{ rank : 48, name : "Chandler Riggs", gender : "male", knownFor : "No Way Out" }
	,{ rank : 49, name : "Jake Lacy", gender : "male", knownFor : "Carol" }
	,{ rank : 50, name : "Jake Gyllenhaal", gender : "male", knownFor : "Donnie Darko" }
	,{ rank : 51, name : "Freddie Highmore", gender : "male", knownFor : "Charlie and the Chocolate Factory" }
	,{ rank : 52, name : "Dominic Sherwood", gender : "male", knownFor : "Vampire Academy" }
	,{ rank : 53, name : "Ben Affleck", gender : "male", knownFor : "Argo" }
	,{ rank : 54, name : "Benedict Cumberbatch", gender : "male", knownFor : "The Imitation Game" }
	,{ rank : 55, name : "Chris Evans", gender : "male", knownFor : "The Avengers" }
	,{ rank : 56, name : "Keanu Reeves", gender : "male", knownFor : "The Matrix" }
	,{ rank : 57, name : "Oscar Isaac", gender : "male", knownFor : "Ex Machina" }
	,{ rank : 58, name : "Ben Stiller", gender : "male", knownFor : "Zoolander" }
	,{ rank : 59, name : "Scott Eastwood", gender : "male", knownFor : "Gran Torino" }
	,{ rank : 60, name : "Jason Momoa", gender : "male", knownFor : "Conan the Barbarian" }
	,{ rank : 61, name : "Charlie Hunnam", gender : "male", knownFor : "Pacific Rim" }
	,{ rank : 62, name : "Wentworth Miller", gender : "male", knownFor : "Underworld" }
	,{ rank : 63, name : "Manu Bennett", gender : "male", knownFor : "The Hobbit: An Unexpected Journey" }
	,{ rank : 64, name : "Ryan Gosling", gender : "male", knownFor : "Drive" }
	,{ rank : 65, name : "Robbie Amell", gender : "male", knownFor : "The DUFF" }
	,{ rank : 66, name : "Matthew McConaughey", gender : "male", knownFor : "Interstellar" }
	,{ rank : 67, name : "Andrew Lincoln", gender : "male", knownFor : "Love Actually" }
	,{ rank : 68, name : "George Gaynes", gender : "male", knownFor : "Police Academy" }
	,{ rank : 69, name : "Aaron Taylor-Johnson", gender : "male", knownFor : "Kick-Ass" }
	,{ rank : 70, name : "Will Smith", gender : "male", knownFor : "Men in Black" }
	,{ rank : 71, name : "Jamie Dornan", gender : "male", knownFor : "Fifty Shades of Grey" }
	,{ rank : 72, name : "Jason Statham", gender : "male", knownFor : "The Transporter" }
	,{ rank : 73, name : "Matthew Daddario", gender : "male", knownFor : "Delivery Man" }
	,{ rank : 74, name : "Robert Downey Jr.", gender : "male", knownFor : "The Avengers" }
	,{ rank : 75, name : "Paul Reubens", gender : "male", knownFor : "Pee-wee's Big Adventure" }
	,{ rank : 76, name : "Jacob Tremblay", gender : "male", knownFor : "Room" }
	,{ rank : 77, name : "Will Poulter", gender : "male", knownFor : "The Revenant" }
	,{ rank : 78, name : "Bradley Cooper", gender : "male", knownFor : "Silver Linings Playbook" }
	,{ rank : 79, name : "Alexander Skarsgård", gender : "male", knownFor : "You'll Be the Death of Me" }
	,{ rank : 80, name : "Jared Leto", gender : "male", knownFor : "Requiem for a Dream" }
	,{ rank : 81, name : "James Spader", gender : "male", knownFor : "Stargate" }
	,{ rank : 82, name : "Michael B. Jordan", gender : "male", knownFor : "Creed" }
	,{ rank : 83, name : "Harrison Ford", gender : "male", knownFor : "Star Wars" }
	,{ rank : 84, name : "Clint Eastwood", gender : "male", knownFor : "Million Dollar Baby" }
	,{ rank : 85, name : "Theo James", gender : "male", knownFor : "Divergent" }
	,{ rank : 86, name : "Kurt Russell", gender : "male", knownFor : "The Thing" }
	,{ rank : 87, name : "Dwayne Johnson", gender : "male", knownFor : "San Andreas" }
	,{ rank : 88, name : "Simon Pegg", gender : "male", knownFor : "Shaun of the Dead" }
	,{ rank : 89, name : "Dylan O'Brien", gender : "male", knownFor : "The Maze Runner" }
	,{ rank : 91, name : "Bob Odenkirk", gender : "male", knownFor : "Nebraska" }
	,{ rank : 92, name : "Ryan Hurst", gender : "male", knownFor : "Remember the Titans" }
	,{ rank : 93, name : "Karan Soni", gender : "male", knownFor : "Deadpool" }
	,{ rank : 94, name : "Adam Sandler", gender : "male", knownFor : "Grown Ups 2" }
	,{ rank : 95, name : "Sam Heughan", gender : "male", knownFor : "The Wedding" }
	,{ rank : 96, name : "Eric Johnson", gender : "male", knownFor : "Legends of the Fall" }
	,{ rank : 97, name : "Arnold Schwarzenegger", gender : "male", knownFor : "The Terminator" }
	,{ rank : 98, name : "Nicholas Hoult", gender : "male", knownFor : "Mad Max: Fury Road" }
	,{ rank : 99, name : "David Duchovny", gender : "male", knownFor : "The X Files" }
	,{ rank : 101, name : "Paul Dano", gender : "male", knownFor : "Little Miss Sunshine" }
	,{ rank : 102, name : "Jon Bernthal", gender : "male", knownFor : "The Wolf of Wall Street" }
	,{ rank : 103, name : "Sebastian Stan", gender : "male", knownFor : "Captain America: The First Avenger" }
	,{ rank : 104, name : "Justin Theroux", gender : "male", knownFor : "American Psycho" }
	,{ rank : 105, name : "Stephen Lang", gender : "male", knownFor : "Avatar" }
	,{ rank : 106, name : "Aaron Paul", gender : "male", knownFor : "Need for Speed" }
	,{ rank : 107, name : "Daniel Radcliffe", gender : "male", knownFor : "Harry Potter" }
	,{ rank : 108, name : "Nicolas Cage", gender : "male", knownFor : "Leaving Las Vegas" }
	,{ rank : 109, name : "Grant Gustin", gender : "male", knownFor : "Out of Time" }
	,{ rank : 110, name : "Ralph Fiennes", gender : "male", knownFor : "The Grand Budapest Hotel" }
	,{ rank : 111, name : "Matthias Schoenaerts", gender : "male", knownFor : "Rust and Bone" }
	,{ rank : 112, name : "Bryan Cranston", gender : "male", knownFor : "Ozymandias" }
	,{ rank : 113, name : "Mark Wahlberg", gender : "male", knownFor : "Boogie Nights" }
	,{ rank : 115, name : "Gabriel Macht", gender : "male", knownFor : "Behind Enemy Lines" }
	,{ rank : 116, name : "Joe Manganiello", gender : "male", knownFor : "Spider-Man" }
	,{ rank : 117, name : "Neal McDonough", gender : "male", knownFor : "Minority Report" }
	,{ rank : 119, name : "Christoph Waltz", gender : "male", knownFor : "Django Unchained" }
	,{ rank : 120, name : "Chris Pine", gender : "male", knownFor : "Star Trek" }
	,{ rank : 121, name : "Mark Hamill", gender : "male", knownFor : "Star Wars" }
	,{ rank : 123, name : "Matthew Goode", gender : "male", knownFor : "The Imitation Game" }
	,{ rank : 124, name : "Benjamin Walker", gender : "male", knownFor : "Abraham Lincoln: Vampire Hunter" }
	,{ rank : 125, name : "Hayden Christensen", gender : "male", knownFor : "Star Wars - Revenge of the Sith" }
	,{ rank : 126, name : "Liam Neeson", gender : "male", knownFor : "Schindler's List" }
	,{ rank : 127, name : "Joseph Fiennes", gender : "male", knownFor : "Shakespeare in Love" }
	,{ rank : 128, name : "Heath Ledger", gender : "male", knownFor : "The Dark Knight" }
	,{ rank : 129, name : "Denzel Washington", gender : "male", knownFor : "Training Day" }
	,{ rank : 131, name : "Dave Bautista", gender : "male", knownFor : "Guardians of the Galaxy" }
	,{ rank : 132, name : "Josh Brolin", gender : "male", knownFor : "W." }
	,{ rank : 133, name : "Taylor Kitsch", gender : "male", knownFor : "John Carter" }
	,{ rank : 134, name : "Jim Carrey", gender : "male", knownFor : "Eternal Sunshine of the Spotless Mind" }
	,{ rank : 135, name : "John Krasinski", gender : "male", knownFor : "Away We Go" }
	,{ rank : 136, name : "Stephen Amell", gender : "male", knownFor : "The Climb" }
	,{ rank : 137, name : "George Clooney", gender : "male", knownFor : "Gravity" }
	,{ rank : 138, name : "Jesse Plemons", gender : "male", knownFor : "Black Mass" }
	,{ rank : 139, name : "Ezra Miller", gender : "male", knownFor : "We Need to Talk About Kevin" }
	,{ rank : 140, name : "Matt Bomer", gender : "male", knownFor : "In Time" }
	,{ rank : 141, name : "James Norton", gender : "male", knownFor : "Rush" }
	,{ rank : 142, name : "O'Shea Jackson Jr.", gender : "male", knownFor : "Straight Outta Compton" }
	,{ rank : 143, name : "Kit Harington", gender : "male", knownFor : "Pompeii" }
	,{ rank : 144, name : "Mark Ruffalo", gender : "male", knownFor : "Shutter Island" }
	,{ rank : 145, name : "Nikolaj Coster-Waldau", gender : "male", knownFor : "Oblivion" }
	,{ rank : 146, name : "Alexander Ludwig", gender : "male", knownFor : "The Hunger Games" }
	,{ rank : 147, name : "Marlon Brando", gender : "male", knownFor : "The Godfather" }
	,{ rank : 148, name : "Dominic Purcell", gender : "male", knownFor : "Equilibrium" }
	,{ rank : 149, name : "Shameik Moore", gender : "male", knownFor : "Dope" }
	,{ rank : 150, name : "Dolph Lundgren", gender : "male", knownFor : "The Expendables" }
	,{ rank : 151, name : "Paul Rudd", gender : "male", knownFor : "Ant-Man" }
	,{ rank : 152, name : "Will Ferrell", gender : "male", knownFor : "Step Brothers" }
	,{ rank : 153, name : "Mel Gibson", gender : "male", knownFor : "Braveheart" }
	,{ rank : 154, name : "James McAvoy", gender : "male", knownFor : "X-Men: First Class" }
	,{ rank : 155, name : "Garrett Hedlund", gender : "male", knownFor : "TRON: Legacy" }
	,{ rank : 156, name : "Evan Peters", gender : "male", knownFor : "Kick-Ass" }
	,{ rank : 157, name : "Miles Teller", gender : "male", knownFor : "Whiplash" }
	,{ rank : 158, name : "Charlie Cox", gender : "male", knownFor : "Stardust" }
	,{ rank : 159, name : "Shia LaBeouf", gender : "male", knownFor : "Transformers" }
	,{ rank : 160, name : "Tom Holland", gender : "male", knownFor : "The Impossible" }
	,{ rank : 161, name : "Cillian Murphy", gender : "male", knownFor : "Inception" }
	,{ rank : 162, name : "Bruce Willis", gender : "male", knownFor : "The Sixth Sense" }
	,{ rank : 163, name : "Jason Sudeikis", gender : "male", knownFor : "We're the Millers" }
	,{ rank : 164, name : "Clive Standen", gender : "male", knownFor : "Everest" }
	,{ rank : 165, name : "Rami Malek", gender : "male", knownFor : "Short Term 12" }
	,{ rank : 166, name : "Daniel Day-Lewis", gender : "male", knownFor : "There Will Be Blood" }
	,{ rank : 167, name : "David Tennant", gender : "male", knownFor : "Dr. Who" }
	,{ rank : 168, name : "Samuel L. Jackson", gender : "male", knownFor : "Pulp Fiction" }
	,{ rank : 169, name : "Paul Walker", gender : "male", knownFor : "The Fast and the Furious" }
	,{ rank : 170, name : "Dan Stevens", gender : "male", knownFor : "The Fifth Estate" }
	,{ rank : 171, name : "Al Pacino", gender : "male", knownFor : "The Godfather" }
	,{ rank : 173, name : "James Marsden", gender : "male", knownFor : "X-Men" }
	,{ rank : 174, name : "Armie Hammer", gender : "male", knownFor : "The Man from U.N.C.L.E." }
	,{ rank : 175, name : "Ewan McGregor", gender : "male", knownFor : "Star Wars - Revenge of the Sith" }
	,{ rank : 176, name : "Jonathan Banks", gender : "male", knownFor : "Beverly Hills Cop" }
	,{ rank : 177, name : "Jamie Campbell Bower", gender : "male", knownFor : "Sweeney Todd" }
	,{ rank : 178, name : "Alden Ehrenreich", gender : "male", knownFor : "Beautiful Creatures" }
	,{ rank : 179, name : "Jack Nicholson", gender : "male", knownFor : "The Shining" }
	,{ rank : 180, name : "Cuba Gooding Jr.", gender : "male", knownFor : "Jerry Maguire" }
	,{ rank : 181, name : "Lee Pace", gender : "male", knownFor : "Guardians of the Galaxy" }
	,{ rank : 182, name : "Joel Edgerton", gender : "male", knownFor : "Warrior" }
	,{ rank : 183, name : "Evan Handler", gender : "male", knownFor : "The Three Stooges" }
	,{ rank : 184, name : "Damian Lewis", gender : "male", knownFor : "Pilot" }
	,{ rank : 185, name : "Jonah Hill", gender : "male", knownFor : "21 Jump Street" }
	,{ rank : 186, name : "Cameron Monaghan", gender : "male", knownFor : "Click" }
	,{ rank : 187, name : "Milo Ventimiglia", gender : "male", knownFor : "Rocky Balboa" }
	,{ rank : 188, name : "Rupert Friend", gender : "male", knownFor : "The Young Victoria" }
	,{ rank : 189, name : "Seth Rogen", gender : "male", knownFor : "This Is the End" }
	,{ rank : 190, name : "Vincent D'Onofrio", gender : "male", knownFor : "Full Metal Jacket" }
	,{ rank : 191, name : "Jensen Ackles", gender : "male", knownFor : "My Bloody Valentine" }
	,{ rank : 192, name : "Richard Armitage", gender : "male", knownFor : "The Hobbit" }
	,{ rank : 193, name : "Sam Riley", gender : "male", knownFor : "Control" }
	,{ rank : 195, name : "Val Kilmer", gender : "male", knownFor : "Heat" }
	,{ rank : 196, name : "Jack Black", gender : "male", knownFor : "Kung Fu Panda" }
	,{ rank : 197, name : "Ben McKenzie", gender : "male", knownFor : "Batman: Year One" }
	,{ rank : 198, name : "Aidan Turner", gender : "male", knownFor : "The Hobbit" }
	,{ rank : 199, name : "David Schwimmer", gender : "male", knownFor : "Madagascar" }
	,{ rank : 200, name : "Michael Shannon", gender : "male", knownFor : "Man of Steel" }
	,{ rank : 201, name : "Chad Michael Murray", gender : "male", knownFor : "House of Wax" }
	,{ rank : 202, name : "Daniel Brühl", gender : "male", knownFor : "Inglourious Basterds" }
	,{ rank : 203, name : "Ian Somerhalder", gender : "male", knownFor : "Founder's Day" }
	,{ rank : 204, name : "Taylor Kinney", gender : "male", knownFor : "The Other Woman" }
	,{ rank : 205, name : "Paul Bettany", gender : "male", knownFor : "A Beautiful Mind" }
	,{ rank : 206, name : "Richard Madden", gender : "male", knownFor : "Cinderella" }
	,{ rank : 207, name : "Paul Rust", gender : "male", knownFor : "Inglourious Basterds" }
	,{ rank : 208, name : "Christopher Eccleston", gender : "male", knownFor : "The Others" }
	,{ rank : 209, name : "Kevin Spacey", gender : "male", knownFor : "American Beauty" }
	,{ rank : 210, name : "Sidney Poitier", gender : "male", knownFor : "In the Heat of the Night" }
	,{ rank : 211, name : "Peter Dinklage", gender : "male", knownFor : "X-Men: Days of Future Past" }
	,{ rank : 212, name : "Steve Carell", gender : "male", knownFor : "Stress Relief" }
	,{ rank : 213, name : "Jack Quaid", gender : "male", knownFor : "The Hunger Games" }
	,{ rank : 214, name : "Liev Schreiber", gender : "male", knownFor : "X-Men Origins: Wolverine" }
	,{ rank : 215, name : "Brendan Fraser", gender : "male", knownFor : "The Mummy" }
	,{ rank : 216, name : "Casey Affleck", gender : "male", knownFor : "Gone Baby Gone" }
	,{ rank : 217, name : "Ricky Whittle", gender : "male", knownFor : "Austenland" }
	,{ rank : 218, name : "Mickey Rourke", gender : "male", knownFor : "The Wrestler" }
	,{ rank : 219, name : "Colin Farrell", gender : "male", knownFor : "Phone Booth" }
	,{ rank : 220, name : "Timothy Olyphant", gender : "male", knownFor : "Live Free or Die Hard" }
	,{ rank : 221, name : "John Boyega", gender : "male", knownFor : "Star Wars - The Force Awakens" }
	,{ rank : 222, name : "Billy Zane", gender : "male", knownFor : "Titanic" }
	,{ rank : 223, name : "Morgan Freeman", gender : "male", knownFor : "The Shawshank Redemption" }
	,{ rank : 226, name : "Corey Hawkins", gender : "male", knownFor : "Straight Outta Compton" }
	,{ rank : 227, name : "Mark Rylance", gender : "male", knownFor : "Bridge of Spies" }
	,{ rank : 228, name : "Toby Stephens", gender : "male", knownFor : "Die Another Day" }
	,{ rank : 229, name : "Ben Whishaw", gender : "male", knownFor : "Perfume: The Story of a Murderer" }
	,{ rank : 230, name : "Andrew Dice Clay", gender : "male", knownFor : "Blue Jasmine" }
	,{ rank : 231, name : "Woody Allen", gender : "male", knownFor : "Writer, Annie Hall" }
	,{ rank : 232, name : "Sean Bean", gender : "male", knownFor : "The Lord of the Rings" }
	,{ rank : 233, name : "Max Casella", gender : "male", knownFor : "Inside Llewyn Davis" }
	,{ rank : 234, name : "Ice Cube", gender : "male", knownFor : "Friday" }
	,{ rank : 236, name : "Walton Goggins", gender : "male", knownFor : "Django Unchained" }
	,{ rank : 237, name : "Robin Williams", gender : "male", knownFor : "Good Will Hunting" }
	,{ rank : 238, name : "Kevin Costner", gender : "male", knownFor : "Dances with Wolves" }
	,{ rank : 239, name : "Thomas Brodie-Sangster", gender : "male", knownFor : "The Maze Runner" }
	,{ rank : 240, name : "Josh Hartnett", gender : "male", knownFor : "Black Hawk Down" }
	,{ rank : 241, name : "Jared Padalecki", gender : "male", knownFor : "Friday the 13th" }
	,{ rank : 242, name : "Owen Wilson", gender : "male", knownFor : "Midnight in Paris" }
	,{ rank : 243, name : "James Jagger", gender : "male", knownFor : "Sex & Drugs & Rock & Roll" }
	,{ rank : 244, name : "Hugh Grant", gender : "male", knownFor : "About a Boy" }
	,{ rank : 245, name : "Luke Evans", gender : "male", knownFor : "Dracula Untold" }
	,{ rank : 246, name : "Liam Hemsworth", gender : "male", knownFor : "The Hunger Games: Catching Fire" }
	,{ rank : 247, name : "Mark Strong", gender : "male", knownFor : "Kingsman: The Secret Service" }
	,{ rank : 248, name : "Robert Pattinson", gender : "male", knownFor : "Twilight" }
	,{ rank : 249, name : "Ben Feldman", gender : "male", knownFor : "Cloverfield" }
	,{ rank : 250, name : "Nicholas Braun", gender : "male", knownFor : "The Perks of Being a Wallflower" }
	,{ rank : 1, name : "Morena Baccarin", gender : "female", knownFor : "Pilot" }
	,{ rank : 2, name : "Gina Carano", gender : "female", knownFor : "Haywire" }
	,{ rank : 3, name : "Brianna Hildebrand", gender : "female", knownFor : "Deadpool" }
	,{ rank : 4, name : "Alicia Vikander", gender : "female", knownFor : "Ex Machina" }
	,{ rank : 5, name : "Emilia Clarke", gender : "female", knownFor : "Terminator Genisys" }
	,{ rank : 6, name : "Margot Robbie", gender : "female", knownFor : "The Wolf of Wall Street" }
	,{ rank : 7, name : "Juno Temple", gender : "female", knownFor : "The Dark Knight Rises" }
	,{ rank : 8, name : "Dakota Johnson", gender : "female", knownFor : "Fifty Shades of Grey" }
	,{ rank : 9, name : "Brie Larson", gender : "female", knownFor : "Room" }
	,{ rank : 10, name : "Elizabeth Olsen", gender : "female", knownFor : "Godzilla" }
	,{ rank : 11, name : "Daisy Ridley", gender : "female", knownFor : "Star Wars - The Force Awakens" }
	,{ rank : 12, name : "Arielle Kebbel", gender : "female", knownFor : "The Uninvited" }
	,{ rank : 13, name : "Olivia Munn", gender : "female", knownFor : "Magic Mike" }
	,{ rank : 14, name : "Denise Richards", gender : "female", knownFor : "Starship Troopers" }
	,{ rank : 15, name : "Julianne Hough", gender : "female", knownFor : "Dancing with the Stars" }
	,{ rank : 16, name : "Sasha Pieterse", gender : "female", knownFor : "Good Luck Chuck" }
	,{ rank : 17, name : "Chloë Grace Moretz", gender : "female", knownFor : "Kick-Ass" }
	,{ rank : 18, name : "Mindy Robinson", gender : "female", knownFor : "V/H/S/2" }
	,{ rank : 19, name : "Blake Lively", gender : "female", knownFor : "Summer Kind of Wonderful" }
	,{ rank : 20, name : "Léa Seydoux", gender : "female", knownFor : "Blue Is the Warmest Color" }
	,{ rank : 21, name : "Emma Watson", gender : "female", knownFor : "Harry Potter" }
	,{ rank : 22, name : "Gillian Anderson", gender : "female", knownFor : "The X Files" }
	,{ rank : 23, name : "Olivia Wilde", gender : "female", knownFor : "Rush" }
	,{ rank : 24, name : "Lily James", gender : "female", knownFor : "Cinderella" }
	,{ rank : 25, name : "Mena Suvari", gender : "female", knownFor : "American Beauty" }
	,{ rank : 26, name : "Scarlett Johansson", gender : "female", knownFor : "Lost in Translation" }
	,{ rank : 27, name : "Gal Gadot", gender : "female", knownFor : "Fast & Furious 6" }
	,{ rank : 28, name : "Linda Cardellini", gender : "female", knownFor : "Grandma's Boy" }
	,{ rank : 29, name : "Hayley Atwell", gender : "female", knownFor : "Captain America: The First Avenger" }
	,{ rank : 30, name : "Alexandra Daddario", gender : "female", knownFor : "San Andreas" }
	,{ rank : 31, name : "Natalie Dormer", gender : "female", knownFor : "Rush" }
	,{ rank : 32, name : "Lauren German", gender : "female", knownFor : "Hostel: Part II" }
	,{ rank : 33, name : "Katheryn Winnick", gender : "female", knownFor : "Love & Other Drugs" }
	,{ rank : 34, name : "Alexandra Breckenridge", gender : "female", knownFor : "She's the Man" }
	,{ rank : 35, name : "Emily Blunt", gender : "female", knownFor : "Edge of Tomorrow" }
	,{ rank : 36, name : "Jennifer Lawrence", gender : "female", knownFor : "The Hunger Games" }
	,{ rank : 37, name : "Lauren Cohan", gender : "female", knownFor : "The Boy" }
	,{ rank : 38, name : "Rachel McAdams", gender : "female", knownFor : "Midnight in Paris" }
	,{ rank : 39, name : "Britt Robertson", gender : "female", knownFor : "Tomorrowland" }
	,{ rank : 40, name : "Alycia Debnam-Carey", gender : "female", knownFor : "Into the Storm" }
	,{ rank : 41, name : "Molly Ringwald", gender : "female", knownFor : "Sixteen Candles" }
	,{ rank : 42, name : "Shailene Woodley", gender : "female", knownFor : "Divergent" }
	,{ rank : 43, name : "Teresa Palmer", gender : "female", knownFor : "Warm Bodies" }
	,{ rank : 44, name : "Saoirse Ronan", gender : "female", knownFor : "Atonement" }
	,{ rank : 45, name : "Kate Winslet", gender : "female", knownFor : "Titanic" }
	,{ rank : 46, name : "Isla Fisher", gender : "female", knownFor : "Now You See Me" }
	,{ rank : 47, name : "Rhea Seehorn", gender : "female", knownFor : "Amarillo" }
	,{ rank : 48, name : "Katherine McNamara", gender : "female", knownFor : "Maze Runner" }
	,{ rank : 49, name : "Jessica Chastain", gender : "female", knownFor : "The Martian" }
	,{ rank : 50, name : "Ivana Baquero", gender : "female", knownFor : "Pan's Labyrinth" }
	,{ rank : 51, name : "Penélope Cruz", gender : "female", knownFor : "Pirates of the Caribbean" }
	,{ rank : 52, name : "Kate Mara", gender : "female", knownFor : "127 Hours" }
	,{ rank : 53, name : "Mary Elizabeth Winstead", gender : "female", knownFor : "Scott Pilgrim vs. the World" }
	,{ rank : 54, name : "Melissa Benoist", gender : "female", knownFor : "Whiplash" }
	,{ rank : 55, name : "Kiersey Clemons", gender : "female", knownFor : "Dope" }
	,{ rank : 56, name : "Victoria Justice", gender : "female", knownFor : "Fun Size" }
	,{ rank : 57, name : "Jodie Sweetin", gender : "female", knownFor : "Funner House" }
	,{ rank : 58, name : "Malin Akerman", gender : "female", knownFor : "Watchmen" }
	,{ rank : 59, name : "Bonnie Wright", gender : "female", knownFor : "Harry Potter" }
	,{ rank : 60, name : "Gillian Jacobs", gender : "female", knownFor : "The Box" }
	,{ rank : 61, name : "Deborah Ann Woll", gender : "female", knownFor : "Ruby Sparks" }
	,{ rank : 62, name : "Alison Brie", gender : "female", knownFor : "The Lego Movie" }
	,{ rank : 63, name : "Jessica De Gouw", gender : "female", knownFor : "These Final Hours" }
	,{ rank : 64, name : "Bridget Regan", gender : "female", knownFor : "John Wick" }
	,{ rank : 65, name : "Jennifer Jason Leigh", gender : "female", knownFor : "The Machinist" }
	,{ rank : 66, name : "Rose Leslie", gender : "female", knownFor : "The Last Witch Hunter" }
	,{ rank : 67, name : "Kristen Wiig", gender : "female", knownFor : "The Martian" }
	,{ rank : 68, name : "Taylor Hickson", gender : "female", knownFor : "Deadpool" }
	,{ rank : 69, name : "Kelly Hu", gender : "female", knownFor : "X2" }
	,{ rank : 70, name : "Amber Heard", gender : "female", knownFor : "Zombieland" }
	,{ rank : 71, name : "Rebel Wilson", gender : "female", knownFor : "Pitch Perfect 2" }
	,{ rank : 72, name : "Haley Bennett", gender : "female", knownFor : "The Equalizer" }
	,{ rank : 73, name : "Megan Fox", gender : "female", knownFor : "Transformers" }
	,{ rank : 74, name : "Rooney Mara", gender : "female", knownFor : "The Social Network" }
	,{ rank : 75, name : "Lauren Ambrose", gender : "female", knownFor : "Can't Hardly Wait" }
	,{ rank : 76, name : "Julia Ling", gender : "female", knownFor : "Chuck Versus the Ring" }
	,{ rank : 77, name : "Jaimie Alexander", gender : "female", knownFor : "Thor: The Dark World" }
	,{ rank : 78, name : "Charlize Theron", gender : "female", knownFor : "Mad Max: Fury Road" }
	,{ rank : 79, name : "Jennifer Aniston", gender : "female", knownFor : "The One Where Monica Gets a Roommate" }
	,{ rank : 80, name : "Natalie Portman", gender : "female", knownFor : "V for Vendetta" }
	,{ rank : 81, name : "Krysten Ritter", gender : "female", knownFor : "Confessions of a Shopaholic" }
	,{ rank : 82, name : "Anna Kendrick", gender : "female", knownFor : "Pitch Perfect" }
	,{ rank : 83, name : "Zoë Kravitz", gender : "female", knownFor : "Mad Max: Fury Road" }
	,{ rank : 84, name : "Jane Seymour", gender : "female", knownFor : "Wedding Crashers" }
	,{ rank : 85, name : "Sarah Paulson", gender : "female", knownFor : "Carol" }
	,{ rank : 86, name : "Eliza Taylor", gender : "female", knownFor : "The November Man" }
	,{ rank : 87, name : "Nina Dobrev", gender : "female", knownFor : "The Perks of Being a Wallflower" }
	,{ rank : 88, name : "Bellamy Young", gender : "female", knownFor : "Mission: Impossible III" }
	,{ rank : 89, name : "Elizabeth Debicki", gender : "female", knownFor : "The Great Gatsby" }
	,{ rank : 90, name : "Ariel Winter", gender : "female", knownFor : "Kiss Kiss Bang Bang" }
	,{ rank : 91, name : "Emma Stone", gender : "female", knownFor : "The Help" }
	,{ rank : 92, name : "Vanity", gender : "female", knownFor : "The Last Dragon" }
	,{ rank : 93, name : "Kristen Stewart", gender : "female", knownFor : "Twilight" }
	,{ rank : 94, name : "Keira Knightley", gender : "female", knownFor : "Pirates of the Caribbean" }
	,{ rank : 95, name : "Melissa McCarthy", gender : "female", knownFor : "Spy" }
	,{ rank : 96, name : "Monica Bellucci", gender : "female", knownFor : "Irreversible" }
	,{ rank : 97, name : "Lena Headey", gender : "female", knownFor : "300" }
	,{ rank : 98, name : "Anne Hathaway", gender : "female", knownFor : "Les Misérables" }
	,{ rank : 99, name : "Evangeline Lilly", gender : "female", knownFor : "Ant-Man" }
	,{ rank : 100, name : "Poppy Drayton", gender : "female", knownFor : "Chosen: Part 1" }
	,{ rank : 101, name : "Aubrey Plaza", gender : "female", knownFor : "Safety Not Guaranteed" }
	,{ rank : 102, name : "Leslie Uggams", gender : "female", knownFor : "Self, A Special Sesame Street Christmas" }
	,{ rank : 103, name : "Kaley Cuoco", gender : "female", knownFor : "The Wedding Ringer" }
	,{ rank : 104, name : "Christina Ricci", gender : "female", knownFor : "Sleepy Hollow" }
	,{ rank : 105, name : "Cate Blanchett", gender : "female", knownFor : "The Curious Case of Benjamin Button" }
	,{ rank : 106, name : "Alice Eve", gender : "female", knownFor : "Star Trek Into Darkness" }
	,{ rank : 107, name : "Michelle Monaghan", gender : "female", knownFor : "Source Code" }
	,{ rank : 108, name : "Rebecca Ferguson", gender : "female", knownFor : "Mission: Impossible - Rogue Nation" }
	,{ rank : 109, name : "Nathalie Emmanuel", gender : "female", knownFor : "Furious 7" }
	,{ rank : 110, name : "Danielle Panabaker", gender : "female", knownFor : "Friday the 13th" }
	,{ rank : 111, name : "Amy Adams", gender : "female", knownFor : "Man of Steel" }
	,{ rank : 112, name : "Christine Taylor", gender : "female", knownFor : "Dodgeball: A True Underdog Story" }
	,{ rank : 113, name : "Emily Ratajkowski", gender : "female", knownFor : "Gone Girl" }
	,{ rank : 114, name : "Danai Gurira", gender : "female", knownFor : "The Visitor" }
	,{ rank : 115, name : "Lily Collins", gender : "female", knownFor : "The Mortal Instruments: City of Bones" }
	,{ rank : 116, name : "Adrianne Palicki", gender : "female", knownFor : "John Wick" }
	,{ rank : 117, name : "Angelina Jolie", gender : "female", knownFor : "Maleficent" }
	,{ rank : 118, name : "Odeya Rush", gender : "female", knownFor : "Goosebumps" }
	,{ rank : 119, name : "Gemma Arterton", gender : "female", knownFor : "Prince of Persia: The Sands of Time" }
	,{ rank : 120, name : "Mackenzie Davis", gender : "female", knownFor : "The Martian" }
	,{ rank : 121, name : "Taylor Swift", gender : "female", knownFor : "Soundtrack, The Hunger Games" }
	,{ rank : 122, name : "Robin Wright", gender : "female", knownFor : "Forrest Gump" }
	,{ rank : 123, name : "Emmy Rossum", gender : "female", knownFor : "Pilot" }
	,{ rank : 124, name : "Merritt Wever", gender : "female", knownFor : "Birdman or (The Unexpected Virtue of Ignorance)" }
	,{ rank : 125, name : "Greer Grammer", gender : "female", knownFor : "Life Partners" }
	,{ rank : 126, name : "Vanessa Hudgens", gender : "female", knownFor : "High School Musical" }
	,{ rank : 127, name : "Kate Beckinsale", gender : "female", knownFor : "The Aviator" }
	,{ rank : 128, name : "Nicole Kidman", gender : "female", knownFor : "Moulin Rouge!" }
	,{ rank : 129, name : "Rachel Weisz", gender : "female", knownFor : "The Mummy" }
	,{ rank : 130, name : "Christina Hendricks", gender : "female", knownFor : "Smoke Gets in Your Eyes" }
	,{ rank : 131, name : "Bryce Dallas Howard", gender : "female", knownFor : "Jurassic World" }
	,{ rank : 132, name : "Rosamund Pike", gender : "female", knownFor : "Gone Girl" }
	,{ rank : 133, name : "Emily Bett Rickards", gender : "female", knownFor : "Brooklyn" }
	,{ rank : 134, name : "Kirsten Dunst", gender : "female", knownFor : "Spider-Man" }
	,{ rank : 135, name : "Alexis Bledel", gender : "female", knownFor : "Sin City" }
	,{ rank : 136, name : "Emily Browning", gender : "female", knownFor : "Sucker Punch" }
	,{ rank : 137, name : "Eva Green", gender : "female", knownFor : "Casino Royale" }
	,{ rank : 138, name : "Leslie Mann", gender : "female", knownFor : "Knocked Up" }
	,{ rank : 139, name : "Candace Cameron Bure", gender : "female", knownFor : "Some Kind of Wonderful" }
	,{ rank : 140, name : "Allie Grant", gender : "female", knownFor : "The Runaways" }
	,{ rank : 141, name : "Sarah Hyland", gender : "female", knownFor : "Another World" }
	,{ rank : 142, name : "Sophie Turner", gender : "female", knownFor : "Hardhome" }
	,{ rank : 143, name : "Mila Kunis", gender : "female", knownFor : "Black Swan" }
	,{ rank : 144, name : "Amy Lindsay", gender : "female", knownFor : "The Portrait of a Lady" }
	,{ rank : 145, name : "Carla Gugino", gender : "female", knownFor : "Night at the Museum" }
	,{ rank : 146, name : "Katie Cassidy", gender : "female", knownFor : "Taken" }
	,{ rank : 147, name : "Lizzy Caplan", gender : "female", knownFor : "Cloverfield" }
	,{ rank : 148, name : "Jenna Dewan Tatum", gender : "female", knownFor : "Step Up" }
	,{ rank : 149, name : "Kelly Carlson", gender : "female", knownFor : "The Marine" }
	,{ rank : 150, name : "Maggie Siff", gender : "female", knownFor : "The 5th Wave" }
	,{ rank : 151, name : "Anya Taylor-Joy", gender : "female", knownFor : "The VVitch: A New-England Folktale" }
	,{ rank : 152, name : "Melissa Rauch", gender : "female", knownFor : "The Bronze" }
	,{ rank : 153, name : "Hailee Steinfeld", gender : "female", knownFor : "True Grit" }
	,{ rank : 154, name : "Emily Osment", gender : "female", knownFor : "Hannah Montana: The Movie" }
	,{ rank : 155, name : "Zoe Saldana", gender : "female", knownFor : "Avatar" }
	,{ rank : 156, name : "Chanel Iman", gender : "female", knownFor : "Self, The Magic Gap" }
	,{ rank : 157, name : "Elle McLemore", gender : "female", knownFor : "At the Top of the Pyramid" }
	,{ rank : 158, name : "Anna Paquin", gender : "female", knownFor : "The Piano" }
	,{ rank : 159, name : "Tessa Thompson", gender : "female", knownFor : "Creed" }
	,{ rank : 160, name : "Caity Lotz", gender : "female", knownFor : "The Machine" }
	,{ rank : 161, name : "Sandra Bullock", gender : "female", knownFor : "Gravity" }
	,{ rank : 162, name : "Stephanie Leonidas", gender : "female", knownFor : "Mirrormask" }
	,{ rank : 163, name : "Sarah Wayne Callies", gender : "female", knownFor : "Into the Storm" }
	,{ rank : 164, name : "Jennifer Connelly", gender : "female", knownFor : "Requiem for a Dream" }
	,{ rank : 165, name : "Rose Byrne", gender : "female", knownFor : "X-Men: First Class" }
	,{ rank : 166, name : "Stockard Channing", gender : "female", knownFor : "Grease" }
	,{ rank : 167, name : "Laura Dern", gender : "female", knownFor : "Jurassic Park" }
	,{ rank : 168, name : "Marisa Tomei", gender : "female", knownFor : "The Wrestler" }
	,{ rank : 169, name : "Stephanie Beatriz", gender : "female", knownFor : "Short Term 12" }
	,{ rank : 170, name : "Selena Gomez", gender : "female", knownFor : "Hotel Transylvania" }
	,{ rank : 171, name : "Emily Kinney", gender : "female", knownFor : "It's Complicated" }
	,{ rank : 172, name : "Julia Stiles", gender : "female", knownFor : "The Bourne Ultimatum" }
	,{ rank : 173, name : "Julia Roberts", gender : "female", knownFor : "Notting Hill" }
	,{ rank : 174, name : "Dakota Fanning", gender : "female", knownFor : "War of the Worlds" }
	,{ rank : 175, name : "Gwendoline Christie", gender : "female", knownFor : "Star Wars - The Force Awakens" }
	,{ rank : 176, name : "Vera Farmiga", gender : "female", knownFor : "The Conjuring" }
	,{ rank : 177, name : "Tina Majorino", gender : "female", knownFor : "Napoleon Dynamite" }
	,{ rank : 178, name : "Renée Zellweger", gender : "female", knownFor : "Bridget Jones's Diary" }
	,{ rank : 179, name : "Eden Sher", gender : "female", knownFor : "Veronica Mars" }
	,{ rank : 180, name : "Rene Russo", gender : "female", knownFor : "Outbreak" }
	,{ rank : 181, name : "Elizabeth Banks", gender : "female", knownFor : "The Hunger Games" }
	,{ rank : 182, name : "Rachael Taylor", gender : "female", knownFor : "Transformers" }
	,{ rank : 183, name : "Cara Delevingne", gender : "female", knownFor : "Paper Towns" }
	,{ rank : 184, name : "Ashley Benson", gender : "female", knownFor : "Spring Breakers" }
	,{ rank : 185, name : "Marie Avgeropoulos", gender : "female", knownFor : "50/50" }
	,{ rank : 186, name : "Karen Gillan", gender : "female", knownFor : "Guardians of the Galaxy" }
	,{ rank : 187, name : "Helena Bonham Carter", gender : "female", knownFor : "Fight Club" }
	,{ rank : 188, name : "Christian Serratos", gender : "female", knownFor : "Twilight" }
	,{ rank : 189, name : "Kristen Bell", gender : "female", knownFor : "Frozen" }
	,{ rank : 190, name : "Salma Hayek", gender : "female", knownFor : "Frida" }
	,{ rank : 191, name : "Kat Dennings", gender : "female", knownFor : "Thor" }
	,{ rank : 192, name : "Ana de Armas", gender : "female", knownFor : "Knock Knock" }
	,{ rank : 193, name : "Felicity Jones", gender : "female", knownFor : "The Theory of Everything" }
	,{ rank : 194, name : "Zoey Deutch", gender : "female", knownFor : "Vampire Academy" }
	,{ rank : 195, name : "Soleil Moon Frye", gender : "female", knownFor : "The Girls' Room" }
	,{ rank : 196, name : "Kate Hudson", gender : "female", knownFor : "How to Lose a Guy in 10 Days" }
	,{ rank : 197, name : "Nicola Peltz", gender : "female", knownFor : "Transformers: Age of Extinction" }
	,{ rank : 198, name : "Kaya Scodelario", gender : "female", knownFor : "Moon" }
	,{ rank : 199, name : "Lilly Singh", gender : "female", knownFor : "A Trip to Unicorn Island" }
	,{ rank : 200, name : "Maggie Smith", gender : "female", knownFor : "The Prime of Miss Jean Brodie" }
	,{ rank : 201, name : "Stephanie Corneliussen", gender : "female", knownFor : "Mr. Robot" }
	,{ rank : 202, name : "Téa Leoni", gender : "female", knownFor : "Jurassic Park III" }
	,{ rank : 203, name : "Amanda Seyfried", gender : "female", knownFor : "Les Misérables" }
	,{ rank : 204, name : "Bella Thorne", gender : "female", knownFor : "The DUFF" }
	,{ rank : 205, name : "Sofía Vergara", gender : "female", knownFor : "Four Brothers" }
	,{ rank : 206, name : "Milla Jovovich", gender : "female", knownFor : "The Fifth Element" }
	,{ rank : 207, name : "Julianne Moore", gender : "female", knownFor : "The Big Lebowski" }
	,{ rank : 208, name : "Rachael Harris", gender : "female", knownFor : "The Hangover" }
	,{ rank : 209, name : "Maisie Williams", gender : "female", knownFor : "Hardhome" }
	,{ rank : 210, name : "Rose McIver", gender : "female", knownFor : "The Lovely Bones" }
	,{ rank : 211, name : "Birgitte Hjort Sørensen", gender : "female", knownFor : "Automata" }
	,{ rank : 212, name : "Emma Roberts", gender : "female", knownFor : "We're the Millers" }
	,{ rank : 213, name : "Winona Ryder", gender : "female", knownFor : "Edward Scissorhands" }
	,{ rank : 214, name : "Mia Wasikowska", gender : "female", knownFor : "Alice in Wonderland" }
	,{ rank : 215, name : "Anna Chlumsky", gender : "female", knownFor : "My Girl" }
	,{ rank : 216, name : "Charlotte Ross", gender : "female", knownFor : "Drive Angry" }
	,{ rank : 217, name : "Katherine Heigl", gender : "female", knownFor : "Knocked Up" }
	,{ rank : 218, name : "Naomi Grossman", gender : "female", knownFor : "Burka Girls Gone Wild" }
	,{ rank : 219, name : "Abigail Breslin", gender : "female", knownFor : "Little Miss Sunshine" }
	,{ rank : 220, name : "Reese Witherspoon", gender : "female", knownFor : "Walk the Line" }
	,{ rank : 221, name : "Kim Novak", gender : "female", knownFor : "Vertigo" }
	,{ rank : 222, name : "Meg Ryan", gender : "female", knownFor : "Sleepless in Seattle" }
	,{ rank : 223, name : "Laura Prepon", gender : "female", knownFor : "Karla" }
	,{ rank : 224, name : "Sarah Michelle Gellar", gender : "female", knownFor : "Cruel Intentions" }
	,{ rank : 225, name : "Sasha Alexander", gender : "female", knownFor : "Yes Man" }
	,{ rank : 226, name : "Abigail Spencer", gender : "female", knownFor : "Cowboys & Aliens" }
	,{ rank : 227, name : "Tilda Swinton", gender : "female", knownFor : "Adaptation." }
	,{ rank : 228, name : "Julie Benz", gender : "female", knownFor : "Dexter" }
	,{ rank : 229, name : "Olivia Taylor Dudley", gender : "female", knownFor : "Chernobyl Diaries" }
	,{ rank : 230, name : "Cobie Smulders", gender : "female", knownFor : "The Avengers" }
	,{ rank : 231, name : "Elodie Yung", gender : "female", knownFor : "G.I. Joe: Retaliation" }
	,{ rank : 232, name : "Jessica Parker Kennedy", gender : "female", knownFor : "50/50" }
	,{ rank : 233, name : "Yvonne Strahovski", gender : "female", knownFor : "I, Frankenstein" }
	,{ rank : 234, name : "Analeigh Tipton", gender : "female", knownFor : "Crazy, Stupid, Love." }
	,{ rank : 235, name : "Sarah Gadon", gender : "female", knownFor : "Dracula Untold" }
	,{ rank : 236, name : "AnnaSophia Robb", gender : "female", knownFor : "Bridge to Terabithia" }
	,{ rank : 237, name : "Zooey Deschanel", gender : "female", knownFor : "Elf" }
	,{ rank : 238, name : "Jennifer Carpenter", gender : "female", knownFor : "Dexter" }
	,{ rank : 239, name : "Carey Mulligan", gender : "female", knownFor : "Drive" }
	,{ rank : 240, name : "Taryn Manning", gender : "female", knownFor : "8 Mile" }
	,{ rank : 241, name : "Mireille Enos", gender : "female", knownFor : "World War Z" }
	,{ rank : 242, name : "Claire Danes", gender : "female", knownFor : "Temple Grandin" }
	,{ rank : 243, name : "Meryl Streep", gender : "female", knownFor : "The Devil Wears Prada" }
	,{ rank : 244, name : "Kim Basinger", gender : "female", knownFor : "Batman" }
	,{ rank : 245, name : "Melanie Griffith", gender : "female", knownFor : "Working Girl" }
	,{ rank : 246, name : "Sarah Clarke", gender : "female", knownFor : "Twilight" }
	,{ rank : 247, name : "Ellen Page", gender : "female", knownFor : "Inception" }
	,{ rank : 248, name : "Joey King", gender : "female", knownFor : "Crazy, Stupid, Love." }
	,{ rank : 249, name : "Jena Malone", gender : "female", knownFor : "Contact" }
	,{ rank : 250, name : "Hayden Panettiere", gender : "female", knownFor : "Racing Stripes" }
]

var maleActors = [];
var femaleActors = [];

for(i = 0; i < actors.length; i++) {
	var actor = actors[i];
	if (actor.gender === "male") {
		maleActors.push(actor);
	}
	else if (actor.gender === "female") {
		femaleActors.push(actor);
	}
}

function getRandomActor() {
	var actor = getRandomElement(actors);
	return formatNameAndKnownFor(actor);
}

function getRandomMaleActor() {
	var actor = getRandomElement(maleActors);
	return formatNameAndKnownFor(actor);
}

function getRandomFemaleActor() {
	var actor = getRandomElement(femaleActors);
	return formatNameAndKnownFor(actor);
}
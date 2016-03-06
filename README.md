```html
<html>
<head>
  <meta charset="UTF-8">
  <link rel="stylesheet" type="text/css" href="styles.css">
  <script type="text/javascript" src="util.js"></script>
  <script type="text/javascript" src="actors.js"></script>
  <script type="text/javascript" src="directors.js"></script>
  <script type="text/javascript" src="genres.js"></script>
  <script type="text/javascript" src="themes.js"></script>
  <script type="text/javascript" src="tropes.js"></script>
  <script type="text/javascript">  
    function clearAll() {
	
		document.getElementById('director').value = '';
		document.getElementById('genre').value = '';
		document.getElementById('actor1').value = '';
		document.getElementById('actor2').value = '';
		document.getElementById('actor3').value = '';
		document.getElementById('actor4').value = '';
		document.getElementById('genre').value = '';
		document.getElementById('subgenre').value = '';
		document.getElementById('trope').value = '';
		document.getElementById('theme').value = '';
	}
	
	function randomAll() {
		document.getElementById('director').value = getRandomDirector();
		document.getElementById('genre').value = getRandomElement(Object.keys(genres));
		document.getElementById('actor1').value = getRandomActor();
		document.getElementById('actor2').value = getRandomActor();
		document.getElementById('actor3').value = getRandomActor();
		document.getElementById('actor4').value = getRandomActor();
		document.getElementById('genre').value = getRandomElement(Object.keys(genres));
		document.getElementById('subgenre').value = getRandomElement(genres[genre.value]);
		document.getElementById('trope').value = getRandomTrope();
		document.getElementById('theme').value = getRandomTheme();
	}
  </script>
</head>

<body>

	<h1>Pitch Me!</h1>
	<h2>A movie idea party game</h2>

	<fieldset>
		<legend>How to Play</legend>
		<textarea disabled="disabled">
			
			<ol>
			  <li>Click on the [? All] button</li>
			  <li>To change a line, click on the [?] button beside it</li>
			  <li>To clear a line, click on the [-] button beside it</li>
			  <li>Create a plot summary, twist and title</li>
			  <li>Repeat</li>
			</ol>
		</textarea>
	</fieldset>
	
	<button onclick="randomAll();">? All</button>
	<button onclick="clearAll();">- All</button>

	
	<fieldset>
		<legend>Director</legend>
		<input type="text" id="director">
		<button onclick="document.getElementById('director').value = getRandomDirector();">?</button>
		<button onclick="document.getElementById('director').value = '';">-</button>
	</fieldset>

	
	<fieldset>
		<legend>Cast</legend>

		<input type="text" id="actor1">
		<button onclick="document.getElementById('actor1').value = getRandomActor();">?</button>
		<button onclick="document.getElementById('actor1').value = getRandomMaleActor();">M</button>
		<button onclick="document.getElementById('actor1').value = getRandomFemaleActor();">F</button>
		<button onclick="document.getElementById('actor1').value = '';">-</button>

		<input type="text" id="actor2">
		<button onclick="document.getElementById('actor2').value = getRandomActor();">?</button>
		<button onclick="document.getElementById('actor2').value = getRandomMaleActor();">M</button>
		<button onclick="document.getElementById('actor2').value = getRandomFemaleActor();">F</button>
		<button onclick="document.getElementById('actor2').value = '';">-</button>

		<input type="text" id="actor3">
		<button onclick="document.getElementById('actor3').value = getRandomActor();">?</button>
		<button onclick="document.getElementById('actor3').value = getRandomMaleActor();">M</button>
		<button onclick="document.getElementById('actor3').value = getRandomFemaleActor();">F</button>
		<button onclick="document.getElementById('actor3').value = '';">-</button>

		<input type="text" id="actor4">
		<button onclick="document.getElementById('actor4').value = getRandomActor();">?</button>
		<button onclick="document.getElementById('actor4').value = getRandomMaleActor();">M</button>
		<button onclick="document.getElementById('actor4').value = getRandomFemaleActor();">F</button>
		<button onclick="document.getElementById('actor4').value = '';">-</button>

	</fieldset>

	<fieldset>
		<legend>Genre</legend>
		<input type="text" id="genre">
		<button onclick="document.getElementById('genre').value = getRandomElement(Object.keys(genres));">?</button>
		<button onclick="document.getElementById('genre').value = '';">-</button>

		<input type="text" id="subgenre">
		<button onclick="document.getElementById('subgenre').value = getRandomElement(genres[genre.value]);">?</button>
		<button onclick="document.getElementById('subgenre').value = '';">-</button>
	</fieldset>	


	<fieldset>
		<legend>Trope</legend>
		<input type="text" id="trope">
		<button onclick="document.getElementById('trope').value = getRandomTrope();">?</button>
		<button onclick="document.getElementById('trope').value = '';">-</button>
	</fieldset>	

	<fieldset>
		<legend>Theme</legend>
		<input type="text" id="theme">
		<button onclick="document.getElementById('theme').value = getRandomTheme();">?</button>
		<button onclick="document.getElementById('theme').value = '';">-</button>
	</fieldset>
	
	<fieldset>
		<legend>Plot Summary</legend>
		<textarea id="plotSummary" rows=1 cols=80></textarea>
	</fieldset>

	<fieldset>
		<legend>Twist</legend>
		<textarea id="twist" rows=1  cols=80></textarea>
	</fieldset>

	<fieldset>
		<legend>Title</legend>
		<textarea id="title" rows=1  cols=80></textarea>
	</fieldset>
	
  <!--TODO: add radio buttons for generating the plot and the twist, with 2-3 options for each to determine what to generate -->
  
  </div><!-- end main -->
</body>


</html>


```

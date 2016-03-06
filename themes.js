var themes = [
	 "Man vs Himself" 
	,"Loss of Innocence" 
	,"Revenge" 
	,"Death as a Part of Life" 
	,"The Battle" 
	,"Individual vs. Society" 
	,"Triumph over Adversity" 
	,"Love Conquers All" 
	,"Good vs. Evil" 
]

function getRandomTheme() {
	var theme = getRandomElement(themes);
	return theme;
}
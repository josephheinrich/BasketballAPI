//MARCH MADNESS JS


//CAROUSEL INTERVAL
$(document).ready(function() {
$('.carousel').carousel({
  interval: 10000
})
});




function call() {

var xmlhttp = new XMLHttpRequest();


xmlhttp.onload = function() {
  if (this.readyState == 4 && this.status == 200) {
    var myObj = JSON.parse(this.responseText);
    
    console.log(myObj);
    
    var currentGames = myObj["result"];
    
    var i;   
	for (i=0; i < currentGames.length; i++) {

		
		//Splitting current score into: home score && away score
		var scores = (currentGames[i]["event_final_result"]).split(" - ");
		var homeScore = scores[0];
		var awayScore = scores[1];
		
		//Getting team names
		var homeTeam = currentGames[i]["event_home_team"];
		var awayTeam = currentGames[i]["event_away_team"];
		
		//Game counter
		var gameCounter = [i];
		
		//var Teams = $("#Teams");
		//var row = Teams.insertRow(i);
		//var cell1 = row.insertCell(0);
		
		

		
		console.log("GAME" + gameCounter);
		console.log(homeTeam + " " + homeScore + "  :  " + awayScore + " " + awayTeam);
		console.log(" ");
		
		
		//MAKE INSERTION ADD A CELL -- DONT HAVE PREMADE EMPTY TABLE CELLS
		
		//setTimeout(call, 5000);
		
	}
	
	var game1 = $("#game1");
	var team1 = $("#team1");
	game1.text(currentGames["0"]["event_final_result"]);
	team1.text(currentGames["0"]["event_home_team"] + " vs. " + currentGames["0"]["event_away_team"])
  }
};

const apiKey="b3382d3e13335d0559e3092434ec11765c9759f5c3d75d524459363f7358efd2";
const baseurl = "https://allsportsapi.com/api/basketball/?met=Livescore&APIkey="+apiKey;
const countryKey = "252";
const leagueKey = "787";
const nbaurl = baseurl+"&leagueId="+leagueKey;


xmlhttp.open("GET", nbaurl, true);
xmlhttp.send();
}



call();




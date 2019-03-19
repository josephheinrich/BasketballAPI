//MARCH MADNESS JS


//CAROUSEL INTERVAL
$(document).ready(function() {
$('.carousel').carousel({
  interval: 10000
})
});



function call() {
	
const apiKey="b3382d3e13335d0559e3092434ec11765c9759f5c3d75d524459363f7358efd2";
const baseurl = "https://allsportsapi.com/api/basketball/?met=Livescore&APIkey="+apiKey;
const countryKey = "252";
const leagueKey = "787";
const nbaurl = baseurl+"&leagueId="+leagueKey;
const table = $('#bannerTable');

fetch(nbaurl)
.then(res => res.json())
.then(function(data) {
	var i;
	var gameData = data["result"];
	if (gameData.length > 0) {
		for (i=0; i < gameData.length; i++) {
			
			//Splitting current score into: home score && away score
			var scores = (gameData[i]["event_final_result"]).split(" - ");
			var homeScore = scores[0];
			var awayScore = scores[1];
			
			//Getting team names
			var homeTeam = gameData[i]["event_home_team"];
			var awayTeam = gameData[i]["event_away_team"];
			
			//Game counter
			var gameCounter = [i];
			
			//Log game data
			console.log("GAME" + gameCounter);
			console.log(homeTeam + " " + homeScore + "  :  " + awayScore + " " + awayTeam);
			console.log(" ");
			
			//Get row to store data in
			var teamScores = document.getElementById("teamScores");
		
			//Append data to row
			teamScores.innerHTML += ("<th>" + homeTeam + "<br>" + awayTeam + "</th><th>" 
			+ homeScore + "<br>" + awayScore + "</th>");
			
			
		}
	} else {
		console.log("Currently there are no games"); //ADD next game starts at x:xx
		$("#noGames").text("Next game starts at: ")
	}
})

.catch(function(error) {
	console.log(error);
}) 

}

call();


//$(document).ready(function(){
//	setInterval(call,5000);
//});



const apiKey="b3382d3e13335d0559e3092434ec11765c9759f5c3d75d524459363f7358efd2";
const baseurl = "https://allsportsapi.com/api/basketball/?met=Livescore&APIkey="+apiKey;
const countryKey = "252";
const leagueKey = "787";
const nbaurl = baseurl+"&leagueId="+leagueKey;
const table = $('#bannerTable');

fetch(nbaurl)
.then(res => res.json())
.then(data => console.log(data["result"]));






// var xmlhttp = new XMLHttpRequest();
// xmlhttp.open("GET", nbaurl, true);
// xmlhttp.timeout = 5000;



// xmlhttp.onload = function() {
  // if (this.readyState == 4 && this.status == 200) {
    // var myObj = JSON.parse(this.responseText);
    
    // console.log(myObj);
    
    // var currentGames = myObj["result"];
    
    // var i;   
	// for (i=0; i < currentGames.length; i++) {

		
		// //Splitting current score into: home score && away score
		// var scores = (currentGames[i]["event_final_result"]).split(" - ");
		// var homeScore = scores[0];
		// var awayScore = scores[1];
		
		// //Getting team names
		// var homeTeam = currentGames[i]["event_home_team"];
		// var awayTeam = currentGames[i]["event_away_team"];
		
		// //Game counter
		// var gameCounter = [i];
		

		
		// console.log("GAME" + gameCounter);
		// console.log(homeTeam + " " + homeScore + "  :  " + awayScore + " " + awayTeam);
		// console.log(" ");
		
		
		// //MAKE INSERTION ADD A CELL -- DONT HAVE PREMADE EMPTY TABLE CELLS
		
		// //setTimeout(call, 5000);
		
	// }
	
  // }
  
// }

// xmlhttp.send();











$(document).ready(function(){
	

 	var count = 0;
 	var counter;
 	var stoppedValue = 0;  
 	

 	function go() {
 		console.log("hi!");
 	}
	
	function timer() {
		  count=count-1;
		  if (count <= 0)
		  {
		  	document.getElementById("timer").innerHTML= "0:00";
		  	document.getElementById("timer").style.color="#333";
		     clearInterval(counter);
		     var audio = new Audio('timer.wav');
				audio.play();
		     return;
		  }
		  var minutes = parseInt(count/60); 
		  var seconds = count%60;
		  if(minutes == 2 && seconds == 0 ) {
		  	var audio = new Audio('TwoMinute.mp3');
			audio.play();
		  }
		  if(minutes == 1 && seconds == 0 ) {
		  	var audio = new Audio('OneMinute.mp3');
			audio.play();
		  }
		  if(minutes == 0 && seconds == 30 ) {
		  	var audio = new Audio('thirty.mp3');
			audio.play();
		  }
		  if(minutes == 0 && seconds == 10 ) {
		  	var audio = new Audio('ten.mp3');
			audio.play();
		  }
		  if(minutes == 0 && seconds < 30) {
		  	document.getElementById("timer").style.color="#FFC738";
		  }
		  if(minutes == 0 && seconds < 10) {
		  	document.getElementById("timer").style.color="#a94442";
		  }

		  if(seconds < 10){
		  	seconds = "0" + seconds;
		  }
		 document.getElementById("timer").innerHTML= minutes + ":" + seconds; // watch for spelling
	}

	function customTime() {
		clearInterval(counter);
		count = document.getElementById('timerTime').value;
		counter=setInterval(timer, 1000); //1000 will  run it every 1 second
		document.getElementById("timer").style.color="#333";
		
	}

	 function fiveMinutes() {
	 		
			clearInterval(counter);
			count=300;
			counter=setInterval(timer, 1000); //1000 will  run it every 1 second
			document.getElementById("timer").style.color="#333";
		}

	function twoMinutes() {
		document.getElementById("timer").style.color="#333";
		clearInterval(counter);
		count=120;
		counter=setInterval(timer, 1000); //1000 will  run it every 1 second
		document.getElementById("timer").style.color="#333";
	}

	function updateTeams() {
		var update1 = document.getElementById('onDeckTeam').innerHTML;
		document.getElementById("teams").innerHTML= update1;

		var update2 = document.getElementById('prepTeam').innerHTML;
		document.getElementById("onDeckTeam").innerHTML= update2;
		
		var update3 = document.getElementById('teamsToUpdate').value;
		document.getElementById("prepTeam").innerHTML= update3;
	}

	function swapOrder() {
		var update1 = document.getElementById('prepTeam').innerHTML;
		var update2 = document.getElementById('onDeckTeam').innerHTML;
		
		document.getElementById("onDeckTeam").innerHTML= update1;
		document.getElementById("prepTeam").innerHTML= update2;
	}

	function updatePerforming() {
		var update = document.getElementById('performingTeamsToUpdate').value;
		document.getElementById("teams").innerHTML= update;
	}
	
	function updateOnDeck() {
		var update = document.getElementById('onDeckTeamToUpdate').value;
		document.getElementById("onDeckTeam").innerHTML= update;
	}
	
	function updatePrepping() {
		var update = document.getElementById('performingTeamsToUpdate').value;
		document.getElementById("prepTeam").innerHTML= update;
	}

	function pause() {
		clearInterval(counter);
	}

	function resume() {
		clearInterval(counter);
		counter=setInterval(timer, 1000);
	}

	document.getElementById("fiveMinutes").onclick = fiveMinutes;
	document.getElementById("twoMinutes").onclick = twoMinutes; 
	document.getElementById("updateTeams").onclick = updateTeams;
	document.getElementById("swapTeams").onclick = swapOrder;
	document.getElementById("updatePerforming").onclick = updatePerforming;
	document.getElementById("updateOnDeck").onclick = updateOnDeck;
	document.getElementById("updatePrepping").onclick = updatePrepping;
	document.getElementById("pause").onclick = pause; 
	document.getElementById("resume").onclick = resume; 
	document.getElementById("updateTime").onclick = customTime;
});

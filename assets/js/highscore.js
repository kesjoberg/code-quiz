var highScoresList = document.getElementById("highScoresList");
var highScores = JSON.parse(localStorage.getItem("highScores"));
var highScoresPoints = highScores[0].score;
var highScoresInitials = highScores[0].initials;
var newListItem = document.createElement('l1');

displayHighScores();

function displayHighScores (){
  //Highest Score
  if (highScores[0] !== null){
    document.getElementById("topScore").textContent = highScores[0].initials + " "+ highScores[0].score;
  };
  //second highest score
  if (highScores[1] !== null){
    document.getElementById("secondScore").textContent = highScores[1].initials + " "+ highScores[1].score;
  };
  //third highest score
  if (highScores[2] !== null) {
    document.getElementById("thirdScore").textContent  = highScores[2].initials + " "+ highScores[2].score;
  };

  //fourth highest score
  if (highScores[3] !== null) {
    document.getElementById("fourthScore").textContent  = highScores[3].initials + " "+ highScores[3].score;
  };

  //fifth highest score
  if (highScores[4] !== null) {
    document.getElementById("fifthScore").textContent  = highScores[4].initials + " "+ highScores[4].score;
  };
}





var highScoresList = document.getElementById("highScoresList");
var highScores = JSON.parse(localStorage.getItem("highScores"));


displayHighScores();

function displayHighScores (){

  for (var i=0; i < highScores.length; i++){
    var currentHighScores= highScores[i];
    var list = document.createElement("LI");
    console.log(currentHighScores.initials);

    var addHighScore = currentHighScores.initials + " " + currentHighScores.score;
    list.innerHTML=addHighScore;
    highScoresList.appendChild(list);
    }
  
}





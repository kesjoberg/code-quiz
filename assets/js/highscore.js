var highScoresList = document.getElementById("highScoresList");
var highScores = JSON.parse(localStorage.getItem("userScore"));
var currentHighScore = highScores.currentScore;
var currentUser = highScores.userInitials;

let newListItem = document.createElement('l1');
newListItem.textContent = currentHighScore + " "+ currentUser;

highScoresList.appendChild(newListItem);



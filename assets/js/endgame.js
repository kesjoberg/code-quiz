var initials = document.querySelector("#initials");
var submitBtn = document.getElementById("submitBtn");
var finalScore = document.getElementById("finalScore");
var mostRecentScore = localStorage.getItem("mostRecentScore")
var insertScore = document.getElementById('score');

var highScores= JSON.parse(localStorage.getItem("highScores")) || [];

insertScore.textContent = mostRecentScore;

submitBtn.addEventListener("click", function(event){
  event.preventDefault();

  var scores={
    score: mostRecentScore,
    initials: initials.value
  };

  highScores.push(scores);

  highScores.sort(function(a, b) { b.score - a.score});
  highScores.splice(5);

  localStorage.setItem("highScores", JSON.stringify(highScores));

})






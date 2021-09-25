var highScoresList = document.getElementById("highScoresList");
var highScores = JSON.parse(localStorage.getItem("userScore"));

console.log(highScores);


highScores.map(score => {
  console.log( ${score,initials} - ${score,score} );
});

// highScoresList.innerHTML = highScores
//   .map(score => {
//     return'<li>$(score.name)-$(score.score)</li>';
//   })
//   .join("");
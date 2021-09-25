var timeEl = document.getElementById('countdown');
var secondsLeft = 40;
var questionEl = document.getElementById("currentQuestion");
var option1 = document.getElementById("option1");
var option2 = document.getElementById("option2");
var option3 = document.getElementById("option3");
var option4 = document.getElementById("option4");
var startQuiz = document.getElementById("startQuiz");
var startPage = document.getElementById("start-page");
var timeCounter = document.querySelector("li span");
var scores = document.getElementById("score");
var message = document.getElementById("check-answer");
var getInitials = document.querySelector("#initials");
var highScoreBtn = document.getElementById("hs-button");
var goToHighScoreBtn = document.getElementById("gths");

var timerInterval;
var score;
var questions =[ 
{
    question: "What does 'M' mean in HTML?", 
    answers :{
        a: "Management",
        b: "Markup",
        c: "Marker",
        d: "Markdown"
    },
    correctAnswer: "Markup"
},
{
    question: "We can use _______________ to save user information to a personal computer or device?", 
    answers :{
        a: "DOM",
        b: "HTML",
        c: "Console Logs",
        d: "Local Storage"
    },
    correctAnswer: "Local Storage"
},
{
    question: "We can use _______ to write functions our webpages operate.",
    answers :{
        a: "JavaScript",
        b: "HTML",
        c: "DOM",
        d: "CSS"
    },
    correctAnswer: "JavaScript"
},
{
    question: "Which file type would you expect to find all of the styling for a webpage?", 
    answers :{
        a: ".css",
        b: ".html",
        c: ".js",
        d: ".jpg"
    },
    correctAnswer: ".css"
},
{
    question: "In JavaScript, what is another name for a loop? ", 
    answers :{
        a: "variable",
        b: "function",
        c: "iteration",
        d: "selector"
    },
    correctAnswer: "iteration"
}
];

var currentQuestionIndex = 0;


startQuiz.addEventListener("click", function() {
    setTime();
    askQuestions();  

});

option1.addEventListener("click", function(event){
    checkAnswer(event.target.innerText);
    askQuestions();
});
option2.addEventListener("click", function(event){
    checkAnswer(event.target.innerText);
    askQuestions();
});
option3.addEventListener("click", function(event){
    checkAnswer(event.target.innerText);
    askQuestions();
});
option4.addEventListener("click", function(event){
    checkAnswer(event.target.innerText);
    askQuestions();
});




function askQuestions() {
    // the following will stop displaying the first page and display the questions.
    document.getElementById('startQuiz').style.display='none';
    document.getElementById('startPage').style.display='none';
    document.querySelector(".questions").style.display="block";
  
    if (currentQuestionIndex < questions.length){
        var currentQuestion = questions[currentQuestionIndex];
        questionEl.textContent = currentQuestion.question;
        option1.innerHTML = currentQuestion.answers.a;
        option2.innerHTML = currentQuestion.answers.b;
        option3.innerHTML = currentQuestion.answers.c;
        option4.innerHTML = currentQuestion.answers.d;
        currentQuestionIndex++;
    } else {
        endQuiz();
    }    
}

function checkAnswer(userChoice) {
    if (questions[currentQuestionIndex-1].correctAnswer === userChoice){
        message.textContent = "You're Correct!"
        console.log("correct");
    } else {
        message.textContent = "Wrong Answer"
        secondsLeft = secondsLeft - 5;
        // timerInterval.innerHTML = secondsLeft; 
        console.log("wrong");
        // askQuestions();
    }
}
function setTime() {
    // Sets interval in variable
    timerInterval = setInterval(function() {
      secondsLeft--;
      timeCounter.textContent = secondsLeft; 
  
      if(secondsLeft <= 0) {
        timeCounter.textContent = 0;
        // Stops execution of action at set interval
        clearInterval(timerInterval);
        // Calls function to end quiz if time runs out
        endQuiz();
      }
  
    }, 1000);
    
  }



function endQuiz() {
    document.getElementById('startQuiz').style.display='none';
    document.getElementById('startPage').style.display='none';
    document.querySelector(".questions").style.display="none";
    document.getElementById('results').style.display='block';

    score= secondsLeft;
    scores.textContent = score;
    clearInterval(timerInterval);
    
    
}

highScoreBtn.addEventListener("click", function(event){
    event.preventDefault();  
        var userScore ={
        currentScore: score,
        userInitials: getInitials.value
    };
    
    localStorage.setItem("userScore", JSON.stringify(userScore));

});





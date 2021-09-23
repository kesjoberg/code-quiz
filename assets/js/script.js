var timeEl = document.getElementById('countdown');
var secondsLeft = 40;
var questionEl = document.getElementById("currentQuestion");
var option1 = document.getElementById("option1");
var option2 = document.getElementById("option2");
var option3 = document.getElementById("option3");
var option4 = document.getElementById("option4");
var startQuiz = document.getElementById("startQuiz");
var startInfo = document.getElementById("startsection");

var questions =[ 
{
    question: "What does HTML mean?", 
    answers :{
        a: "Happy Text Management Learning",
        b: "High Test Mockup Language",
        c: "Hypertext Markdown Language",
        d: "Help, Teach Me Lots"
    },
    correctAnswer: "Hypertext Markdown Language"
},
{
    question: "Which is the proper symbol for a class on a CSS stylesheet?", 
    answers :{
        a: ".",
        b: "#",
        c: "<>",
        d: "/*"
    },
    correctAnswer: "#"
},
{
    question: "What does the 'M' in HTML represent?", 
    answers :{
        a: "materials",
        b: "management",
        c: "merge",
        d: "markdown"
    },
    correctAnswer: "markdown"
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
    question: "In JavaScript, what do you ", 
    answers :{
        a: "variable",
        b: "function",
        c: "iteration",
        d: "selector"
    },
    correctAnswer: "iteration"
}
];

var currentQuestionIndex = 0
// function beforeStart(){
//     startInfo.textContent = "Welcome to the Coding Game\n There are 5 multiple choice questions about coding. For every answer you get correct, you will earn 5 seconds and for every answer you answer wrong, you will lose 5 points. Your final score is the time remaining at the end fo the game.\n Click 'Start Game' to begin!!"
// }
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
    document.getElementById('startQuiz').style.visibility='hidden';
    document.getElementById('startsection').style.visibility='hidden';
    var currentQuestion = questions[currentQuestionIndex];
    questionEl.textContent = currentQuestion.question;
    option1.textContent = currentQuestion.answers.a;
    option2.innerHTML = currentQuestion.answers.b;
    option3.innerHTML = currentQuestion.answers.c;
    option4.innerHTML = currentQuestion.answers.d;
    currentQuestionIndex++;
}

function checkAnswer(userChoice) {
    if (questions[currentQuestionIndex-1].correctAnswer === userChoice){
        // correct
        console.log("correct");
    } else {
        // message you're wrong
        secondsLeft = secondsLeft - 5;
        timeEl.textContent = secondsLeft; 
    }
}
function setTime() {
    // Sets interval in variable
    var timerInterval = setInterval(function() {
      secondsLeft--;
      timeEl.textContent = secondsLeft; 
  
      if(secondsLeft <= 0) {
        timeEl.textContent = 0;
        // Stops execution of action at set interval
        clearInterval(timerInterval);
        // Calls function to create and append image
        endQuiz();
      }
  
    }, 1000);
    // beforeStart();
  }
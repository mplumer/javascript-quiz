var mainEl = document.querySelector('#main');
var newCard = document.querySelector('#newCard');
var startButton = document.querySelector('#start');
var answerButton = document.querySelectorAll(".answer-btn");
var button = document.getElementsByTagName('button');

var question1 = "The condition in an if/else statement is enclosed with ____.</h2>";
var answer1 = ["quotes", "curly brackets", "parentheses", "square brackets"];
var question2 = "Commonly used data types DO NOT include:";
var answer2 = ["strings", "booleans", "alerts", "numbers"];
var question3 = "A very useful tool used during development and debugging for printing content to the debugger is:";
var answer3 = ["JavaScript", "Terminal/Bash", "for loops", "console.log"];
var question4 = "String values must be enclodsed within __________ when being assigned to variables.";
var answer4 = ["commas", "curly brackets", "quotes", "parentheses"];
var question5 = "Arrays in JavaScript can be used to store __________";
var answer5 = ["numbers and strings", "other arrays", "booleans", "all of the above"];

/*var quizObj = {

}*/

/*var countDown = function () {
    var timeLeft = 5;
    //small timer for testing

    var timeInterval = setInterval(function () {
        if (timeLeft > 0) {
            timerButtonEl.textContent = timeLeft;
            timeLeft--;
        } else {
            clearInterval(timeInterval);
            alert("time is over!");
        };
    }, 1000);
    startGame();
};*/



var startQuiz = function (event) {
    event.preventDefault();
   // var newCard = document.getElementById("#newCard");
    //newCard.remove();
    createCard()

};

var createCard = function () {
    // create question 
    var questionEl = document.createElement("article");
    questionEl.className = "question";
    questionEl.innerHTML = "<h2>Commonly used data types DO NOT include:</h2>";

    // create answers
    var answer1El = document.createElement("button");
    answer1El.textContent = "1. alerts";
    answer1El.id = "answer1";
    answer1El.className = "answer-btn";
    var answer2El = document.createElement("button");
    answer2El.textContent = "2. booleans";
    answer2El.id = "answer2";
    answer2El.className = "answer-btn";
    var answer3El = document.createElement("button");
    answer3El.textContent = "3. numbers";
    answer3El.id = "answer3";
    answer3El.className = "answer-btn";
    var answer4El = document.createElement("button");
    answer4El.textContent = "4. strings";
    answer4El.id = "answer4";
    answer4El.className = "answer-btn";

    questionEl.appendChild(answer1El);
    questionEl.appendChild(answer2El);
    questionEl.appendChild(answer3El);
    questionEl.appendChild(answer4El);

    mainEl.appendChild(questionEl);

    console.log(mainEl);
    //console.log(answer1El)
};


var checkAnswer = function (e) {
    if (e.target.classList.contains('answer-btn') && e.target.classList.contains('correct')) {
        alert("CORRECT!");
    } else if (e.target.id === 'start') {
        alert("QUIZ HAS BEGUN!");
    } else {
        alert("INCORRECT!");
    }
};

var gameOver = function () {

};

var highScore = function () {

};


startButton.addEventListener("click", startQuiz);

document.querySelector("#main").addEventListener('click', checkAnswer);
    
// pageContentEl.addEventListener("click", taskButtonHandler);

//startQuiz(e)
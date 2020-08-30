var mainEl = document.querySelector('#main');
var newCard = document.querySelector('#newCard');
var startButton = document.querySelector('#start');
var choiceButton = document.querySelector(".choice-btn");
var questionCard = document.querySelector('.question');
var timeLeft = 75;


function countDown() {
    var timeLeft = setInterval(function () {
        timeLeft--;
        document.getElementById("timer").innerHTML = "Time: " + timeLeft + "s ";
        if (timeLeft < 0) {
            clearInterval(timeLeft);
            document.getElementById("timer").innerHTML = "Time Up!";
        } else if (quiz.isEnded()) {
            clearInterval(timeLeft);
            document.getElementById("timer").innerHTML = "Quiz Complete!";
        };
    }, 1000)
}

// START QUIZ
var startQuiz = function (event) {
    newCard.remove();
    populate()
    countDown()
};

function Quiz(questions) {
    this.score = 0;
    this.questions = questions;
    this.questionIndex = 0;
}

Quiz.prototype.getQuestionIndex = function () {
    return this.questions[this.questionIndex];
}

Quiz.prototype.guess = function (answer) {
    if (this.getQuestionIndex().isCorrectAnswer(answer)) {
        this.score++;
    } else {
        timeLeft -= 10;
    }

    this.questionIndex++;
}

Quiz.prototype.isEnded = function () {
    return this.questionIndex === this.questions.length;
}


function Question(text, choices, answer) {
    this.text = text;
    this.choices = choices;
    this.answer = answer;
}

Question.prototype.isCorrectAnswer = function (choice) {
    return this.answer === choice;
}

function populate() {
    if (quiz.isEnded()) {
        gameOver();

    } else {

        // create question 
        var questionEl = document.createElement("article");
        questionEl.className = "question";
        questionEl.innerHTML = quiz.getQuestionIndex().text;
        mainEl.appendChild(questionEl);


        // create choice buttons
        var choices = quiz.getQuestionIndex().choices;
        for (var i = 0; i < choices.length; i++) {
            var choiceEl = document.createElement("button");
            choiceEl.id = "btn" + i;
            choiceEl.className = "button choice-btn";
            mainEl.appendChild(choiceEl);
            var spanEl = document.createElement("span");
            spanEl.id = "choice" + i;
            choiceEl.appendChild(spanEl);
            var element = document.getElementById("choice" + i);
            element.innerHTML = choices[i];
            guess("btn" + i, choices[i]);
        }
        //showProgress();
    }
};

function guess(id, guess) {
    var button = document.getElementById(id);
    button.onclick = function () {
        quiz.guess(guess);
        // after choosing, card is erased 
        var questionEl = document.querySelector(".question");
        mainEl.removeChild(questionEl);
        var choiceEl = document.querySelector("button");
        mainEl.removeChild(choiceEl);
        var choiceEl = document.querySelector("button");
        mainEl.removeChild(choiceEl);
        var choiceEl = document.querySelector("button");
        mainEl.removeChild(choiceEl);
        var choiceEl = document.querySelector("button");
        mainEl.removeChild(choiceEl);
        populate();
    }
};


// Get initials and score and send to local storage
var scores = [];
var submitButton = document.querySelector("#submit");
var scoreListEl = document.querySelector("#score-list");
var scoreEl = scores[0];
var initialsInput = document.querySelector('#initials');

var gameOver = function () {

    var scoreCard = document.createElement("article");
    scoreCard.id = "score-card-id";
    scoreCard.className = "score-card";
    mainEl.appendChild(scoreCard);
    var gameOverHTML = "<h3>All done!</h3>";
    gameOverHTML += "<p id='score'> Your final score is " + quiz.score + "</p>"
    gameOverHTML += "<form><label for='initials'>Enter initials: </label><input type='text' id='initials' name='initials' /><br><button id='btn'>Submit</button></form>"
    scoreCard.innerHTML = gameOverHTML;
    scores.push(quiz.score);
    var button = document.getElementById('btn');
    button.onclick = function () {
        event.preventDefault();

        var score = quiz.score
        var initials = document.querySelector('#initials').value;

        if (initials === "") {
            alert("Initials field cannot be blank! Try again.");

        } else {
            alert("Your score has been saved. Click on 'View High Scores' to see your rank!");

            localStorage.setItem('score', score);
            localStorage.setItem('initials', initials);
        }
    }
};

// create questions here
var questions = [
    new Question("Arrays in JavaScript can be used to store __________", ["numbers and strings", "other arrays", "booleans", "all of the above"], "all of the above"),
    new Question("Commonly used data types DO NOT include:", ["strings", "booleans", "alerts", "numbers"], "alerts"),
    new Question("A very useful tool used during development and debugging for printing content to the debugger is:", ["JavaScript", "Terminal/Bash", "for loops", "console.log"], "console.log"),
    new Question("String values must be enclosed within __________ when being assigned to variables.", ["commas", "curly brackets", "quotes", "parentheses"], "quotes"),
    new Question("The condition in an if/else statement is enclosed with __________.", ["quotes", "curly brackets", "parentheses", "square brackets"], "parentheses"),
];

// create quiz
var quiz = new Quiz(questions);

// display quiz
startButton.addEventListener("click", startQuiz);

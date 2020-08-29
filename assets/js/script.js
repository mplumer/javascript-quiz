var startBtn = document.querySelector("#start");
var answerBtn = document.querySelector(".btn")
var quizObj = {

}

var countDown = function () {
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
};



var startQuiz = function (event) {
    event.preventDefault();
    var startCard = document.getElementById("#startCard");
    
    createCard()

}

var createCard = function (quizObj) {
    // create question 
    var questionEl = document.createElement("article");
    questionEl.className = "question";
    questionEl.innerHTML = "<h2>Commonly used data types DO NOT include:</h2>";

    // create 
    var answer1El = document.createElement("btn");
    answer1El.textContent = "1. alerts";
    answer1El.id = "answer1";
    answer1El.className = "btn";
    var answer2El = document.createElement("btn");
    answer2El.textContent = "2. booleans";
    answer2El.id = "answer2";
    answer2El.className = "btn";
    var answer3El = document.createElement("btn");
    answer3El.textContent = "3. numbers";
    answer3El.id = "answer3";
    answer3El.className = "btn";
    var answer4El = document.createElement("btn");
    answer4El.textContent = "4. strings";
    answer4El.id = "answer4";
    answer4El.className = "btn";

    questionEl.appendChild(answer1El);
    questionEl.appendChild(answer2El);
    questionEl.appendChild(answer3El);
    questionEl.appendChild(answer4El);

    var mainEl = document.getElementById("#main");
    mainEl.appendChild(questionEl);

    console.log(mainEl);
    // console.log(answer1El)
}

var gameOver = function () {

}

var highScore = function () {

}




startBtn.addEventListener("click", startQuiz);
// pageContentEl.addEventListener("click", taskbtnHandler);

// startQuiz()
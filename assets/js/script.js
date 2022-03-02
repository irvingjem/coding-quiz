// Variables
var questionNumber = 0;
// Timer element 
var timerEl = $("#timer");
// Timer var
var timeLeft = 30;
var timeInterval;
// Score holder
var score;

var myQuestions = [{
        question: "Who invented JavaScript?",
        answers: {
            a: "Douglas Crockford",
            b: "Sheryl Sandberg",
            c: "Brendan Eich"
        },
        correctAnswer: "Brendan Eich"
    },
    {
        question: "Which one of these is a JavaScript package manager?",
        answers: {
            a: "Node.js",
            b: "TypeScript",
            c: "npm"
        },
        correctAnswer: "c"
    },
    {
        question: "Which tool can you use to ensure code quality?",
        answers: {
            a: "Angular",
            b: "jQuery",
            c: "ESLint"
        },
        correctAnswer: "c"
    }
];


// timer for each question
function countdown() {
    console.log("Hello tik tok", timeLeft, timerEl);
    if (timeLeft < 1) {
        displayMessage();
        timerEl.text("");
        endQuiz();
    } else {
        timerEl.text(timeLeft);
        timeLeft--;
    }
}

function startQuiz() {
    timeLeft = 30;
    //starting timer
    timeInterval = setInterval(countdown, 1000);
    //displaying questions
    updateQuestionTitles(questionNumber);
    console.log("quiz has started")
    $(".hide").removeClass("hide");
    //Hide the start screen 
    $("#quiz").addClass("hide");
    $("#results").addClass("hide")
};

function endQuiz() {
    // what ends the timer
    clearInterval(timeInterval);
    timerEl.text("");
    alert("Game Over !!");
    //show results 
    $("#results").removeClass("hide");
    //hide questions 
    $("#questions").addClass("hide");
}

function submitScore() {
    $("#results").addClass("hide");
    $("#quiz").removeClass("hide");

    //grab value from input field 
    var name = $("#player-name").val();

    localstorage.setItem(name, score);
}

// Loop function to replace text on BTNS
function updateQuestionTitles(questionNumber) {

    $("#question-title").text(myQuestions[questionNumber].question);

    console.log(myQuestions[questionNumber].answers.a)
    for (i = 0; i < 3; i++) {
        $("#answer1").text(myQuestions[questionNumber].answers.a)
        $("#answer2").text(myQuestions[questionNumber].answers.b)
        $("#answer3").text(myQuestions[questionNumber].answers.c)
    }
};

//needs to check answers, update score if possible
function checkAnswers() {
    //save answer given compare to correct answer 
    console.log("checkanswers running", $(this).text(), $(this))
    var answer = myQuestions[questionNumber].correctAnswer;
    console.log("answer", answer);

    //Check the answer 
    if ($(this).text() === answer) {
        score = score + 5; //add score 
    } else {
        timeLeft = timeLeft - 5; //penality of 5 secs 
    }

    //Ran out of questions then endQuiz else move to next question 
    if (questionNumber === myQuestions.length - 1) {
        endQuiz();
        //hide the 
    } else {
        questionNumber++ //Move to next index 
        updateQuestionTitles(questionNumber);
    }

    console.log("Questions ", myQuestions.length, "current question number ", questionNumber)
};

// $("$answers")

//Event Listeners
$("#start").click(startQuiz);
// console.log(startQuiz)
$(".choices").click(checkAnswers);
// Restarts and submits to local storage
$("#submit").click(submitScore);
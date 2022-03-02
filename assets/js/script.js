// Variables
var questionNumber = 0;
// var totalScore = 0;
var timerEl = $("#timer")

var myQuestions = [{
        question: "Who invented JavaScript?",
        answers: {
            a: "Douglas Crockford",
            b: "Sheryl Sandberg",
            c: "Brendan Eich"
        },
        correctAnswer: "c"
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

// Questions array


// timer for each question
function countdown() {
    var timeLeft = 60;

    var timeInterval = setInterval(function() {
        if (timeLeft < 1) {
            clearInterval(timeInterval);
            displayMessage();
            timerEl.textContent = "";
            endQuiz();
        } else {
            timerEl.textContent = timeLeft;
            timeLeft--;
        }
    }, 1000);

    // what ends the timer
    // clearInterval(timerEnd);
}

function startQuiz() {

    updateQuestionTitles(questionNumber);


    console.log("quiz has started")
    $(".hide").removeClass("hide");
};

// Loop function to replace text on BTNS
function updateQuestionTitles(questionNumber) {
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
    console.log(this)
    console.log("checkanswers running")
    var answer = myQuestions

    questionNumber++
    updateQuestionTitles(questionNumber);
};

// $("$answers")

//Event Listeners
$("#start").click(startQuiz)
    // console.log(startQuiz)
$(".choices").click(checkAnswers)
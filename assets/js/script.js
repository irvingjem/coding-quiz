// Variables
const quizContainer = document.getElementById('quiz');
const resultsContainer = document.getElementById('results');
const submitButton = document.getElementById('submit');

// on submit, show results, event listener
submitButton.addEventListener('click', showResults);

const myQuestions = [{
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
            c: "RequireJS",
            d: "ESLint"
        },
        correctAnswer: "d"
    }
];


// Functions
function buildQuiz() {
    // variable to store the HTML output
    const output = [];

    // for each question...
    myQuestions.forEach(
        (currentQuestion, questionNumber) => {

            // variable to store the list of possible answers
            const answers = [];

            // and for each available answer...
            for (letter in currentQuestion.answers) {

                // ...add an HTML radio button
                answers.push(
                    `<label>
              <input type="radio" name="question${questionNumber}" value="${letter}">
              ${letter} :
              ${currentQuestion.answers[letter]}
            </label>`
                );
            }

            // add this question and its answers to the output
            output.push(
                `<div class="question"> ${currentQuestion.question} </div>
          <div class="answers"> ${answers.join('')} </div>`
            );
        }
    );

    // combining output list into one string of HTML and put it on the page
    quizContainer.innerHTML = output.join('');
}

myQuestions.forEach((currentQuestion, questionNumber) => {
    // the code we want to run for each question goes here
    // we'll want to store the list of answer choices
    const answers = [];

    // and for each available answer...
    for (letter in currentQuestion.answers) {

        // ...add an html radio button
        answers.push(
            `<label>
      <input type="radio" name="question${questionNumber}" value="${letter}">
      ${letter} :
      ${currentQuestion.answers[letter]}
    </label>`
        );
    }

    // add this question and its answers to the output
    output.push(
        `<div class="question"> ${currentQuestion.question} </div>
  <div class="answers"> ${answers.join('')} </div>`
    );
});

function showResults() {

    // gather answer containers from our quiz
    const answerContainers = quizContainer.querySelectorAll('.answers');

    // keep track of user's answers
    let numCorrect = 0;

    // for each question...
    myQuestions.forEach((currentQuestion, questionNumber) => {

        // find selected answer
        const answerContainer = answerContainers[questionNumber];
        const selector = `input[name=question${questionNumber}]:checked`;
        const userAnswer = (answerContainer.querySelector(selector) || {}).value;

        // if answer is correct
        if (userAnswer === currentQuestion.correctAnswer) {
            // add to the number of correct answers
            numCorrect++;

            // color the answers green
            answerContainers[questionNumber].style.color = 'lightgreen';
        }
        // if answer is wrong or blank
        else {
            // color the answers red
            answerContainers[questionNumber].style.color = 'red';
        }
    });

    // show number of correct answers out of total
    resultsContainer.innerHTML = `${numCorrect} out of ${myQuestions.length}`;
}

// Calling the function
buildQuiz();


// for (var i = 1; i <= 6; i++) {
//     console.log(i);
// }


// // class work 2/17/2022

// // window. assumed when nothing is before
// setTimeout(function() {
//     console.log("From timeout");
// }, 2000);
// console.log("Outside of set timeout")


// // Good for a timer for a quiz
// var timer = 10;
// var timerInt = setInterval(function() {
//     timer--
//     console.log(timer--)
// }, 2000);

// clearInterval(timerInt)


// var timer = 10;
// var timerInt = setInterval(function() {
//     if (timer === 0) {
//         clearInterval(timerInt)
//     }
//     timer--
//     console.log(timer--)
// }, 1000); // if (timeLeft === 0) {
// //   clearInterval(timeInterval)
// // }
// // timeLeft--
// // console.log(timeLeft)
// // }, 1000);

// localStorage

// localStorage.setItem("fruit", "kiwi")

// localStorage.getItem("fruit")

// localStorage.setItem("zoo", ["panda", "tiger", "zebra"])

// localStorage.getItem("zoo")

// JSON.stringify(["panda", "tiger", "zebra"])

// JSON.parse(localStorage.getItem("zoo"))

// var newZoo = JSON.parse(localStorage.getItem("newZoo"))



// function printEvenNums() {
//     //get the start and end range from user
//     var start = parseInt(document.getElementById("start").value);
//     var end = parseInt(document.getElementById("end").value);
//     var evenNums = "<br>Even Numbers:<br>";

//     for (i = start; i <= end; i++) {
//         // let's divide the value by 2
//         // if the reminder is zero then it's an Even number
//         if (i % 2 == 0) {
//             evenNums += i + "<br>";
//         }
//     }
//     //print the values
//     document.getElementById("result").innerHTML = evenNums;
// }
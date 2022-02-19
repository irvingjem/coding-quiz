// for (var i = 1; i <= 6; i++) {
//     console.log(i);
// }


// class work 2/17/2022

// window. assumed when nothing is before
setTimeout(function() {
    console.log("From timeout");
}, 2000);
console.log("Outside of set timeout")


// Good for a timer for a quiz
var timer = 10;
var timerInt = setInterval(function() {
    timer--
    console.log(timer--)
}, 2000);

clearInterval(timerInt)


var timer = 10;
var timerInt = setInterval(function() {
    if (timer === 0) {
        clearInterval(timerInt)
    }
    timer--
    console.log(timer--)
}, 1000); // if (timeLeft === 0) {
//   clearInterval(timeInterval)
// }
// timeLeft--
// console.log(timeLeft)
// }, 1000);

localStorage

localStorage.setItem("fruit", "kiwi")

localStorage.getItem("fruit")

localStorage.setItem("zoo", ["panda", "tiger", "zebra"])

localStorage.getItem("zoo")

JSON.stringify(["panda", "tiger", "zebra"])

JSON.parse(localStorage.getItem("zoo"))

var newZoo = JSON.parse(localStorage.getItem("newZoo"))
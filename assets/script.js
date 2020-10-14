// Global Questions
var questions = [
  {
    question: "Which of the following are data types?",
    choices: ["strings", "numbers", "arrays", "all of the above"],
    answer: "all of the above"
  }
  {
    question: "How is JavaScript interpretted?",
    choices: ["Server", "Object", "Client", "None of the Above"],
    answer: "Client"
  }
  {
    question: "Which operator is used to assign a variable?",
    choices: ["+" , "=", "-", "*"],
    answer: "="
  }
  {
    question: "What was JavaScript formally known as?",
    choices: ["Mocha", "Hot Coffee", "Scribing", "Eich"],
    answer: "Mocha"
  }
  {
    question:"What does a for...loop repeat over?"
    choices: ["property names", ""]
    answer: 
  }
]






var startBtn = document.querySelector("#start")
// Set timer for 75 seconds 
var timeEl = document.querySelector(".time");
var mainEl = document.getElementById("main");

var secondsLeft = 75;

function setTime() {
  var timerInterval = setInterval(function() {
    secondsLeft--;
    timeEl.textContent = "Time: " + secondsLeft;

    if(secondsLeft === 0) {
      clearInterval(timerInterval);
      sendMessage();
    }

  }, 1000);
}

setTime();

// Set timer to start on click
startBtn.addEventListener("click", function() { 
    secondsLeft++;
    setCounterText();
  });
  
  startBtn.addEventListener("click", function() {
    if(secondsLeft > 0) {
      secondsLeft--;
      setCounterText();
    }
  }); 

//  create a start button
// start timer upon click
// 
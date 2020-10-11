
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
// startBtn.addEventListener("click", function() {
//     count++;
//     setCounterText();
//   });
  
//   startBtn.addEventListener("click", function() {
//     if(count > 0) {
//       count--;
//       setCounterText();
//     }
//   }); 
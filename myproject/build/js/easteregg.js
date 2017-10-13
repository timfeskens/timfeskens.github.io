var seconds = 10;
var correct = 0;

var countdown = setInterval(function(){ countDown() }, 1000);
function stopCountDown() {
    clearInterval(countdown);
}

function countDown() {
        document.getElementById("timer").innerHTML = "TYPE IN THE COLOR OF THE TEXT IN " + seconds + " SECONDS";
        if (seconds === 0) {
            lockUp();
            checkAnswers();
            stopCountDown();
            
        }
        else {
          seconds--;
          changeBackground();
        }
}
countDown();

function changeBackground() {
    setInterval (function(){
        if (seconds !== 0) {
            var x = Math.round( Math.random() * 255 );
            var y = Math.round( Math.random() * 255 );
            var z = Math.round( Math.random() * 255 );
            document.getElementById("game").style.backgroundColor = "rgb("+x+", "+y+", "+z+")";
        }
        else {
            document.getElementById("game").style.backgroundColor = "white";
            document.getElementById("game").style.border = "none";
            document.getElementById("game").style.boxShadow = "none";
        }
   }, 100);
}

function lockUp() {
    for (var i = 1; i <= 7; i++) {
        document.getElementById("q" + i).disabled = true;
    }   
}

function checkAnswers() {
    if (document.getElementById("q1").value.toLowerCase() == "green" || document.getElementById("q1").value.toLowerCase() == "groen") {
        document.getElementById("q1").value += " ✓"; //&#10003;
        correct++;
    }
    else {
        document.getElementById("q1").value += " ✗"; //&#10008;
    }
    if (document.getElementById("q2").value.toLowerCase() == "orange" || document.getElementById("q2").value.toLowerCase() == "oranje") {
        document.getElementById("q2").value += " ✓"; //&#10003;
        correct++;
    }
    else {
        document.getElementById("q2").value += " ✗"; //&#10008;
    }
    if (document.getElementById("q3").value.toLowerCase() == "blue" || document.getElementById("q3").value.toLowerCase() == "blauw") {
        document.getElementById("q3").value += " ✓"; //&#10003;
        correct++;
    }
    else {
        document.getElementById("q3").value += " ✗"; //&#10008;
    }
    if (document.getElementById("q4").value.toLowerCase() == "red" || document.getElementById("q4").value.toLowerCase() == "rood") {
        document.getElementById("q4").value += " ✓"; //&#10003;
        correct++;
    }
    else {
        document.getElementById("q4").value += " ✗"; //&#10008;
    }
    if (document.getElementById("q5").value.toLowerCase() == "purple" || document.getElementById("q5").value.toLowerCase() == "paars") {
        document.getElementById("q5").value += " ✓"; //&#10003;
        correct++;
    }
    else {
        document.getElementById("q5").value += " ✗"; //&#10008;
    }
    if (document.getElementById("q6").value.toLowerCase() == "black" || document.getElementById("q6").value.toLowerCase() == "zwart") {
        document.getElementById("q6").value += " ✓"; //&#10003;
        correct++;
    }
    else {
        document.getElementById("q6").value += " ✗"; //&#10008;
    }
    if (document.getElementById("q7").value == "yellow" || document.getElementById("q7").value == "geel") {
        document.getElementById("q7").value += " ✓"; //&#10003;
        correct++;
    }
    else {
        document.getElementById("q7").value += " ✗"; //&#10008;
    }
    document.getElementById("correct-answers").innerHTML = "You have " + correct + " of 7 correct!";
}
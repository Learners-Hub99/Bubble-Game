// creating variables
var time = document.querySelector("#time");
var timer = 60;
var score = 0;
var hitrn = 0;
var clutter = "";
var rnbubble;
var overDiv = document.getElementById('over');

// function to get new hit
function getNewHit() {
    hitrn = Math.floor(Math.random() * 10);
    document.querySelector("#hitval").textContent = hitrn;
}

// function to make new bubbles
function makeBubble() {
    // looping for creating bubble
    for (var i = 0; i < 78; i++) {
        rnbubble = Math.floor(Math.random() * 10);
        clutter += `<div id="bubble" class="flex">${rnbubble}</div>`;
    }
    //printing values in bubble
    document.querySelector('#bottom').innerHTML = clutter;
}

// function to collect score
function increaseScore() {
    score += 10;
    document.querySelector("#scoreval").textContent = score;
}

//function to compare clicked number
document.querySelector("#bottom").addEventListener("click", function (dets) {
    var clickNum = Number(dets.target.textContent);
    if (clickNum === hitrn) {
        increaseScore();
        getNewHit();
        makeBubble();
    }
})

// function to run timer
function runTimer() {
    var timerinterval = setInterval(function () {
        if (timer > 0) {
            timer--;
            time.textContent = timer;
        }else{
            clearInterval(timerinterval);
            document.querySelector("#bottom").innerHTML = "";
        }
    }, 1000)
}

// removeBubble();
//calling all functions
makeBubble();
runTimer();
getNewHit();
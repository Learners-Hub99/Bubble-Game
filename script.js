// creating variables
var clutter = "";
var time = document.querySelector("#time");
var timer = 60;
var score = 0;

// function to get new hit
function getNewHit(){
    var rn = Math.floor(Math.random() *10);
    document.querySelector("#hitval").textContent = rn;
}

// function to make new bubbles
function makeBubble(){
    // looping for creating bubble
    for(var i=0; i<65; i++){
        var rn = Math.floor(Math.random()*10);
        clutter += `<div id="bubble" class="flex">${rn}</div>`;
    }
    //printing values in bubble
    document.querySelector('#bottom').innerHTML = clutter;
}

// function to run timer
function runTimer(){
    var timerRuner = setInterval(function(){
        if(timer > 0){
            timer--;
            time.textContent = timer;
        } else {
            clearInterval(timerRunner);
        }
        }, 1000)
}


// function to collect score
function increaseScore(){
    score += 10;
    document.querySelector("#scoreval").textContent = score;
}



//calling all functions
makeBubble();
runTimer();
getNewHit();
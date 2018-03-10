//Global variables
var handle;
var ms = 0
var sec = 0;
var min = 0;
var i=1;

//Start and Stop button references
var stop = document.getElementById('stop');
var start = document.getElementById('start');

//When start is clicked
start.onclick = function () {
    //clear Inerval timer
    clearInterval(handle);
    //Set timer
    handle = setInterval(setTimer, 100);

    //Creter element for spit time function
    var newElement = document.createElement("p");
    var myText = document.createTextNode(`#${i}  ${min < 10 ? "0" + min : min}:${sec < 10 ? "0" + sec : sec}:${ms}`);
    newElement.appendChild(myText);

    //If split button is clicked display saved time
    if (start.innerHTML === 'Split'){
       var saved= document.getElementById('saved');
       saved.style.display="block";
       document.getElementById('new').appendChild(newElement);
        i++
    }

    //Dynamically change buttons
    stop.innerHTML = "Stop"
    start.innerHTML = "Split";   
}

//Set timer
function setTimer() {
    if (ms === 9) {
        ms = 0;
        sec++;
    }
    if (sec > 59) {
        sec = 0;
        min++;
    }

    //Display time
    document.getElementById('time').innerHTML = `<h1>${min < 10 ? "0" + min : min}:${sec < 10 ? "0" + sec : sec}:${ms}</h1>`;
    ms++;
}

//If stop button is clicked
document.getElementById('stop').onclick = function () {
    //clear interval
    clearInterval(handle);

    //Dynamically change split buttin to start
    start.innerHTML = 'Start';

    //reset if stop button pressed twice (Reset)
    if (stop.innerHTML === 'Reset') {
     reset(); 
    }

    //if stop clicked once change button to Reset
    stop.innerHTML = 'Reset';

}

//Reset timers and page
function reset(){
    clearInterval(handle);
    ms=0;min=0;sec=0;i=1;
    document.getElementById('time').innerHTML = `<h1>00:00:0</h1>`;
     var saved =  document.getElementById('saved')
    document.getElementById('new').innerHTML="";
     saved.style.display="none";

}





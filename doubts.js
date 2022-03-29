// What is data-key? Why we use them?
function showDetails(animal) {
    var animalType = animal.getAttribute("data-animal-type");
    alert("The " + animal.innerHTML + " is a " + animalType + ".");
}


// What does .play() Method do?
var music = document.getElementById("myAudio");

function playAudio() {
    music.play();
}

function pauseAudio() {
    music.pause();
}


// What does .currentTime do?
var vid = document.getElementById("myVideo");

function getCurrentTime() {
    alert(vid.currentTime);
}

function setCurrentTime() {
    vid.currentTime = 5;
}


// What does .classList.toggle() do ?
function myToggle() {
    var element = document.getElementById("myDiv");
    element.classList.toggle("myStyle");
}
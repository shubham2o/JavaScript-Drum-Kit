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
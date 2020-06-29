var totalScore = 0;
var interimScore = 0;
var finishedSongs = 0;
var failedSongs = 0;

var noteCuts = 0;
var noteMisses = 0;
var noteMaxCombo = 0;

const results = (() => {
    var results = document.getElementById("resultsDisplay");
    var cuts = document.getElementById("noteCuts");
    var misses = document.getElementById("noteMisses");
    var combo = document.getElementById("noteMaxCombo");
    var score = document.getElementById("songsScore");
    var complete = document.getElementById("songsComplete");
    var uncomplete = document.getElementById("songsUncomplete");
    
    function format(number) {
        return number.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    }

    return () => {
        cuts.innerHTML = format(noteCuts);
        misses.innerHTML = format(noteMisses);
        combo.innerHTML = format(noteMaxCombo);
        score.innerHTML = format(totalScore + interimScore);
        complete.innerHTML = format(finishedSongs);
        uncomplete.innerHTML = format(failedSongs);
    }

})();
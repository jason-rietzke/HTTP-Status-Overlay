const performance = (() => {
    var combo = document.getElementById("combo");
    var score = document.getElementById("score");
    var accuracy = document.getElementById("accuracy");
    var rank = document.getElementById("rank");
    var multiplier = document.getElementById("multiplier");

    function format(number) {
        return number.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    }

    return (data) => {
        if (data.passedNotes == 0) {
            clear();
        }else{
            combo.innerHTML = data.combo;
            score.innerHTML = format(data.score);
            accuracy.innerHTML = "(" + (data.currentMaxScore > 0 ? (Math.floor((data.score / data.currentMaxScore) * 1000) / 10) : 0) + "%)";
            rank.innerHTML = data.rank;
            multiplier.innerHTML = data.multiplier;
        }
    }

    function clear() {
        combo.innerHTML = "0";
        score.innerHTML = "0";
        accuracy.innerHTML = "(100%)";
        rank.innerHTML = "SS";
        multiplier.innerHTML = "0";
    }

})();

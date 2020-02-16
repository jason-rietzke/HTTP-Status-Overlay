const performance = (() => {
    var combo = document.getElementById("combo");
    var maxCombo = document.getElementById("maxCombo");
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
            interimScore = data.score;
            combo.innerHTML = format(data.combo);
            maxCombo.innerHTML = format(data.maxCombo);
            if (noteMaxCombo < data.maxCombo) {
                noteMaxCombo = data.maxCombo;
            }
            score.innerHTML = format(data.score);
            accuracy.innerHTML = "(" + (data.currentMaxScore > 0 ? (Math.floor((data.score / data.currentMaxScore) * 1000) / 10) : 0) + "%)";
            rank.innerHTML = data.rank;
            if (data.multiplier < 1) {
                multiplier.innerHTML = "1";
            }
            multiplier.innerHTML = data.multiplier;
        }
    }

    function clear() {
        interimScore = 0;
        combo.innerHTML = "0";
        combo.innerHTML = "0"
        score.innerHTML = "0";
        accuracy.innerHTML = "(100%)";
        rank.innerHTML = "SS";
        multiplier.innerHTML = "0";
    }

})();

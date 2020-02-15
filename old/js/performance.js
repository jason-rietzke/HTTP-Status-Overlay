const performance = (() => {
    var rank = document.getElementById("rank");
    var accuracy = document.getElementById("accuracy");
    var score = document.getElementById("score");
    var combo = document.getElementById("combo");

    function format(number) {
        return number.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    }

    return (data) => {
        if (data.passedNotes == 0) {
            clear();
        }else{
            rank.innerHTML = data.rank;
            accuracy.innerHTML = "(" + (data.currentMaxScore > 0 ? (Math.floor((data.score / data.currentMaxScore) * 1000) / 10) : 0) + "%)";
            score.innerHTML = format(data.score);
            combo.innerHTML = data.combo;
        }
    }

    function clear() {
        rank.innerHTML = "SS";
        accuracy.innerHTML = "(" + "100" + "%)";
        score.innerHTML = "0";
        combo.innerHTML = "0";
    }

})();

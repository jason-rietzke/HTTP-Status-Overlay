const beatmap = (() => {
    var cover = document.getElementById("cover");
    var title = document.getElementById("title");
    var subtitle = document.getElementById("subtitle");
    var author = document.getElementById("author");
    var mapper = document.getElementById("mapper");
    var difficulty = document.getElementById("difficulty");
    var bpm = document.getElementById("bpm");
    var njs = document.getElementById("njs");

    var timer = document.getElementById("timer");
    var timerBar = document.getElementById("timerBar");
    
    function format(number) {
        if (Number.isNaN(number)) {
            return "NaN";
        }
        if (Math.floor(number) !== number) {
            return number.toFixed(2);
        }
        return number.toString();
    }

    return (data) => {
        if (data.start == null) {
            clear();
        }else{
            if (data.difficulty === "ExpertPlus") {
                data.difficulty = "Expert+";
            }
            cover.setAttribute("src", `data:image/png;base64,${data.songCover}`);
            title.innerHTML = data.songName;
            subtitle.innerHTML = data.songSubName;
            author.innerHTML = data.songAuthorName;
            mapper.innerHTML = data.levelAuthorName;
            difficulty.innerHTML = data.difficulty;
            bpm.innerHTML = `${format(data.songBPM)} BPM`;
            njs.innerHTML = `${format(data.noteJumpSpeed)} NJS`;

            setTimer(data);
        }
    }

    function setTimer(data) {

        var sumMin = Math.floor(data.length % (1000 * 60 * 60) / (1000 * 60));
        var sumSec = Math.floor(data.length % (1000 * 60) / 1000);

        var now = new Date().getTime();
        var distance = now - data.start;// + data.paused;

        var min = Math.floor(distance % (1000 * 60 * 60) / (1000 * 60));
        var sec = Math.floor(distance % (1000 * 60) / 1000);

        timer.innerHTML = min + ":" + sec + "/" + sumMin + ":" + sumSec;

        timerBar.style.backgroundPositionX = ((data.length - 1) + distance)*100 + "%";
    }

    function clear() {
        cover.setAttribute("src", ``);
        title.innerHTML = "--";
        subtitle.innerHTML = "--";
        author.innerHTML = "--";
        mapper.innerHTML = "--";
        difficulty.innerHTML = "--";
        bpm.innerHTML = "-- BPM";
        njs.innerHTML = "-- NJS"

        timer.innerHTML = "0:00/0:00";
        timerBar.style.backgroundPositionX = "50%";
    }

})();

var start = 0;
var paused = false;
var pause = 0;
var pauseTime = 0;

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
        if (data == null) {
            clear();
        }else{
            if (data.difficulty === "ExpertPlus") {
                data.difficulty = "Expert+";
            }
            cover.setAttribute("src", `data:image/png;base64,${data.songCover}`);
            title.innerHTML = data.songName;
            subtitle.innerHTML = data.songSubName;

            author.innerHTML = data.songAuthorName;
            if (data.levelAuthorName == "") {
                mapper.innerHTML = data.songAuthorName;
            } else {
                mapper.innerHTML = data.levelAuthorName;
            }
            difficulty.innerHTML = data.difficulty;
            bpm.innerHTML = `${format(data.songBPM)} BPM`;
            njs.innerHTML = `${format(data.noteJumpSpeed)} NJS`;

            setTimer(data);
        }
    }

    function setTimer(data) {
/*
        var sumMin = Math.floor(data.length % (1000 * 60 * 60) / (1000 * 60));
        var sumSec = Math.floor(data.length % (1000 * 60) / 1000);

        if (sumSec < 10) {
            sumSec = "0" + sumSec;
        }

        timer.innerHTML = "0:00/" + sumMin + ":" + sumSec;
        timerBar.style.backgroundPositionX = 0*100 + "%";
*/
        (function runtimer(){
            if (!paused) {

                var sumMin = Math.floor(data.length % (1000 * 60 * 60) / (1000 * 60));
                var sumSec = Math.floor(data.length % (1000 * 60) / 1000);

                var now = new Date().getTime();
                var distance = (now - start) - pauseTime;
                
                var min = Math.floor(distance % (1000 * 60 * 60) / (1000 * 60));
                var sec = Math.floor(distance % (1000 * 60) / 1000);

                if (sec < 10) {
                    sec = "0" + sec;
                }
                
                timer.innerHTML = min + ":" + sec + "/" + sumMin + ":" + sumSec;
                timerBar.style.backgroundPositionX = ((1 - (distance/data.length))*100) + "%";
            }
            setTimeout(runtimer, 1000);
        })();
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

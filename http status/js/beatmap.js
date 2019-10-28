const beatmap = (() => {
    var cover = document.getElementById("cover");
    var title = document.getElementById("title");
    var subtitle = document.getElementById("subtitle");
    var author = document.getElementById("author");
    var mapper = document.getElementById("mapper");
    var difficulty = document.getElementById("difficulty");
    var bpm = document.getElementById("bpm");
    
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
        }
    }

    function clear() {
        cover.setAttribute("src", ``);
        title.innerHTML = "--";
        subtitle.innerHTML = "--";
        author.innerHTML = "--";
        mapper.innerHTML = "--";
        difficulty.innerHTML = "--";
        bpm.innerHTML = "--BPM";
    }

})();

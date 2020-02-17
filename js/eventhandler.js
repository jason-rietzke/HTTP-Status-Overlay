const events = {

    hello(data) {
        console.log("Connected to Beat Saber");
        results();
    },


    // song events
    songStart(data) {
        beatmap(data.beatmap);
        performance(data.performance);
        modifier(data.mod);
        ui.play();
        paused = false;
        var now = new Date().getTime();
        start = now;
        pause = 0;
        pauseTime = 0;
    },
    finished(data) {
        finnishedSongs += 1;
        interimScore = 0;
        totalScore += data.score;
        results();
    },
    failed(data) {
        failedSongs += 1;
        interimScore = 0;
        totalScore += data.score;
        results();
    },
    menu() {
        ui.menue();
        interimScore = 0;
        results();
    },
    pause() {
        ui.pause();
        paused = true;
        var now = new Date().getTime();
        pause = now;
        results();
	},
	resume() {
        ui.play();
        paused = false;
        var now = new Date().getTime();
        pauseTime = now - pause;
    },
    

    //note events
    noteCut(data) {
        noteCuts += 1;
    },
    noteFullyCut(data) {
    },
    noteMissed(data) {
        noteMisses += 1;
    },
    bombCut(data) {
    },
    bombMissed(data) {
    },
    obstacleEnter(data) {
    },
    obstacleExit(data) {
    },
    scoreChanged(data) {
        performance(data.performance);
    },


    //map event
    beatmapEvent(data) {
        //beatmap(data.beatmap);
    }
}

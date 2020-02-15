const events = {

    hello(data) {
        console.log("Connected to Beat Saber");
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
    finished() {
    },
    failed() {
    },
    menu() {
        ui.menue();
    },
    pause() {
        ui.pause();
        paused = true;
        var now = new Date().getTime();
        pause = now;
	},
	resume() {
        ui.play();
        paused = false;
        var now = new Date().getTime();
        pauseTime = now - pause;
    },
    

    //note events
    noteCut(data) {
    },
    noteFullyCut(data) {
    },
    noteMissed(data) {
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

const events = {

    hello(data) {
        console.log("Connected to Beat Saber");
        if (data.beatmap && data.performance) {
            beatmap(data.beatmap);
            performance(data.performance);
            modifier(data.mod);
        }
    },


    // song events
    songStart(data) {
        beatmap(data.beatmap);
        performance(data.performance);
        modifier(data.mod);
        ui.play();
        beatmap.paused = false;
        var now = new Date().getTime();
        beatmap.start = now;
        beatmap.pause = 0;
        beatmap.pauseTime = 0;
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
        beatmap.paused = true;
        var now = new Date().getTime();
        beatmap.pause = now;
	},
	resume() {
        ui.play();
        beatmap.paused = false;
        var now = new Date().getTime();
        beatmap.pauseTime = now - beatmap.pause;
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

const events = {

    hello(data) {
        console.log("Connected to Beat Saber");
        if (data.beatmap && data.performance) {
            beatmap(data.beatmap);
            performance(data.performance);
        }
    },


    // song events
    songStart(data) {
        beatmap(data.beatmap);
        performance(data.performance);
        ui.play();
        beatmap.paused = false;
        beatmap.start = new Date().getTime();
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
        beatmap.pause = new Date().getTime();
	},
	resume() {
        ui.play();
        beatmap.paused = false;
        beatmap.pauseTime = Date().getTime() - beatmap.pause;
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

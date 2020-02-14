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
	},
	resume() {
        ui.play();
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
        beatmap(data.beatmap);
    }
}

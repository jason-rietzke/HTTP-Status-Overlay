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
        ui.show();
    },
    finished() {
    },
    failed() {
    },
    menu() {
        ui.hide();
    },
    pause() {
        ui.dim();
	},
	resume() {
        ui.show();
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

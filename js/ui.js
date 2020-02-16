const ui = (() => {
	var overlay = document.getElementById("ui");
	var performance = document.getElementById("performanceDisplay");
	var beatmap = document.getElementById("beatmapDisplay");
	var modifier = document.getElementById("modifierDisplay");
	var results = document.getElementById("resultsDisplay");

	return {
		play() {
			//overlay.style.opacity = "1";
			performance.style.top = "20px";
			beatmap.style.right = "20px";
			if (modShow) {
				modifier.style.left = "20px";
			}
		},
		pause() {
			//overlay.style.opacity = "0.5";
			performance.style.top = "20px";
			beatmap.style.right = "20px";
			if (modShow) {
				modifier.style.left = "20px";
			}
		},
		menue() {
			//overlay.style.opacity = "1";
			performance.style.top = "-200px";
			beatmap.style.right = "-250px";
			modifier.style.left = "-250px";
		}
		
	}
})();
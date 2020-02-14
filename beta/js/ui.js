const ui = (() => {
	var overlay = document.getElementById("ui");
	return {
		hide() {
			overlay.classList.add("hidden");
			overlay.classList.remove("dim");
			overlay.classList.remove("shown");
		},
		dim() {
			overlay.classList.add("dim");
			overlay.classList.remove("hidden");
			overlay.classList.remove("shown");
		},
		show() {
			overlay.classList.add("shown");
			overlay.classList.remove("dim");
			overlay.classList.remove("hidden");
		}
	}
})();
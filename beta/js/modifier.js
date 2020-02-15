const modifier = (() => {
    var show = false;
    var multiplier = document.getElementById("totalMultiplier");
    var harderList = document.getElementById("harderList");
    var easierList = document.getElementById("easierList");
    

    return (data) => {
        clear();

        // harder List
        if (data.instaFail) {
            harderList.appendChild(document.createTextNode("Insta Fail"));
            show = true;
        }
        if (data.batteryEnergy) {
            harderList.appendChild(document.createTextNode("Battery Energy"));
            show = true;
        }
        if (data.disappearingArrows) {
            harderList.appendChild(document.createTextNode("Disappearing Arrows"));
            show = true;
        }
        if (data.ghostNotes) {
            harderList.appendChild(document.createTextNode("Ghost Notes"));
            show = true;
        }
        if (data.songSpeed == "Faster") {
            harderList.appendChild(document.createTextNode("Faster Song"));
            show = true;
        }

        // easier List
        if (data.noFail) {
            easierList.appendChild(document.createTextNode("No Fail"));
            show = true;
        }
        if (data.obstacles == false) {
            easierList.appendChild(document.createTextNode("No Obsticles"));
            show = true;
        }
        if (data.noBombs) {
            easierList.appendChild(document.createTextNode("No Bombs"));
            show = true;
        }
        if (data.songSpeed == "Slower") {
            easierList.appendChild(document.createTextNode("Slower Song"));
            show = true;
        }
        if (data.noArrows) {
            easierList.appendChild(document.createTextNode("No Arrows"));
            show = true;
        }

        multiplier.innerHTML = data.multiplier + "x";
    }

    function clear() {
        show = false;
        harderList.empty();
        easierList.empty();
        multiplier.innerHTML = "1.00x";
    }

})();

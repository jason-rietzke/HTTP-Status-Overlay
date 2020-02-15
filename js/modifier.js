var modShow = false;

const modifier = (() => {
    var multiplier = document.getElementById("totalMultiplier");
    var harderList = document.getElementById("harderList");
    var easierList = document.getElementById("easierList");
    

    return (data) => {
        clear();

        // harder List
        if (data.instaFail) {
            harderList.appendChild(document.createTextNode("Insta Fail"));
            modShow = true;
        }
        if (data.batteryEnergy) {
            harderList.appendChild(document.createTextNode("Battery Energy"));
            modShow = true;
        }
        if (data.disappearingArrows) {
            harderList.appendChild(document.createTextNode("Disappearing Arrows"));
            modShow = true;
        }
        if (data.ghostNotes) {
            harderList.appendChild(document.createTextNode("Ghost Notes"));
            modShow = true;
        }
        if (data.songSpeed == "Faster") {
            harderList.appendChild(document.createTextNode("Faster Song"));
            modShow = true;
        }

        // easier List
        if (data.noFail) {
            easierList.appendChild(document.createTextNode("No Fail"));
            modShow = true;
        }
        if (data.obstacles == false) {
            easierList.appendChild(document.createTextNode("No Obsticles"));
            modShow = true;
        }
        if (data.noBombs) {
            easierList.appendChild(document.createTextNode("No Bombs"));
            modShow = true;
        }
        if (data.songSpeed == "Slower") {
            easierList.appendChild(document.createTextNode("Slower Song"));
            modShow = true;
        }
        if (data.noArrows) {
            easierList.appendChild(document.createTextNode("No Arrows"));
            modShow = true;
        }

        multiplier.innerHTML = data.multiplier + "x";
    }

    function clear() {
        modShow = false;
        harderList.innerHTML = "";
        easierList.innerHTML = "";
        multiplier.innerHTML = "1.00x";
    }

})();

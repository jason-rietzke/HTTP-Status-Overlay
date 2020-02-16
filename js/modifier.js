var modShow = false;

const modifier = (() => {
    var multiplier = document.getElementById("totalMultiplier");
    var harderList = document.getElementById("harderList");
    var easierList = document.getElementById("easierList");
    

    return (data) => {
        clear();

        // harder List
        if (data.instaFail) {
            addLi(harderList, "Insta Fail");
            modShow = true;
        }
        if (data.batteryEnergy) {
            addLi(harderList, "Battery Energy");
            modShow = true;
        }
        if (data.disappearingArrows) {
            addLi(harderList, "Disappearing Arrows");
            modShow = true;
        }
        if (data.ghostNotes) {
            addLi(harderList, "Ghost Notes");
            modShow = true;
        }
        if (data.songSpeed == "Faster") {
            addLi(harderList, "Faster Song");
            modShow = true;
        }

        // easier List
        if (data.noFail) {
            addLi(easierList, "No Fail");
            modShow = true;
        }
        if (data.obstacles == false) {
            addLi(easierList, "No Obsticles");
            modShow = true;
        }
        if (data.noBombs) {
            addLi(easierList, "No Bombs");
            modShow = true;
        }
        if (data.songSpeed == "Slower") {
            addLi(easierList, "Slower Song");
            modShow = true;
        }
        if (data.noArrows) {
            addLi(easierList, "No Arrows");
            modShow = true;
        }

        multiplier.innerHTML = data.multiplier.toFixed(2) + "x";
    }

    function addLi(list, name) {
        var li = document.createElement('li');
        li.appendChild(document.createTextNode(name));
        list.appendChild(li);
    }

    function clear() {
        modShow = false;
        harderList.innerHTML = "";
        easierList.innerHTML = "";
        multiplier.innerHTML = "1.00x";
    }

})();

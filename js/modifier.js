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
        }
        if (data.batteryEnergy) {
            addLi(harderList, "Battery Energy");
        }
        if (data.disappearingArrows) {
            addLi(harderList, "Disappearing Arrows");
        }
        if (data.ghostNotes) {
            addLi(harderList, "Ghost Notes");
        }
        if (data.songSpeed == "Faster") {
            addLi(harderList, "Faster Song");
        }

        // easier List
        if (data.noFail) {
            addLi(easierList, "No Fail");
        }
        if (data.obstacles == false) {
            addLi(easierList, "No Obsticles");
        }
        if (data.noBombs) {
            addLi(easierList, "No Bombs");
        }
        if (data.songSpeed == "Slower") {
            addLi(easierList, "Slower Song");
        }
        if (data.noArrows) {
            addLi(easierList, "No Arrows");
        }

        multiplier.innerHTML = data.multiplier.toFixed(2) + "x";
    }

    function addLi(list, name) {
        var li = document.createElement('li');
        li.appendChild(document.createTextNode(name));
        list.appendChild(li);
        modShow = true;
    }

    function clear() {
        modShow = false;
        harderList.innerHTML = "";
        easierList.innerHTML = "";
        multiplier.innerHTML = "1.00x";
    }

})();

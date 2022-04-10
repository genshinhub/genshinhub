// Mondstadt Characters
var Jean = require("../json/Mondstadt/Jean.json");

// Liyue Characters
var Beidou = require("../json/Liyue/Beidou.json");

// Inazuma Characters
var Thoma = require("../json/Inazuma/Thoma.json");

var Characters = [
    Beidou,
    Jean,
    Thoma
]

var firstName = "";
var showResult = "";

// Get Characters length
var CharactersLength = Characters.length;
console.log("CharactersLength = " + CharactersLength);
document.getElementById("Characters_Length").innerHTML = CharactersLength;

window.onload = function() {
    onloadTest();
    showAll()
    //checkCheckedCheckbox();
}
/*
function checkCheckedCheckbox() {
    if ((document.getElementById('Mondstadt').checked == true) &&
        (document.getElementById('Liyue').checked == true) &&
        (document.getElementById('Inazuma').checked == true)) {
        document.getElementById('nationCheckAll').checked = true;
    } else {
        document.getElementById('nationCheckAll').checked = false;
    }
}
*/

function onloadTest() {
    console.log("onloadTest works!");
}

function showAll() {
    for(var i=0; i<CharactersLength; i++) {
        showResult += Characters[i].firstname;
    }
    document.getElementById("Output").innerHTML = showResult;
}

// Functions for checkboxes
var buttonMondstadt = document.getElementById("Mondstadt");
buttonMondstadt.addEventListener("change", buttonNation);
buttonMondstadt.nationName = "Mondstadt";

var buttonLiyue = document.getElementById("Liyue");
buttonLiyue.addEventListener("change", buttonNation);
buttonLiyue.nationName = "Liyue";


var buttonInazuma = document.getElementById("Inazuma");
buttonInazuma.addEventListener("change", buttonNation);
buttonInazuma.nationName = "Inazuma";

function buttonNation(e) {
    if (this.checked) {
        //console.log("Checked!");
        for (var i=0; i<CharactersLength; i++) {
            if (Characters[i].nation == e.currentTarget.nationName) {
                console.log(Characters[i].nation + " char found = " + Characters[i].firstname);
            }
        }

    } else {
        console.log("Unchecked!");
    }
}

// browserify js/genshinmain.js -o js/genshinbundle.js

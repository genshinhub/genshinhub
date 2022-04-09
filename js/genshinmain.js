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

// Get Characters length
var CharactersLength = Characters.length;
console.log("CharactersLength = " + CharactersLength);
document.getElementById("Characters_Length").innerHTML = CharactersLength;

// Functions for checkboxes
var buttonMondstadt = document.getElementById("Mondstadt");
buttonMondstadt.addEventListener("click",
    function () {
        if (buttonMondstadt.checked) {
            //console.log("Checked!");
            for (var i=0; i<CharactersLength; i++) {
                if (Characters[i].nation == "Mondstadt") {
                    console.log(Characters[i].nation + " char found = " + Characters[i].firstname);
                }
            }
        } else {
            console.log("Unchecked!");
        }
    }
);

var buttonLiyue = document.getElementById("Liyue");
buttonLiyue.addEventListener("click",
    function () {
        if (buttonLiyue.checked) {
            //console.log("Checked!");
            for (var i=0; i<CharactersLength; i++) {
                if (Characters[i].nation == "Liyue") {
                    console.log(Characters[i].nation + " char found = " + Characters[i].firstname);
                }
            }
        } else {
            console.log("Unchecked!");
        }
    }
);

var buttonInazuma = document.getElementById("Inazuma");
buttonInazuma.addEventListener("click",
    function () {
        if (buttonInazuma.checked) {
            //console.log("Checked!");
            for (var i=0; i<CharactersLength; i++) {
                if (Characters[i].nation == "Inazuma") {
                    console.log(Characters[i].nation + " char found = " + Characters[i].firstname);
                }
            }
        } else {
            console.log("Unchecked!");
        }
    }
);


// browserify js/genshinmain.js -o js/genshinbundle.js

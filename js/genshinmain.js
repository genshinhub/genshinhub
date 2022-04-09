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

// browserify js/genshinmain.js -o js/genshinbundle.js

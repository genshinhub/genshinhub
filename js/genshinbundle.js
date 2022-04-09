(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
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
buttonMondstadt.addEventListener("click", abc);

function abc() {
    if (document.getElementById('Mondstadt').checked) {
        console.log("Checked!");
    } else {
        console.log("Unchecked!");
    }
}


// browserify js/genshinmain.js -o js/genshinbundle.js

},{"../json/Inazuma/Thoma.json":2,"../json/Liyue/Beidou.json":3,"../json/Mondstadt/Jean.json":4}],2:[function(require,module,exports){
module.exports={
    "firstname": "Thoma",
    "lastname": "",
    "img": "https://uploadstatic-sea.hoyoverse.com/contentweb/20211203/2021120311564937286.png",
    "gender": "Male",
    "voice": [
        {
            "language": "CN",
            "name": "Pei Zhang"
        },
        {
            "language": "EN",
            "name": "Christian Banas"
        },
        {
            "language": "JP",
            "name": "Masakazu Morita"
        },
        {
            "language": "KR",
            "name": "Ryu Seung-gon"
        }
    ],
    "vision": "Pyro",
    "weapon": "Polearm",
    "nation": "Inazuma",
    "rarity": 4,
    "constellation": "Rubeum Scutum",
    "birthday": "0000-01-09",
    "specialdish": "Warmth"
}

},{}],3:[function(require,module,exports){
module.exports={
    "firstname": "Beidou",
    "lastname": "",
    "img": "https://uploadstatic-sea.hoyoverse.com/contentweb/20200227/2020022720085973518.png",
    "gender": "Female",
    "voice": [
        {
            "language": "CN",
            "name": "Yajing Tang"
        },
        {
            "language": "EN",
            "name": "Allegra Clark"
        },
        {
            "language": "JP",
            "name": "Ami Koshimizu"
        },
        {
            "language": "KR",
            "name": "Jeong Yoo-mi"
        }
    ],
    "vision": "Electro",
    "weapon": "Claymore",
    "nation": "Liyue",
    "rarity": 4,
    "constellation": "Victor Mare",
    "birthday": "0000-02-14",
    "specialdish": "Flash-Fried Filet"
}

},{}],4:[function(require,module,exports){
module.exports={
    "firstname": "Jean",
    "lastname": "Gunnhildr",
    "img": "https://uploadstatic-sea.hoyoverse.com/contentweb/20200616/2020061611214389168.png",
    "gender": "Female",
    "voice": [
        {
            "language": "CN",
            "name": "Su Lin"
        },
        {
            "language": "EN",
            "name": "Stephanie Southerland"
        },
        {
            "language": "JP",
            "name": "Chiwa Saito"
        },
        {
            "language": "KR",
            "name": "Ahn Young-mi"
        }
    ],
    "vision": "Anemo",
    "weapon": "Sword",
    "nation": "Mondstadt",
    "rarity": 5,
    "constellation": "Leo Minor",
    "birthday": "0000-03-14",
    "specialdish": "Invigorating Pizza"
}

},{}]},{},[1]);

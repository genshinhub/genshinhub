// https://api.genshin.dev

var mainURL = "https://api.genshin.dev";
var charactersURL = mainURL + "/characters";
//console.log("charactersURL: " + charactersURL);

var Characters = [];
var charLength;
var dataset = {};
var oneCharacterURL = [];
/*Characters[0] = "a";
Characters[1] = "b";
console.log("Characters[0]: " + Characters[0]);
console.log("Characters[1]: " + Characters[1]);*/

// Get value in https://api.genshin.dev/characters
fetch(charactersURL)
    .then(response => response.json())
    .then(data => {
        //console.log("data: " + data)
        charLength = data.length;
        //console.log("charLength: " + charLength)

        for(var i=0; i<charLength; i++) {
            // Get every character URL to the Array
            oneCharacterURL[i] = getEveryCharURL(data[i])
            //Characters[i] = data[i];
            //console.log("Characters[i]: " + Characters[i])
        }

        dataset = data;
        init();
    }
);

function getEveryCharURL(charValue) {
    var oneCharURL = charactersURL + "/" + charValue;
    console.log("oneCharURL: " + oneCharURL);

    return oneCharURL;
}

function init() {
    console.log("dataset: " + dataset);
    console.log("charLength: " + charLength)
    console.log("dataset[0]: " + dataset[0]);
    console.log("oneCharacterURL[0]: " + oneCharacterURL[0]);
    // code goes here
}





// browserify js/genshinmain.js -o js/genshinbundle.js

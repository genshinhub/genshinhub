// https://api.genshin.dev

var mainURL = "https://api.genshin.dev";
var charactersURL = mainURL + "/characters";
//console.log("charactersURL: " + charactersURL);

var charLength;
var oneCharacterURL = [];

// Get data in https://api.genshin.dev/characters
fetch(charactersURL)
    .then(response => response.json())
    .then(data => {
        //console.log("data: " + data)
        charLength = data.length;
        //console.log("charLength: " + charLength)

        // Get every character URL to the Array
        for(var i=0; i<charLength; i++) {
            oneCharacterURL[i] = getEveryCharURL(data[i]);
            //Characters[i] = data[i];
            //console.log("Characters[i]: " + Characters[i]);
        }

        init();
    }
);

function getEveryCharURL(charValue) {
    var oneCharURL = charactersURL + "/" + charValue;
    //console.log("oneCharURL: " + oneCharURL);
    return oneCharURL;
}

function getOneCharJSON(oneCharacterURL) {
    //console.log("getOneCharJSON oneCharacterURL: " + oneCharacterURL);
    return fetch(oneCharacterURL)
        .then((response) => response.json())
        .then(data => {
            // Logic here?
            console.log(data.name + " vision is " + data.vision);
            return data;
        })
        .catch((error) => console.log(error));
}

function init() {
    console.log("charLength: " + charLength)
    document.getElementById("characters").innerHTML = charLength;
    //console.log("oneCharacterURL[0]: " + oneCharacterURL[0]);

    for(var i=0; i<charLength; i++) {
        //console.log("oneCharacterURL[i]: " + oneCharacterURL[i]);
        getOneCharJSON(oneCharacterURL[i]);
    }
}


// browserify js/genshinmain.js -o js/genshinbundle.js

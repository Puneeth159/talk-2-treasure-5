// import * as randLoc from './location.js';


function colorFunction1() {
    const values = ["A", "2", "3", "4", "5", "6", "7", "8", "9", "10", "J", "Q", "K", ];
    const random = Math.floor(Math.random() * values.length);
    let value = values[random];
    document.getElementById("bgrone").style.backgroundColor = "#7aeb7a";
    document.getElementById("lbl").innerHTML = value;
    let utterance = new SpeechSynthesisUtterance(`     You have picked the card of color Light Green of thevalue     ${value}`);
    speechSynthesis.speak(utterance);
console.log(randLoc)

}

function colorFunction2() {
    const values = ["A", "2", "3", "4", "5", "6", "7", "8", "9", "10", "J", "Q", "K", ];
    const random = Math.floor(Math.random() * values.length);
    let value = values[random];
    document.getElementById("bgrtwo").style.backgroundColor = "#99cfe0";
    document.getElementById("lbl2").innerHTML = value;
    let utterance = new SpeechSynthesisUtterance(`     You have picked the card of color Light Blue of the value     ${value}`);
    speechSynthesis.speak(utterance);
}

async function getLocation() {
    return new Promise((resolve, reject) => {
        navigator.geolocation.getCurrentPosition(resolve, reject);
    }).then(position => {
        return position;
    });
}

let currentlat, currentlon,loc;

async function locationHandler() {
    const locText = await getLocation();
    loc = 'Your Location';
    document.getElementById("location").innerHTML = loc;
    currentlat = locText.coords.latitude;
    console.log(currentlat)
    document.getElementById("device-lat").innerHTML = currentlat.toFixed(6);
    currentlon = locText.coords.longitude;
    console.log(currentlon)
    document.getElementById("device-long").innerHTML = currentlon.toFixed(6);
    // let value = currentlat+"\n"+currentlon;
    // document.getElementById("lbl2").innerHTML = value;
    

}
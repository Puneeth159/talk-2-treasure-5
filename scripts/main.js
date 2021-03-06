// import * as randLoc from './location.js';
import locationsArray from '../locations.js';
import {isInsideCircle} from './location-circle.js';

let locationElement = document.getElementById("bgrtwo");
let locationElement2 = document.getElementById("bgrone");



window.addEventListener('load', main);

locationElement.addEventListener('click', locationHandler);
locationElement.addEventListener('touch', locationHandler);
locationElement2.addEventListener('click', colorFunction1);
locationElement2.addEventListener('touch', colorFunction1);

function main() {
    console.log('Page is fully loaded');
}



function colorFunction1() {
    document.getElementById("targetloc").innerHTML = "The Treasure is in the location ";
    document.getElementById("lbl").innerHTML = targetLoc.Name;
    document.getElementById("device-lat1").innerHTML = targetLoc.coordinates[0].latitude;
    document.getElementById("device-long1").innerHTML = targetLoc.coordinates[0].longitude;
    let utterance = new SpeechSynthesisUtterance(`The location where the treasure is ${targetLoc.Name}`);
    speechSynthesis.speak(utterance);


}


async function getLocation() {
    return new Promise((resolve, reject) => {
        navigator.geolocation.getCurrentPosition(resolve, reject);
    }).then(position => {
        return position;
    });
}

let currentlat, currentlon, loc, error = true;
let targetLoc = locationsArray[Math.floor(Math.random()*locationsArray.length)];

async function locationHandler() {
    const locText = await getLocation();
    // loc = 'Your current Location';
    // document.getElementById("location").innerHTML = loc;
    currentlat = locText.coords.latitude;
    console.log(currentlat)
    document.getElementById("device-lat").innerHTML = currentlat.toFixed(6);
    currentlon = locText.coords.longitude;
    console.log(currentlon)
    document.getElementById("device-long").innerHTML = currentlon.toFixed(6);
    
    locationsArray.forEach(function (value) {
        if (isInside(value.Latitude, value.Longitude)) {
            document.getElementById("location").innerHTML = value.Name;
            let utterance = new SpeechSynthesisUtterance("Congratulations!, You found location ${value.Name}");
            speechSynthesis.speak(utterance);
            error = false;
        }
    });

    if(error) {

        console.log("error is here")
        document.getElementById("error-message").innerHTML = "Sorry,You're not near to the treasure";
         let utterance = new SpeechSynthesisUtterance("Sorry,You're not near to the treasure");
         speechSynthesis.speak(utterance);
     } else {
         document.getElementById("error-message").innerHTML = "";
     }
    
    }
    function isInside(questLat, questLon) {
        let distance = distanceBetweenLocations(questLat, questLon);
        console.log("distance: " + distance);
        if (distance < 30) {
            return true;
        } else {
            return false;
        }
    }
function distanceBetweenLocations(questLat, questLon) {
    const R = 6371e3;
    const φ1 = currentlat * Math.PI / 180;
    const φ2 = questLat * Math.PI / 180;
    const Δφ = (questLat - currentlat) * Math.PI / 180;
    const Δλ = (questLon - currentlon) * Math.PI / 180;

    const a = Math.sin(Δφ / 2) * Math.sin(Δφ / 2) +
        Math.cos(φ1) * Math.cos(φ2) *
        Math.sin(Δλ / 2) * Math.sin(Δλ / 2);
    const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));

    const d = R * c;
    return d; 
}

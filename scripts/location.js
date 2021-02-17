import locationsArray from '../init-locations.js';

function getRandomInt(max) { 
    return Math.floor(Math.random() * Math.floor(max));
  }
  
//   console.log(getRandomInt(3)); 


export let randLoc = locationsArray[getRandomInt(3)]


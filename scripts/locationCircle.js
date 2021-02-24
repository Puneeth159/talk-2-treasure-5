function  isValid(coordinate) {
    let lat = coordinate.latitude;
    let lon = coordinate.longitude;
    
    if (!(lat < -90 || lat > 90 || lon < -180 || lon > 180))
        return true;
    else
        return false;
}
// function isValidArguments(device,location){
//     if(device == '' || location == '')
// {
//   throw "Two valid arguments are needed";
// }
// else{
//   return true;
// }
// }
function isValidType(loc){
    if(loc.type === "circle"){
        return true;
    }
    else{
        // var invalidLocation = 'Not a valid location';
        throw "Invalid Location Type";
    }
}

export function isValidLocation(location) {
    // var name = location.name;
    // let radiusMeters = location.radiusMeters;
    if (location.name.length >0 && isValidType(location) && isValid(coordinate) && radiusMeters == 30.0)
        return true;
    else
     //var invalidLocation = 'Not a valid location';
        throw "Invalid Location";
}
function isValidDevice(device)
{
    if(isValidDevice(device.coordinate))
        return true;
    else
        throw "InvalidDevice";
}

 function isInsideCircle(device, location)
{
    if(isValid(device)&&isValid(location))
    {
        let dLat = device.coords.latitude;
        let dLon = device.coords.longitude;

        let lLat = location.coordinates[0].latitude;
        let lLon = location.coordinates[0].longitude;

        if(dLat<=lLat && dLon<=lLon)
        {
            return true;
        }
        else
            return false;
    }
    else
        return false;
}

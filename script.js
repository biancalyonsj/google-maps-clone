// use api to get user's location
navigator.geolocation.getCurrentPosition(successLocation, errorLocation, {enableHighAccuracy: true});


function successLocation(position){
    // center the map's initial location to the user's current location
    setupMap([position.coords.longitude, position.coords.latitude])
}

function errorLocation(){
    // set default location
    setupMap([73.98, 40.76])
}

function setupMap(center){
    const map = new mapboxgl.Map({
        container: 'map',
        style: 'mapbox://styles/mapbox/streets-v11', // Use the standard style for the map
        zoom: 14, // initial zoom level, 0 is the world view, higher values zoom in
        center: center // center the map on this longitude and latitude
    });
    
    let directions = new MapboxDirections({
    });
    // controls navigate via bike, walking, or driving
    map.addControl(directions, 'top-left');

}

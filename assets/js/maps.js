var APIkey = "AIzaSyCIDwqcfYrqmFmO_FmuEJiFwIJZC9oXvkw";

function initMap() {
    var map = new google.maps.Map(document.getElementById("map"), {
        zoom: 12,
        center: {
            lat: 51.509865,
            lng: -0.118092
        }
    });


var labels = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var locations = [
    {lat: 51.501903, 
    lng: -0.124273 },
    {lat: 51.512883, 
    lng: -0.096657 },
    {lat: 51.495489, 
    lng: -0.102219},
    {lat: 51.463402, 
    lng: -0.111467}
];

var markers = locations.map(function(location,i){
    return new google.maps.Marker({
        position: location,
        label: labels[i % labels.length]
    });
});

var markerCluster = new MarkerClusterer(map, markers,
            {imagePath: 'https://developers.google.com/maps/documentation/javascript/examples/markerclusterer/m'});
}
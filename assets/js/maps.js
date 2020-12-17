var APIkey = "AIzaSyCIDwqcfYrqmFmO_FmuEJiFwIJZC9oXvkw";



function initMap() {

    var westminster = 
        {
            info: '<strong>Westminster</strong>',
            lat: 51.501903,
            l0ng: -0.124273,
        }
    var stpauls =
        {
            info: '<strong>St. Pauls</strong>',
            lat: 51.512883,
            lng: -0.096657
        }
    var elephantandcastle=
        {
            info: '<strong>Elephant & Castle</strong>',
            lat: 51.495489,
            lng: -0.102219
        }
    var brixton=
        {
            info: '<strong>Brixton</strong>',
            lat: 51.463402,
            lng: -0.111467
        }

    var locations = [
    [westminster.info, westminster.lat, westminster.lng, 0],
    [stpauls.info, stpauls.lat, stpauls.lng, 1],
    [elephantandcastle.info, elephantandcastle.lat, elephantandcastle.lng, 2],
    [brixton.info, brixton.lat, brixton.lng, 3]
  ]


    var map = new google.maps.Map(document.getElementById("map"), {
        zoom: 12,
        center: {
            lat: 51.509865,
            lng: -0.118092
        }
    });

    var infowindow = new google.maps.InfoWindow({});

    var marker, i;

    //var labels = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";


    for (i = 0; i < locations.length; i++) {
        marker = new google.maps.Marker({
            position: new google.maps.LatLng(locations[i][1], locations[i][2]),
            map: map,
        });

        google.maps.event.addListener(
            marker,
            'click',
            (function (marker, i) {
                return function () {
                    infowindow.setContent(locations[i][0]);
                    infowindow.open(map, marker);
                };
            })(marker, i)
        );

        //var markerCluster = new MarkerClusterer(map, marker,
          //  { imagePath: 'https://developers.google.com/maps/documentation/javascript/examples/markerclusterer/m' });

    };
}
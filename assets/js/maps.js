function initMap() {
    
  // Object for each cafe location which includes map co-ordinates and info for infowindow
  var westminster = {
    info:
      "<h4>Westminster</h4> Derby Gate<br>Westminster<br>London<br>SW1A 2DG<br><b>+004495678</b>",
    lat: 51.501903,
    lng: -0.124273,
  };

  var stpauls = {
    info:
      "<h4>St Pauls</h4>4 Cannon St<br>London<br>EC4M 5AB<br><b>+004487654</b>",
    lat: 51.512883,
    lng: -0.096657,
  };

  var elephantandcastle = {
    info:
      "<h4>Elephant & Castle</h4>46 St Georges Rd<br>Elephant and Castle<br>London<br>SE1 6ET<br><b>+004412345</b>",
    lat: 51.495489,
    lng: -0.102219,
  };

  var brixton = {
    info:
      "<h4>Brixton</h4>49 Brixton Station Rd<br>Brixton<br>London<br>SW9 8PQ<br><b>+004434567</b>",
    lat: 51.463402,
    lng: -0.111467,
  };

  var locations = [
    [westminster.info, westminster.lat, westminster.lng, 0],
    [stpauls.info, stpauls.lat, stpauls.lng, 1],
    [elephantandcastle.info, elephantandcastle.lat, elephantandcastle.lng, 2],
    [brixton.info, brixton.lat, brixton.lng, 3],
  ];

  //Initialise Google Map and position to London
  var map = new google.maps.Map(document.getElementById("map"), {
    zoom: 12,
    center: {
      lat: 51.509865,
      lng: -0.118092,
    },
  });

  var infowindow = new google.maps.InfoWindow({});

  // Create a marker on the map for each location
  var marker, i;

  for (i = 0; i < locations.length; i++) {
    marker = new google.maps.Marker({
      position: new google.maps.LatLng(locations[i][1], locations[i][2]),
      map: map,
    });

    // Open infowindow on click event for each marker
    google.maps.event.addListener(
      marker,
      "click",
      (function (marker, i) {
        return function () {
          infowindow.setContent(locations[i][0]);
          infowindow.open(map, marker);
        };
      })(marker, i)
    );
  }
}

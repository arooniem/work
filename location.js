"use strict";

/*Name: Andrew Morgan
    Class: CIS 115 MW 8:30*/


var map, marker, centerBtn, latAndLong;

var getLocation = function() {
  if(navigator.geolocation){
    navigator.geolocation.getCurrentPosition(displayLocation);
  }
  else {
    alert("No Geolocation support with this browser");
  }
  document.getElementById('centerMap').onclick = centerMap;
};


function displayLocation(position) {
  var latitude = position.coords.latitude;
  var longitude = position.coords.longitude;
  document.getElementById('output').innerHTML = "<p>Your current latitude is " + latitude + " and longitude is " + longitude + ".</p>";
  showMap(position.coords);
}

var showMap = function (coords) {
  latAndLong = new google.maps.LatLng(coords.latitude, coords.longitude);
  var mapOptions = {zoom:18, center:latAndLong, mapTypeId:google.maps.MapTypeId.SATELLITE};
  map = new google.maps.Map(document.getElementById('map'),mapOptions);
  addMarker(latAndLong);
  google.maps.event.addListener(map, 'click', function(event){
    alert('You clickd on latitude and longitude of: ' + event.latLng);
  });
};

var addMarker = function(markerLocation) {
  var markerOptions = {position:markerLocation, map:map};
  marker = new google.maps.Marker(markerOptions);
};


var centerMap = function() {
  map.setCenter(latAndLong);
  map.setZoom(18);
};

window.onload = getLocation;

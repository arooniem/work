"use strict";

/*Name: Andrew Morgan
    Class: CIS 115 MW 8:30*/


var map, marker, centerBtn;

var getLocation = function() {
  if(navigator.geolocation){
    navigator.geolocation.getCurrentPosition(displayLocation);
  }
  else {
    alert("No Geolocation support with this browser");
  }
  document.getElementById('centerMap').onclick(centerMap)
};


function displayLocation(position) {
  var latitude = position.coords.latitude;
  var longitude = position.coords.longitude;
  document.getElementById('output').innerHTML = "Your current latitude is " + latitude + " and longitude is " + longitude + ".";
  showMap(position.coords);
}

var showMap = function (coords) {
  var latAndLong = new google.maps.LatLng(coords.latitude, coords.longitude);
  var mapOptions = {zoom:18, center:latAndLong, mapTypeId:google.maps.MapTypeId.SATELLITE};
  map = new google.maps.Map(document.getElementById('map'),mapOptions);
  addMarker(latAndLong);
};

var addMarker = function(markerLocation) {
  var markerOptions = {position:markerLocation, map:map};
  marker = new google.maps.Marker(markerOptions);
};

var centerMap = function() {

};

window.onload = getLocation;

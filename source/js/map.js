function initMap() {
  "use strict";
  var coordinates = {lat: 59.9387515, lng: 30.323040};
  var map = new google.maps.Map(document.getElementById('map'), {
    zoom: 16,
    center: coordinates,
    disableDefaultUI: true,
    scrollwheel: false
  });

  var marker = new google.maps.Marker({
  position: coordinates,
  map: map,
  icon: 'img/icon-map-pin.svg'
  });
}

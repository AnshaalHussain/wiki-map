
$( document ).ready(function() {

  // Add a popup and marker to current location
  const map = addNewMap();

  //global variable for popup
  const popup = L.popup();

  function onMapClick(e) {
    console.log(popup
      .setLatLng(e.latlng)
      .setContent(`You clicked the map at ${e.latlng.toString()}
      <button onclick="popupClick()">Click ME</button>`)
      .openOn(map));
  }

  map.on('dblclick', onMapClick);

});

function popupClick(e) {
  console.log(e);
  alert("hello");
}

const addNewMap = function() {
  // Add map to current location
  const map = L.map('map').locate({
    setView: true,
    watch: true,
    doubleClickZoom: false
  });
  // Add map tiling
  L.tileLayer('https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}', {
    attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
    maxZoom: 18,
    id: 'mapbox/streets-v11',
    tileSize: 512,
    zoomOffset: -1,
    accessToken: 'pk.eyJ1IjoiYWtoYW40NDUiLCJhIjoiY2t3azJiNTRnMW85MzJucWI3YzU3bnIxcyJ9.Hagm_QAD-JiXhHBX2maxwA'
  }).addTo(map);

  // Add the search geocoder to map
  L.control.geocoder('pk.3e052728edbcc71397097e993b0e90d2').addTo(map)
    .on('select', function(e) {
    // Remove the marker layer on search, only center the location
    console.log(e);
    $("input#long").val(e.latlng.lng);
    $("input#lat").val(e.latlng.lat);
    map.removeLayer(e.target.markers[0]);
  });

  return map;
};

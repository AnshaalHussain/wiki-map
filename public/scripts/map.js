
$( document ).ready(function() {

  // Add a popup and marker to current location
  const map = addNewMap();

  //Add marker/pointer to map
  const markers = new L.MarkerClusterGroup();

  markers.addLayer(L.marker([43.5876884,-79.774823]).bindPopup(`
  <h6>Title</h6>
  <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit.</p>
  <img style="width: 150px;" src="https://picturesinlivingcolor.files.wordpress.com/2012/07/saturday-in-the-park-umbrella-people.jpg">
  `));
  markers.addLayer(L.marker([43.5952414,-79.7259424]));
  markers.addLayer(L.marker([43.6049592,-79.7538578]));
  // add more markers here...


  map.addLayer(markers);

  markers.eachLayer((layer)=> {
    if (layer._latlng.lat === 43.6049592 && layer._latlng.lng === -79.7538578) {
      console.log(markers.removeLayer(layer));
    }
  });
  //global variable for popup
  const popup = L.popup();

  // Popup on double click for user to add a new point to map
  function onMapClick(e) {
    const lat = e.latlng.lat;
    const lng = e.latlng.lng;

    popup
      .setLatLng(e.latlng)
      .setContent(`
      <form method="POST" action="">
      <div class="form-floating mb-3" style="min-width: 300px;">
        <input type="hidden" name="lat" value="${lat}>
        <input type="hidden" name="lng" value="${lng}>
      </div>
      <div class="form-floating mb-3" style="min-width: 300px;">
        <input type="text" class="form-control form-control-sm" id="title" name="title">
        <label for="title">Title</label>
      </div>
      <div class="form-floating mb-3" style="min-width: 300px;">
        <input type="text" class="form-control form-control-sm" id="imageURL" name="imageURL">
        <label for="imageURL">Image URL</label>
      </div>
      <div class="form-floating mb-3 style="min-width: 300px;"">
        <textarea class="form-control form-control-sm" id="description" name="description"></textarea>
        <label for="description">Description</label>
      </div>
      <div class="d-grid gap-2">
        <button class="btn btn-primary" type="button">Add Point</button>
      </div>
      </form>
      `)
      .openOn(map);
  }

  map.on('click', onMapClick);

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
    map.removeLayer(e.target.markers[0]);
    $("input#long").val(e.latlng.lng);
    $("input#lat").val(e.latlng.lat);
  });

  map.doubleClickZoom.disable();

  return map;
};

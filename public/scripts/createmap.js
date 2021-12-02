
$( document ).ready(function() {
  renderMap();

  function renderMap() {

    // Add a popup and marker to current location
    const map = addNewMap();

    //Add marker/pointer to map
    const markers = new L.MarkerClusterGroup();

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

  }
});

const addNewMap = function() {
  // Add map to current location
  const map = L.map('map').locate({setView: true, watch: true}, 13);
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

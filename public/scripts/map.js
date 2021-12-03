
$( document ).ready(function() {
  const mapId = $("#map").attr("data-map-id");
  $.ajax({
    url: `/map/${mapId}`,
  }).done(function(response) {
    renderMap(response.map, response.points);

  });
  function renderMap(mapData, points) {

    $("#map-content").html(`
        <h3 class="h3">${mapData.title}</h5>
        <p class="">${mapData.description}</p>
    `)

    $("#map-image").html(`
      <hr>
      <img src="${mapData.image_url}" class="img-fluid" alt="...">
    `)
    // Add a popup and marker to current location
    const map = addNewMap(mapData.center_latitude, mapData.center_longitude);

    //Add marker/pointer to map
    const markers = new L.MarkerClusterGroup();

    // console.log("response", points)


    for (const point of points) {
    const { title, description, image, latitude, longitude } = point
    console.log(point)
      markers.addLayer(L.marker([latitude, longitude]).bindPopup(`
    <h6>${title}</h6>
    <p>${description}</p>
    <img class="img-thumbnail" src="${image}">
    <button id="edit-btn" class="btn btn-primary" data-point-id="${ point.id }" type="button">Edit</button>
    <button id="delete-btn" class="btn btn-primary"  data-point-id="${ point.id }" type="button">Delete</button>

    `));

    }




    map.addLayer(markers);




    // markers.eachLayer((layer)=> {
      //   if (layer._latlng.lat === 43.6049592 && layer._latlng.lng === -79.7538578) {
        //     console.log(markers.removeLayer(layer));
        //   }
        // });
        //global variable for popup
        const popup = L.popup();

        // Popup on double click for user to add a new point to map
        function onMapClick(e) {
          const lat = e.latlng.lat;
          const lng = e.latlng.lng;

          popup
          .setLatLng(e.latlng)
          .setContent(`
          <form id="add-point" method="POST" action="">
          <div class="form-floating mb-3" style="min-width: 300px;">
          <input type="hidden" name="lat" value="${lat}">
          <input type="hidden" name="lng" value="${lng}">
          <input type="hidden" name="map_id" value="${mapId}">
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
          <button class="btn btn-primary" type="submit">Add Point</button>
          </div>
          </form>
          `)
          .openOn(map);




          $('#add-point').submit(function(event) {
            //prevent the browser from refreshing
            event.preventDefault();
            popup.closePopup()
            $.ajax({
              method: 'post',
              //move to maps/id/pointid
              url: '/addpoint',
              data: $(this).serialize(),

            })
              .then((response) => {
              const point = response;

              markers.addLayer(L.marker([point.latitude, point.longitude]).bindPopup(`
              <h6>${point.title}</h6>
              <p>${point.description}</p>
              <img style="width: 150px;" src="${point.image}">
              `))


              })
          })



        }

        map.on('click', onMapClick);

      }
  });

function popupClick(e) {
  console.log(e);
  alert("hello");
}

const addNewMap = function(lat, lng) {
  // Add map to current location
  console.log(lat + " " + lng);
  const map = L.map('map').setView([lat, lng], 10);
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

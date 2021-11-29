$( document ).ready(function() {
    let map = L.map('map').locate({setView: true, maxZoom: 15});

    L.tileLayer('https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}', {
      attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
      maxZoom: 18,
      id: 'mapbox/streets-v11',
      tileSize: 512,
      zoomOffset: -1,
      accessToken: process.env.MAP_API_TOKEN
    }).addTo(map);

    // Add a popup and marker to current location
    map.locate({setView: true, watch: true}) /* This will return map so you can do chaining */
    .on('locationfound', function(e){
        var marker = L.marker([e.latitude, e.longitude]).bindPopup(`Here: ${e.latitude}, ${e.longitude}`);
        map.addLayer(marker);
    })
   .on('locationerror', function(e){
        console.log(e);
        alert("Location access denied.");
    });

    //global variable for popup
    var popup = L.popup();

    function onMapClick(e) {
      popup
        .setLatLng(e.latlng)
        .setContent(`You clicked the map at ${e.latlng.toString()}
        <button>Click ME</button>`)
        .openOn(map);
    }

    map.on('click', onMapClick);
});



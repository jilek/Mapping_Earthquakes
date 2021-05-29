
let streets = L.tileLayer('https://api.mapbox.com/styles/v1/mapbox/streets-v11/tiles/{z}/{x}/{y}?access_token={accessToken}', {
    attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery (c) <a href="https://www.mapbox.com/">Mapbox</a>',
    maxZoom: 18,
    accessToken: API_KEY
});

let satelliteStreets = L.tileLayer('https://api.mapbox.com/styles/v1/mapbox/satellite-streets-v11/tiles/{z}/{x}/{y}?access_token={accessToken}', {
    attribution: 'Map data © <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery (c) <a href="https://www.mapbox.com/">Mapbox</a>',
    maxZoom: 18,
    accessToken: API_KEY
});

let baseMaps = {
    Streets: streets,
    Satellite: satelliteStreets
}

let map = L.map('mapid', {
    center: [39.5, -98.5],
    zoom: 3,
    layers: [streets]
});

// Pass our map layers into our layers control and add the layers control to the map.
L.control.layers(baseMaps).addTo(map);

// Accessing the USGS earthquakes GeoJSON URL.
let earthQuakes = "https://earthquake.usgs.gov/earthquakes/feed/v1.0/summary/all_week.geojson"
// // Create a style for the lines.
// let myStyle = {
//     color: "#0000ff",
//     fillColor: "#ffff00",
//     bubblingMouseEventa: true,
//     weight: 1
// };
// console.log("baz");
// // Grabbing our GeoJSON data.
// d3.json(torontoHoods).then(function (data) {
//     console.log(data);
//     L.geoJson(data, {
//         style: myStyle,
//         onEachFeature: function (feature, layer) {
//             layer.bindPopup("<h3> Neighborhood: " + feature.properties.AREA_NAME + "</h3>");
//         }
//     }).addTo(map);
// });
d3.json(earthQuakes).then(function (data) {
    // Creating a GeoJSON layer with the retrieved data.
    L.geoJson(data).addTo(map);
});
console.log("done");

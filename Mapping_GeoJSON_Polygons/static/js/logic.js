
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
console.log("foo");

let baseMaps = {
    Streets: streets,
    SatelliteStreets: satelliteStreets
}
console.log("bar");

let map = L.map('mapid', {
    center: [43.7, -79.3],
    zoom: 11,
    layers: [streets]
});
console.log("baz");

// Pass our map layers into our layers control and add the layers control to the map.
L.control.layers(baseMaps).addTo(map);
console.log("baz");

// Accessing the Toronto airline routes GeoJSON URL.
let torontoHoods = "https://raw.githubusercontent.com/jilek/Mapping_Earthquakes/Mapping_GeoJSON_Polygons/Mapping_GeoJSON_Polygons/torontoNeighborhoods.json";

// Create a style for the lines.
let myStyle = {
    color: "#0000ff",
    fillColor: "#ffff00",
    bubblingMouseEventa: true,
    weight: 1
};
console.log("baz");
// Grabbing our GeoJSON data.
d3.json(torontoHoods).then(function (data) {
    console.log(data, {
        style: myStyle,
        onEachFeature: function (feature, layer) {
            layer.bindPopup("<h2>" + feature.properties.AREA_NAME + "</h2>");
        }
    });
    // Creating a GeoJSON layer with the retrieved data.
    L.geoJson(data).addTo(map);
});

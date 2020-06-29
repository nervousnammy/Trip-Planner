const mapboxgl = require("mapbox-gl");
const createNewMarker = require("./marker.js")

mapboxgl.accessToken = "pk.eyJ1IjoibmVydm91c25hbW15IiwiYSI6ImNrYzBwMXR4ZDA5eXQycm56am44YjlvaHQifQ.BlU2pewAT3ftzw1U6PDQDQ";

const map = new mapboxgl.Map({
  container: "map",
  center: [-74.009, 40.705], // FullStack NY coordinates; alternatively, use [-87.6354, 41.8885] for Chicago
  zoom: 12, // starting zoom
  style: "mapbox://styles/mapbox/streets-v10" // mapbox has lots of different map styles available.
});

const newDomElement = document.createElement("div"); //creates a new detached DIV
newDomElement.style.width = "32px";
newDomElement.style.height = "39px";
newDomElement.style.backgroundImage = "url(http://i.imgur.com/WbMOfMl.png)";

new mapboxgl.Marker(newDomElement).setLngLat([-74.009151, 40.705086]).addTo(map);

createNewMarker('activity',[-74.009151, 45.705086]).addTo(map)
createNewMarker('hotel',[-74.009151, 50.705086]).addTo(map)
createNewMarker('restaurant',[-74.009151, 60.705086]).addTo(map)

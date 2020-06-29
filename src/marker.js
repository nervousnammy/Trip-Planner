const mapbox = require("mapbox-gl")

const newMarker = function(markerType, coordinates) {
  const newDomElement = document.createElement("div");
  newDomElement.style.width = "32px";
  newDomElement.style.height = "39px";
  if (markerType === 'activity') {
    newDomElement.style.backgroundImage = "url(http://i.imgur.com/WbMOfMl.png)";
  }
  else if (markerType === 'hotel') {
    newDomElement.style.backgroundImage = "url(http://i.imgur.com/D9574Cu.png)";
  }
  else if (markerType === 'restaurant') {
    newDomElement.style.backgroundImage = "url(http://i.imgur.com/cqR6pUI.png)";
  }
  return new mapboxgl.Marker(newDomElement).setLngLat(coordinates)
}


module.exports = newMarker;

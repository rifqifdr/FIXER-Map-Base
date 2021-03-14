var map = L.map('map');
var layer = Tangram.leafletLayer({
scene: 'https://raw.githubusercontent.com/rifqifdr/Tangram-Raster/main/refill-style%20(1).yaml',
attribution: '<a href="https://github.com/tangrams/tangram" target="_blank">Tangram</a> | <a href="https://www.nextzen.org/" target="_blank">Nextzen</a> | &copy; OSM contributors',
minZoom: 4,
zoomControl: false,
attributionControl: false
});
      
layer.addTo(map);
map.setView([0.586, 118.174], 4.833);
$.getJSON("https://raw.githubusercontent.com/rifqifdr/FIXER-Map-Base/main/map.geojson",function(data){
var mapIcon = L.icon({
iconUrl: 'https://raw.githubusercontent.com/rifqifdr/Fixer-Interactive-Map/main/images/5fc47f07208e6b5497d04fad_Frame%2011.svg?token=AKMWG53EMCZ3VZUFLRYN7XDAKYWUY',
iconSize: [10,10]
});

L.geoJson(data,{
pointToLayer: function(feature,latlng){
var marker = L.marker(latlng,{icon: mapIcon});
marker.bindPopup('<h3 class="header-pop">' + feature.properties.title + '</h3>' + '<br/>' + feature.properties.descriptions);
return marker;
}
}).addTo(map);
});

var corner1 = L.latLng(-13.400, 91.3),
corner2 = L.latLng(12.469, 145.415),
bounds = L.latLngBounds(corner1, corner2);

map.setMaxBounds([
  [-13.400, 91.3],
  [12.469, 145.415]
]);

/////
document.getElementById("ace-house").addEventListener("click", function () {
	map.flyTo([-7.821295,110.365197], 17, {
        animate: true,
        duration: 2 // in seconds
    });
});
document.getElementById("bilik-bersenyawa").addEventListener("click", function () {
	map.flyTo([-3.310425, 114.585078], 17, {
        animate: true,
        duration: 2 // in seconds
    });
});
document.getElementById("cata-odata").addEventListener("click", function () {
	map.flyTo([-8.47875785149429, 115.268270053976], 17, {
        animate: true,
        duration: 2 // in seconds
    });
});
document.getElementById("bergerak-etc").addEventListener("click", function () {
	map.flyTo([-1.2474470206524158, 116.85173132731282], 17, {
        animate: true,
        duration: 2 // in seconds
    });
});

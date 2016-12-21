var cities = new L.LayerGroup();

// token
var mbAttr = 'Map data &copy; <a href="http://openstreetmap.org">OpenStreetMap</a> contributors, ' +
    '<a href="http://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, ' +
    'Imagery © <a href="http://mapbox.com">Mapbox</a>',
    mbUrl = 'https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token=pk.eyJ1IjoibWFwYm94IiwiYSI6ImNpandmbXliNDBjZWd2M2x6bDk3c2ZtOTkifQ._QA7i5Mpkd_m30IGElHziw';

// 底圖設置
var grayscale = L.tileLayer(mbUrl, {
        id: 'mapbox.light',
        attribution: mbAttr
    }),
    streets = L.tileLayer(mbUrl, {
        id: 'mapbox.streets',
        attribution: mbAttr
    });
L.marker([25.087818, 121.538607]).bindPopup('This is Littleton, CO.').addTo(cities),


    // 當點下標籤時 事件
    function onEachFeature(feature, layer) {
        var popupContent = "<p>I started out as a GeoJSON " +
            feature.geometry.type + ", but now I'm a Leaflet vector!</p>";

        if (feature.properties && feature.properties.Descriptio) {
            popupContent += feature.properties.Descriptio;
        }

        layer.bindPopup(popupContent);
    }
		map.on('click', function(e) {
		    alert(e.latlng);
		});
//style set
function style3(feature) {
    return {
			radius: 8,
			fillColor: "#ff7800",
			color: "#000",
			weight: 1,
			opacity: 1,
			fillOpacity: 0.8
    };
}

// 選項1
var baseLayers = {
    "Grayscale": grayscale,
    "Streets": streets
};
// 選項2
var overlays = {
    "Cities": cities,
};

//地圖輸出之div設定
var map03 = L.map('map-3', {
    center: [25.087818, 121.538607],
    zoom: 11,
    layers: [grayscale, cities]
});
// 控制選項
L.control.layers(baseLayers, overlays).addTo(map03);

// load geojson檔案
var geojson3 = L.geoJson(tpeRiverPark, {
    style: function (feature) {
			return style3;
		},

    onEachFeature: onEachFeature,

    pointToLayer: function(feature, latlng) {
        return L.circleMarker(latlng, {
            radius: 8,
            fillColor: "#ff7800",
            color: "#000",
            weight: 1,
            opacity: 1,
            fillOpacity: 0.8
        });
    }
}).addTo(map03);

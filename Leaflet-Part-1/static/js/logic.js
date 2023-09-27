// set map with location on Houston
var map = L.map("map").setView([29.7604, -95.3698], 5);

// set layer from MapBox
var mapboxTileLayer = L.tileLayer("https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}", {
    attribution: "Map data © <a href='https://www.mapbox.com/'>Mapbox</a> contributors",
    maxZoom: 18,
    id: "mapbox/satellite-streets-v11", // Specify the Mapbox style ID
    accessToken: "pk.eyJ1IjoiY3BpbWVudGVsMTUiLCJhIjoiY2xuMTBxbDc4MXhyZjJrbnRvNTF2a2h6NiJ9.g_yMQ4MLNN4zMajTjjhnXw"
}).addTo(map);

// url with GeoJSON data points
var url = "https://earthquake.usgs.gov/earthquakes/feed/v1.0/summary/all_week.geojson";

// retreive json data using d3 
d3.json(url).then(function(data) {
    L.geoJSON(data, {
        pointToLayer: function(feature, latlng) {
            // Create circle markers here
            return L.circleMarker(latlng, {
                radius: circleSize(feature.properties.mag),
                fillColor: CoordinateColor(feature.geometry.coordinates[2]),
                color: 'black',
                weight: 1,
                opacity: 1,
                fillOpacity: 0.75
            });
        },
        onEachFeature: function(feature, layer) {
            // Add popups here
            layer.bindPopup("<h3>" + feature.properties.place + "</h3><p>Magnitude: " + feature.properties.mag + "</p><hr><p>" + new Date(feature.properties.time) + "</p>");
        }
    }).addTo(map);

    function circleSize(magnitude) {
        return magnitude * 7;
    }

    function CoordinateColor(depth) {
        if (depth > 5) return "#0000CC"; // Dark Blue
        else if (depth > 4) return "#1E90FF"; // Dodger Blue
        else if (depth > 3) return "#00BFFF"; // Deep Sky Blue
        else if (depth > 2) return "#87CEEB"; // Sky Blue
        else if (depth > 1) return "#ADD8E6"; // Light Blue
        else return "#B0E0E6"; // Powder Blue
    }

    var legend = L.control({ position: "bottomright" });

    legend.onAdd = function(map) {
        var div = L.DomUtil.create("div", "info legend"),
            depths = [-1, 1, 2, 3, 4, 5],
            labels = [];

        // Adding a title to our legend
        div.innerHTML += "<h4 class='legend-text'>Earthquake Magnitude</h4>";

        for (var i = 0; i < depths.length; i++) {
        div.innerHTML +=
        '<i class="legend-square depth-' + (depths[i] + 1) + '" style="background:' + CoordinateColor(depths[i] + 1) + '; width: 20px; height: 20px; float: left; margin-right: 8px; opacity: 0.7;"></i>' +
        '<span class="legend-number">' + depths[i] + (depths[i + 1] ? '&ndash;' + depths[i + 1] : '+') + '</span><br>';
        }

        return div;
    };

    // Add the legend to the map
    legend.addTo(map);




    
});



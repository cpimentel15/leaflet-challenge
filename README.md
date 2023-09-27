# leaflet-challenge

Earthquake Data Visualization with Leaflet and D3
This project uses Leaflet, a JavaScript mapping library, and D3, a JavaScript data visualization library, to display earthquake data on an interactive map. The map shows earthquake locations, magnitudes, and depths with customizable markers and a legend.

Getting Started
Clone this repository to your local machine.

Open the index.html file in a web browser to view the earthquake map.

Components
index.html
The main HTML file that sets up the structure of the web page.
Includes links to Leaflet, D3, and the custom JavaScript file logic.js.
Defines the map container with an id of "map."
logic.js
Contains the JavaScript code that creates and configures the map, fetches earthquake data, and displays it using Leaflet and D3.
Defines marker size and color functions based on earthquake properties.
Adds popups to earthquake markers.
Creates a legend that indicates earthquake depth.
style.css
Defines the CSS styles for the web page, including the map container, legend, and marker colors.
Customization
You can customize the map by:

Changing the initial map view by modifying setView in logic.js.
Choosing different map styles by changing the id parameter in the L.tileLayer URL in logic.js.
Adjusting marker size and color by modifying the circleSize and CoordinateColor functions in logic.js.
Modifying the legend labels and colors in both style.css and logic.js.
Acknowledgments
Leaflet: https://leafletjs.com/
D3: https://d3js.org/
Earthquake data provided by the U.S. Geological Survey: https://earthquake.usgs.gov/

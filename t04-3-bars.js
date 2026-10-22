
// ==========================================
// T04-3: Create a responsive SVG canvas
// ==========================================

// Create an SVG inside the responsive container
const svg = d3.select(".responsive-svg-container")
    .append("svg")
    .attr("viewBox", "0 0 1200 1600")
    .style("border", "1px solid black");


// ==========================================
// Test shape: draw a blue rectangle
// ==========================================

svg
    .append("rect")
    .attr("x", 10)
    .attr("y", 10)
    .attr("width", 414)
    .attr("height", 16)
    .attr("fill", "blue");

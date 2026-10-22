
/* Step 1: Change the heading colour to green */
d3.select("h1")
    .style("color", "green");


/* Step 2: Add a paragraph inside the content div */
d3.select("#content")
    .append("p")
    .text("Purchasing a low energy consumption TV will help with your energy bills!");


/* Step 3: Append the first empty rectangle */
d3.select("svg")
    .append("rect");


/* Step 4: Append the second rectangle and style it */
d3.select("svg")
    .append("rect")
    .attr("x", 50)
    .attr("y", 50)
    .attr("width", 100)
    .attr("height", 30)
    .style("fill", "green");

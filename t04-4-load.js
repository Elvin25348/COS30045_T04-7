
// T04-4: Load CSV and convert the numeric column

d3.csv("data/tvBrandCount.csv", d => ({
    brand: d.brand,
    count: +d.count
})).then(data => {

    console.log(data);
    console.log("rows:", data.length);
    console.log("max:", d3.max(data, d => d.count));
    console.log("min:", d3.min(data, d => d.count));
    console.log("extent:", d3.extent(data, d => d.count));

    // Sort from highest count to lowest count
    data.sort((a, b) => d3.descending(a.count, b.count));

    // Call the chart function defined in t04-5-bars.js
    createBarChart(data);

}).catch(error => {
    console.error("Failed to load the CSV:", error);
});


// ==========================================
// T04-6: Bar chart with x and y scales
// ==========================================

const createBarChart = (data) => {

    // Step 1: Set the SVG coordinate system and display size
    const viewW = 500;
    const viewH = 1600;

    const displayW = 640;
    const displayH = 420;

    // Create an SVG inside the responsive container
    const svg = d3.select(".responsive-svg-container")
        .append("svg")
        .attr("viewBox", `0 0 ${viewW} ${viewH}`)
        .attr("width", displayW)
        .attr("height", displayH)
        .style("border", "1px solid black");


    // Step 2: Linear scale for numeric x values
    const xMax = d3.max(data, d => d.count);

    const xScale = d3.scaleLinear()
        .domain([0, xMax])
        .range([0, viewW]);


    // Step 3: Band scale for categorical y positions
    const yScale = d3.scaleBand()
        .domain(data.map(d => d.brand))
        .range([0, viewH])
        .paddingInner(0.2)
        .paddingOuter(0.1);


    // Step 4: Bind data and draw the bars
    svg.selectAll("rect")
        .data(data)
        .join("rect")

        // Give each bar a class
        .attr("class", d => `bar bar-${d.count}`)

        // Start each bar at the left edge
        .attr("x", 0)

        // Position each bar vertically by brand
        .attr("y", d => yScale(d.brand))

        // Calculate bar width using the linear scale
        .attr("width", d => xScale(d.count))

        // Calculate bar height using the band scale
        .attr("height", yScale.bandwidth())

        // Set bar colour
        .attr("fill", "steelblue");

};

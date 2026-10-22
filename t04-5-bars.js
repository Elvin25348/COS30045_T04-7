
// ==========================================
// T04-7: Bar chart with category and value labels
// ==========================================

const createBarChart = (data) => {

    // --- Sizes (logical vs. display) ---
    const viewW = 500;
    const viewH = Math.max(220, data.length * 28);

    const displayW = 640;
    const displayH = Math.min(480, data.length * 24 + 40);

    // --- SVG root ---
    const svg = d3.select(".responsive-svg-container")
        .append("svg")
        .attr("viewBox", `0 0 ${viewW} ${viewH}`)
        .attr("width", displayW)
        .attr("height", displayH)
        .style("border", "1px solid #ccc");

    // --- Scales from T04-6 ---
    const xMax = d3.max(data, d => d.count) || 0;

    // Reserve space for the category labels.
    const labelX = 100;

    // Reserve space at the right for the value labels.
    const valueLabelSpace = 45;

    // Linear scale for numeric values.
    const xScale = d3.scaleLinear()
        .domain([0, xMax])
        // Leave room for labels so the bars fit within the viewBox.
        .range([0, Math.max(0, viewW - labelX - valueLabelSpace)]);

    // Band scale for brand categories.
    const yScale = d3.scaleBand()
        .domain(data.map(d => d.brand))
        .range([0, viewH])
        .paddingInner(0.2)
        .paddingOuter(0.1);


    // --- OLD rectangle-only drawing block from T04-6 ---
    // Kept for reference, but disabled for T04-7.

    /*
    svg.selectAll("rect")
        .data(data)
        .join("rect")
        .attr("class", d => `bar bar-${d.count}`)
        .attr("x", 0)
        .attr("y", d => yScale(d.brand))
        .attr("width", d => xScale(d.count))
        .attr("height", yScale.bandwidth())
        .attr("fill", "steelblue");
    */


    // --- NEW in T04-7: One group per data row ---
    // Each group contains one bar and two labels.

    const barAndLabel = svg
        .selectAll("g")
        .data(data)
        .join("g")
        .attr("transform", d => `translate(0, ${yScale(d.brand)})`);


    // --- Bar rectangle inside each group ---

    barAndLabel
        .append("rect")
        .attr("class", d => `bar bar-${d.count}`)
        .attr("x", labelX)
        .attr("y", 0)
        .attr("width", d => xScale(d.count))
        .attr("height", yScale.bandwidth())
        .attr("fill", "steelblue");


    // --- Category label to the left of the bar ---

    barAndLabel
        .append("text")
        .text(d => d.brand)
        .attr("x", labelX)
        .attr("y", 15)
        .attr("text-anchor", "end")
        .style("font-family", "sans-serif")
        .style("font-size", "13px");


    // --- Numeric value label after the bar ---

    barAndLabel
        .append("text")
        .text(d => d.count)
        .attr("x", d => labelX + xScale(d.count) + 4)
        .attr("y", 12)
        .style("font-family", "sans-serif")
        .style("font-size", "13px");

};

document.addEventListener("DOMContentLoaded", function () {
  const urls = {
    // urls van verschillende mappen in een array
    "Lichtmasten": "https://kepler.gl/demo/map?mapUrl=https://dl.dropboxusercontent.com/scl/fi/2a8so51ad1w49bz2wup3i/Lichtmasten-beschadigen-in-Den-Haag.json?rlkey=6ndvun096wpf33zaw1ge3p8rb&dl=0",
    "l-Aanslag": "https://kepler.gl/demo/map?mapUrl=https://dl.dropboxusercontent.com/scl/fi/ax03jcjkyxgg0v0ji2c4v/Lichtenmasten-met-Verf-Dekking-beschadiging-in-Den-Haag.json?rlkey=soz7vrxjb8g62wi8mct0u3ac6&dl=0",
    "l-Deuken-Gaten": "https://kepler.gl/demo/map?mapUrl=https://dl.dropboxusercontent.com/scl/fi/4q0x3y8tfm8du6tmcmi2q/Lichtenmasten-met-Stickers-Graffiti-beschadiging-in-Den-Haag.json?rlkey=p5ayqj4p04a1d0l1e1ra38663&dl=0",
    "l-Scheefstand": "https://kepler.gl/demo/map?mapUrl=https://dl.dropboxusercontent.com/scl/fi/0o4vkehsc3ygkzm111cln/Lichtenmasten-met-Scheefstand-beschadiging-in-Den-Haag-Copy.json?rlkey=pxtwx3nv3w378r8me2qgjhfuh&dl=0",
    "l-Stickers-Graffiti": "https://kepler.gl/demo/map?mapUrl=https://dl.dropboxusercontent.com/scl/fi/r9fvrhtnc707uv484kfn2/Lichtenmasten-met-Deuken-en-gaten-beschadiging-in-Den-Haag.json?rlkey=41amh9tubsx3gi5467xnywqzn&dl=0",
    "l-Verf-Dekking": "https://kepler.gl/demo/map?mapUrl=https://dl.dropboxusercontent.com/scl/fi/9kslbwslaj052cll32sag/Lichtenmasten-met-Aanslag-beschadiging-in-Den-Haag.json?rlkey=on8j6zt7m6wfvkcr6vwfny1i1&dl=0",
    "Borden": "https://kepler.gl/demo/map?mapUrl=https://dl.dropboxusercontent.com/scl/fi/t5f8v6czgd63q2qakqoo0/Borden-met-beschadigen-in-Den-Haag-Copy.json?rlkey=jiypcutsrw8qnylo8jskzdckh&dl=0",
    "b-Aanslag": "https://kepler.gl/demo/map?mapUrl=https://dl.dropboxusercontent.com/scl/fi/z5hv1qt6hel3sxe9r50nf/Borden-met-Aanslag-beschadiging-in-Den-Haag.json?rlkey=kkteqkf14q8xvl5mh305o5cob&dl=0",
    "b-Deuken-Gaten": "https://kepler.gl/demo/map?mapUrl=https://dl.dropboxusercontent.com/scl/fi/wfbb9o5nay0jxntskkvn5/Borden-met-Deuken-Gaten-beschadiging-in-Den-Haag.json?rlkey=3m39oatxilxnwp95racjgd5xt&dl=0",
    "b-Kleurechtheid": "https://kepler.gl/demo/map?mapUrl=https://dl.dropboxusercontent.com/scl/fi/hbnpw5jzkrapxpqrn5d3o/Borden-met-Kleurechtheid-beschadiging-in-Den-Haag.json?rlkey=p1sv6x8vxc2v0jzi1kn4ze6aw&dl=0",
    "b-Scheefstand": "https://kepler.gl/demo/map?mapUrl=https://dl.dropboxusercontent.com/scl/fi/njds9c7db7518i0fkh0vn/Borden-met-Scheefstand-beschadiging-in-Den-Haag.json?rlkey=x1w4xnqefo7xc2ptbod2131m5&dl=0",
    "b-Stickers-Graffiti": "https://kepler.gl/demo/map?mapUrl=https://dl.dropboxusercontent.com/scl/fi/f3uaxjvo4xd0p14jknk64/Borden-met-Stickers-Graffiti-beschadiging-in-Den-Haag.json?rlkey=mlidd3w353ve81jfrmprzee5b&dl=0",
    "b-Verdraaiing": "https://kepler.gl/demo/map?mapUrl=https://dl.dropboxusercontent.com/scl/fi/kjupwp0kfsdqz7hwupa81/Borden-met-Verdraaiing-beschadiging-in-Den-Haag.json?rlkey=ayqy06qsxlld7fuzvlb5h8zfy&dl=0",
    "b-Verf-Dekking": "https://kepler.gl/demo/map?mapUrl=https://dl.dropboxusercontent.com/scl/fi/0tr95bp3gyvkaw198fuji/Borden-met-Verf-Dekking-beschadiging-in-Den-Haag-Copy.json?rlkey=z6izmurv7w673qjtlkn7on20r&dl=0",
    "Wegdekken": "https://kepler.gl/demo/map?mapUrl=https://dl.dropboxusercontent.com/scl/fi/fo290xfnwwx0isbn0pvlp/Wegdekken-met-beschadigen-in-Den-Haag.json?rlkey=178ulxk4e3eh1gi330btk20iv&dl=0",
    "w-Oneffenheden": "https://kepler.gl/demo/map?mapUrl=https://dl.dropboxusercontent.com/scl/fi/290m2kfrrdxa87sqqo3km/Wegdekken-met-Oneffenheden-beschadiging-in-Den-Haag.json?rlkey=bn3xrwyrsnhjb1mzwv08ele81&dl=0",
    "w-Onkruid": "https://kepler.gl/demo/map?mapUrl=https://dl.dropboxusercontent.com/scl/fi/2ck8ealmz7puzo6q0kz3e/Wegdekken-met-Onkruid-beschadiging-in-Den-Haag.json?rlkey=eowuk5621dtn99f6ij2fnmovd&dl=0",
    "w-Rafeling": "https://kepler.gl/demo/map?mapUrl=https://dl.dropboxusercontent.com/scl/fi/0oh3is3qnt2pdy6ijf0nd/Wegdekken-met-Rafeling-beschadiging-in-Den-Haag.json?rlkey=bh1qwfrfnwe7wzn55bujdj189&dl=0",
    "w-Schade-bij-wegmarkering": "https://kepler.gl/demo/map?mapUrl=https://dl.dropboxusercontent.com/scl/fi/54zlmosbxkbfbylb828wz/Wegdekken-met-Schade-bij-wegmarkering-beschadiging-in-Den-Haag.json?rlkey=agg1sux3cupg3nip2hmbghfde&dl=0",
    "w-Scheurvorming": "https://kepler.gl/demo/map?mapUrl=https://dl.dropboxusercontent.com/scl/fi/ja7qe2ar2qar2so6rw79t/Wegdekken-met-Scheurvorming-beschadiging-in-Den-Haag.json?rlkey=iua1mqkfts1if48d2ugdpu4t4&dl=0",
    "w-Wortelopdruk": "https://kepler.gl/demo/map?mapUrl=https://dl.dropboxusercontent.com/scl/fi/g2ghxdzvzktew4raipucg/Wegdekken-met-Wortelopdruk-beschadiging-in-Den-Haag.json?rlkey=x8pgafo4a1z7avth1iiej32pv&dl=0",
  };

  // Selecteer het iframe element
  const iframe = document.getElementById("mapIframe");

  // Voeg een click event toe aan elke button in de schade-objecten (hoofdcategorieën)
  const categoryButtons = document.querySelectorAll(".schade-objecten button");
  categoryButtons.forEach((button) => {
    button.addEventListener("click", function () {
      // Haal de URL op uit de array en laad het in het iframe
      const id = button.textContent.trim();
      const url = urls[id];
      if (url) {
        iframe.src = url;
      }
    });
  });

  // Voeg een click event toe aan elke submenu button in de schade-levels
  const submenuButtons = document.querySelectorAll(".schade-levels button");
  submenuButtons.forEach((button) => {
    button.addEventListener("click", function () {
      // Haal de URL op uit de array en laad het in het iframe
      const url = urls[button.id];
      if (url) {
        iframe.src = url;
      }
    });
  });
});



// ----------------------- //
// filter code
// ----------------------- //

document.addEventListener("DOMContentLoaded", function () {
  // Get all the category buttons and corresponding sections
  const categoryButtons = document.querySelectorAll(".schade-objecten button");
  const categorySections = document.querySelectorAll(
    '[id="Lichtmasten"], [id="Borden"], [id="Wegdekken"]'
  );

  // Get all the submenu buttons
  const submenuButtons = document.querySelectorAll(".schade-levels button");

  // Function to hide all category sections
  function hideAllCategorySections() {
    categorySections.forEach((section) => {
      section.style.display = "none";
    });
    categoryButtons.forEach((button) => {
      button.style.textDecoration = "none";
    });
  }

  // Function to reset all submenu buttons' underlines
  function resetSubmenuUnderlines() {
    submenuButtons.forEach((button) => {
      button.style.textDecoration = "none";
    });
  }

  // Add click event to each category button
  categoryButtons.forEach((button) => {
    button.addEventListener("click", function () {
      // Hide all category sections
      hideAllCategorySections();

      // Reset submenu underlines
      resetSubmenuUnderlines();

      // Get the ID corresponding to the clicked button
      const id = button.textContent.trim();

      // Show the section with the matching ID and underline the category button
      categorySections.forEach((section) => {
        if (section.id === id) {
          section.style.display = "block";
          button.style.textDecoration = "underline";
        }
      });
    });
  });

  // Add click event to each submenu button
  submenuButtons.forEach((button) => {
    button.addEventListener("click", function () {
      // Reset all submenu buttons' underlines
      resetSubmenuUnderlines();

      // Underline the clicked submenu button
      button.style.textDecoration = "underline";
    });
  });

  // Initially hide all category sections and reset all underlines
  hideAllCategorySections();
  resetSubmenuUnderlines();
});


// ----------------------- //
// slider code
// ----------------------- //

// code from https://www.w3schools.com/howto/howto_js_rangeslider.asp

var slider = document.getElementById("myRange");
var output = document.getElementById("demo");
output.innerHTML = slider.value; // Display the default slider value

// Update the current slider value (each time you drag the slider handle)
slider.oninput = function() {
  output.innerHTML = this.value;
}




// ----------------------- //
// stacked bar chart code
// ----------------------- //



// code from https://d3-graph-gallery.com/graph/barplot_stacked_hover.html

var margin = { top: 10, right: 30, bottom: 20, left: 50 },
  width = 460 - margin.left - margin.right,
  height = 400 - margin.top - margin.bottom;

// append the svg object to the body of the page
var svg = d3
  .select("#my_dataviz")
  .append("svg")
  .attr("width", width + margin.left + margin.right)
  .attr("height", height + margin.top + margin.bottom)
  .append("g")
  .attr("transform", "translate(" + margin.left + "," + margin.top + ")");

// Parse the Data
d3.csv(
  "https://raw.githubusercontent.com/holtzy/D3-graph-gallery/master/DATA/data_stacked.csv",
  function (data) {
    // List of subgroups = header of the csv files = soil condition here
    var subgroups = data.columns.slice(1);

    // List of groups = species here = value of the first column called group -> I show them on the X axis
    var groups = d3
      .map(data, function (d) {
        return d.group;
      })
      .keys();

    // Add X axis
    var x = d3.scaleBand().domain(groups).range([0, width]).padding([0.2]);
    svg
      .append("g")
      .attr("transform", "translate(0," + height + ")")
      .call(d3.axisBottom(x).tickSizeOuter(0));

    // Add Y axis
    var y = d3.scaleLinear().domain([0, 60]).range([height, 0]);
    svg.append("g").call(d3.axisLeft(y));

    // color palette = one color per subgroup
    var color = d3
      .scaleOrdinal()
      .domain(subgroups)
      .range(["#C7EFCF", "#FE5F55", "#EEF5DB"]);

    //stack the data? --> stack per subgroup
    var stackedData = d3.stack().keys(subgroups)(data);

    // ----------------
    // Create a tooltip
    // ----------------
    var tooltip = d3
      .select("#my_dataviz")
      .append("div")
      .style("opacity", 0)
      .attr("class", "tooltip")
      .style("background-color", "white")
      .style("border", "solid")
      .style("border-width", "1px")
      .style("border-radius", "5px")
      .style("padding", "10px");

    // Three function that change the tooltip when user hover / move / leave a cell
    var mouseover = function (d) {
      var subgroupName = d3.select(this.parentNode).datum().key;
      var subgroupValue = d.data[subgroupName];
      tooltip
        .html("subgroup: " + subgroupName + "<br>" + "Value: " + subgroupValue)
        .style("opacity", 1);
    };
    var mousemove = function (d) {
      tooltip
        .style("left", d3.mouse(this)[0] + 90 + "px") // It is important to put the +90: other wise the tooltip is exactly where the point is an it creates a weird effect
        .style("top", d3.mouse(this)[1] + "px");
    };
    var mouseleave = function (d) {
      tooltip.style("opacity", 0);
    };

    // Show the bars
    svg
      .append("g")
      .selectAll("g")
      // Enter in the stack data = loop key per key = group per group
      .data(stackedData)
      .enter()
      .append("g")
      .attr("fill", function (d) {
        return color(d.key);
      })
      .selectAll("rect")
      // enter a second time = loop subgroup per subgroup to add all rectangles
      .data(function (d) {
        return d;
      })
      .enter()
      .append("rect")
      .attr("x", function (d) {
        return x(d.data.group);
      })
      .attr("y", function (d) {
        return y(d[1]);
      })
      .attr("height", function (d) {
        return y(d[0]) - y(d[1]);
      })
      .attr("width", x.bandwidth())
      .attr("stroke", "grey")
      .on("mouseover", mouseover)
      .on("mousemove", mousemove)
      .on("mouseleave", mouseleave);
  }
);

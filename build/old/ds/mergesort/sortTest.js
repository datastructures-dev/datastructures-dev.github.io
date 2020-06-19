var count = 1 + 50,
    durationTime = 2000 / count,
    array = [],
    unsortedArray = [...array],
    sortedArray = [],
    stop = false,
    steps = 0,
    bogoShuffles = 0;



var margin = { top: 40, right: 40, bottom: 180, left: 40 },
    width = 960 - margin.left - margin.right,
    height = 5000 - margin.top - margin.bottom;

var barWidth = width / count;

var x = d3.scaleLinear()
    .domain([0, count])
    .range([0, width]);

var svg = d3.select("body").append("svg")
    .attr("width", width + margin.left + margin.right)
    .attr("height", height + margin.top + margin.bottom)
    .append("g")
    .attr("transform", "translate(" + margin.left + "," + margin.top + ")")

var rects; 

var labels;

function add() {
    console.log("Adding")
    var value = document.getElementById("item").value;
    //var tempArr=[]
    if (value === "") {
        alert("Please enter a valid value");
        return;
    }

    var numbers = value.split(",");

    for (var i = 0; i < numbers.length; i++) {
        if (isNaN(numbers[i])) {
            alert("Please enter a valid value");
            tempArr = [];
            return;
        }

        array.push(parseInt(numbers[i]));
    }
    console.log(array)
    unsortedArray = [...array]
    
    console.log(unsortedArray)
    count = numbers.length+1,
    
    durationTime = 2000 /count ,
    barWidth = width / count;

    rects = svg.append("g")
        .attr("transform", "translate(" + barWidth + ",2)")
        .selectAll("rect")
        .data(unsortedArray)
        .enter().append("rect")

    labels = svg.selectAll("text")
        .data(unsortedArray)
        .enter().append("text")

    labels.attr("id", function (d) { return "text" + d })
        .attr("transform", function (d, i) { return "translate(" + x(i) + ",0)" })
        .html(function (d) { return d; })

    rects.attr("id", function (d) { return "rect" + d })
        .attr("transform", function (d, i) { return "translate(" + (x(i) - barWidth) + ",0)" })
        .attr("width", barWidth * .9)
        .attr("height", function (d) { return d * barWidth / 3 })


}

function reset() {
    unsortedArray = [...array];
    sortedArray = [];
    stop = false;

    d3.select("#counter").html(steps = 0)

    labels.attr("class", "")
        .transition().duration(2000)
        .attr("transform", function (d, i) { return "translate(" + (x(i)) + ", 0)" })

    rects.attr("class", "")
        .transition().duration(2000)
        .attr("transform", function (d, i) { return "translate(" + (x(i - 1)) + ", 0)" })
}


function mergeSort() {
    var mergeReps = (unsortedArray.length).toString(2).length + 1;
    var mergeArrays = [[...unsortedArray], []];

    for (i = 0; i < unsortedArray.length; i += 2) {
        mergeArrays[1].push(mergeTwo([unsortedArray[i]], [unsortedArray[i + 1]]))
    }
    for (n = 2; n < mergeReps; n++) {
        mergeArrays[n] = [];
        var unMerged = mergeArrays[n - 1];
        for (i = 0; i < unMerged.length; i += 2) {
            mergeArrays[n].push(mergeTwo(unMerged[i], unMerged[i + 1] ? unMerged[i + 1] : []))
        }
    }
    for (i = 1; i < mergeArrays.length; i++) {
        mergeArrays[i] = d3.merge(mergeArrays[i])
    }
    mergeMove(0);

    function mergeTwo(iArray, nArray) {
        var newArray = [];
        for (var i = 0, n = 0; i < iArray.length || n < nArray.length;) {
            if (iArray[i] < nArray[n]) {
                newArray.push(iArray[i++])
            } else if (iArray[i] > nArray[n]) {
                newArray.push(nArray[n++])
            } else if (!(iArray[i])) {
                newArray.push(nArray[n++])
            } else if (!(nArray[n])) {
                newArray.push(iArray[i++])
            }
        }
        return newArray;
    }

    function mergeMove(j) {
        var oldArray = mergeArrays[j],
            newArray = [...mergeArrays[j + 1]],
            sortedArray = [];

        moveStep(0);

        function moveStep(n) {
            if (stop) return stop = false;
            d3.selectAll("rect").attr("class", "")

            d3.select("#counter").html(++steps);
            d3.select("#rect" + newArray[n]).attr("class", "testing")

            sortedArray.push(newArray[n])
            oldArray.shift()

            rects.transition().duration(durationTime)
                .attr("transform", function (d) {
                    var xVal = sortedArray.indexOf(d) > -1 ? sortedArray.indexOf(d) : oldArray.indexOf(d) + sortedArray.length;
                    return "translate(" + x(xVal - 1) + ",0)"
                })

            labels
                .classed("sorted", function (d) {
                    return !mergeArrays[j + 2] && sortedArray.indexOf(d) == d - 1;
                })
                .transition().duration(durationTime)
                .attr("transform", function (d) {
                    var xVal = sortedArray.indexOf(d) > -1 ? sortedArray.indexOf(d) : oldArray.indexOf(d) + sortedArray.length;
                    return "translate(" + x(xVal) + ",0)"
                })

            d3.timeout(function () {
                if (oldArray.length > 0) {
                    moveStep(++n)
                } else if (mergeArrays[j + 2]) {
                    mergeMove(++j)
                } else {
                    rects.classed("testing", false)
                }
            }, durationTime);
        }
    }
}

function slide(d, i) {
    d3.select("#text" + d)
        .transition().duration(durationTime)
        .attr("transform", function (d) { return "translate(" + (x(i)) + ", 0)" })

    d3.select("#rect" + d)
        .transition().duration(durationTime)
        .attr("transform", function (d) { return "translate(" + (x(i - 1)) + ", 0)" })
}


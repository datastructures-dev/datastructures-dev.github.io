//global vars
var array = [15, 5, 1, 10, 7];
var queue = [];
var qs;
var partitions = 0;
var tempArr = []

function createDataSet() {
    if (tempArr.length > 0) {
        array = tempArr;
    } 
}


function initArrayOnUi() {
    $("#row").empty();
    createDataSet();
    var t = document.getElementById("row");
    for (var i = 0; i < array.length; i++) {
        var li = document.createElement("li");
        li.setAttribute("id", array[i]);
        li.setAttribute("class", "custom")
        li.innerHTML = array[i];
        t.appendChild(li);
    }


}
initArrayOnUi();

function add() {
    var value = document.getElementById("item").value;

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

        tempArr.push(parseInt(numbers[i]));
    }

    initArrayOnUi();
    clean();
}

function clean() {
     $("#events").html("");
     $("#progress").removeClass("done");
      $("#progress").html("");
}
function sort() {
    createDataSet();

    var isDesc = document.getElementById("desc").checked;
    var order = "asc";
    if (isDesc === true) {
        order = "desc";
    }
    var ms = new MergeSort(array);
    array = ms.sort();
    console.log(array);
    console.log(queue);
     initArrayOnUi();
}

function animate(list, callback) {
    if (list.length == 0) {
        //showMessage("#status", "Done", "green")
        $("#events").html("");
        $("#progress").html("Done Sorting! Took " + this.partitions + " partitions to compare n sort.");
        $("#progress").addClass("done");
        $("#row").find('li').removeClass("custom")
        $("#row").find('li').addClass("sorted")
        tempArr = [];
        queue = [];
        return;
    }

    // dequeue the queue
    var model = list.shift();
    $(function () {
        $("#" + model.pivot).addClass("pivot");
        $("#progress").fadeIn("slow").html(
            "Partitioning and sorting the array(" + model.range + ") based on current Pivot value " + model.pivot);
        $("#events").html("");
        evtsAnimation(model.events, model.pivot, list, callback);
    });

}

function evtsAnimation(events, pivot, list, callback) {
    if (events.length === 0) {
        $("#row").find('li').removeClass("pivot selected");
        $("#progress").fadeIn("slow").html("Array Items Rearranged, All left items to pivot are less and all right items to pivot are greater ");
        setTimeout(function () {
            animate(list, callback);
        }, 3000)

    }

    var evt = events.shift();//dequeu the array
    if (typeof evt !== "undefined") {
        setTimeout(function () {
            $("#" + evt.start).addClass("selected")
            $("#" + evt.end).addClass("selected");
            $("#events").fadeIn("slow").html("Comparing Value " + evt.start + " with " + pivot);
            if (evt.swap === true) {
                $("#events").fadeIn("slow").html("Swapping Current value " + evt.start + " with last sorted value " + evt.end);
                $("#" + evt.start).swap({
                    target: evt.end + "",
                    opacity: "0.8",
                    speed: 1000,
                    callback: function () {
                        $("#" + evt.start).removeClass("selected");
                        $("#" + evt.end).removeClass("selected")

                    }
                });
            }
            evtsAnimation(events, pivot, list, callback);
        }, 3000);
    }



}
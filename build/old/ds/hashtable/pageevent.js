var hashTable = new HashTable();
var keysDone = []
var valuesAdded=[]
var idxs=[]
function initTable() {
	var bucketCount = 0;
	var t = document.getElementById("hashtable");
	// for (var j = 1; j <= 2; j++) {
	// 	var tr = document.createElement("tr");
	// 	for (var i = 1; i <= 2; i++) {
	for (var j = 0; j < 2; j++) {
		var tr = document.createElement("tr");
		for (var i = 0; i < 2; i++) {
			var td = document.createElement("td");
			td.setAttribute("id", ++bucketCount);
			// td.setAttribute("id", bucketCount);
			tr.appendChild(td);
		}
		t.appendChild(tr);
	}
}
initTable()

function drawRehash(prev, side, c) { //for rehashing
	var bucketCount = 0;
	var t = document.getElementById("hashtable");

	while (t.hasChildNodes()) {
		//console.log("First: "+t)
		t.removeChild(t.firstChild);
	}

	//console.log("Rehashing: " + prev + " " + side)
	
	
	for (var j = 0; j < side; j++) {
		var tr = document.createElement("tr");
		for (var i = 0; i < side; i++) {
			var td = document.createElement("td");
			td.setAttribute("id", ++bucketCount);
			// td.setAttribute("id", bucketCount);
			tr.appendChild(td);
		}
		t.appendChild(tr);
	}

	for(var i=0;i<keysDone.length;i++){
		//console.log("Groovy baby: "+keysDone[i]+","+valuesAdded[i])
		showCalculatedPos(keysDone[i]);
		animateColCool(idxs[i],keysDone[i],valuesAdded[i])
	}
}

var eventList = []
var index = -1;

function add() {

	var key = $("#key").val();
	var value = $("#value").val();
	console.log("Trying to add "+key+":"+value)
	if (key === "" || value === "") {
		alert("Please enter valid keys and values")
		return;
	}
	var prev = hashTable.bucketSize ** 0.5;
	var vals = hashTable.put(key, value);
	index = vals[0]
	idxs.push(index)
	keysDone.push(key)
	valuesAdded.push($("#value").val())
	//console.log("In: " + hashTable.in)
	//console.log("Table before drawing: ")
	//console.table(document.getElementById("hashtable"))
	hashTable.print()
	// add the callbacks
	eventList.push(addEvent)
	eventList.push(beginProgress)
	eventList
		.push(function () {
			$("#progress")
				.fadeIn("slow")
				.html(
					"<img src='../images/loading.gif' width='150' height='80' /><br />")
		})
	eventList.push(showCalculatedPos(index))
	eventList.push(animateCol(index));
	// now animate
	animate(eventList);
	var rehashed = vals[1];
	if (rehashed == true) {
		alert("Drawing Rehashing table with new size: " + vals[2])
		drawRehash(prev, vals[2], hashTable.in)
	}
	
	console.log("Keys: "+ keysDone);
	console.log("Values: "+valuesAdded)

}

function search() {
	var key = $("#search").val();
	if (key === "") {
		return;
	}

	index = hashTable.get(key);
	console.log('index ', index);
	if (index == -1) {
		alert("no key found..")
		return;
	}

	// add the callbacks
	eventList.push(highlightCol);
	// now animate
	animate(eventList);
	$("#serach").val("");
}

function remove() {

	var key = $("#search").val();
	if (key === "") {
		return;
	}

	index = hashTable.remove(key);
	console.log('index ', index);
	if (index == -1) {
		alert("no key found..")
		return;
	}

	// add the callbacks
	eventList.push(highlightCol(index));
	eventList.push(removeCol(index));
	// now animate
	animate(eventList);

	$("#search").val("");
}

function addEvent(key, value) {
	var html = "Inserting<br /> <code>Key: " + $("#key").val()
		+ " </code><br /><code>Value: " + $("#value").val() + " </code>"
	$("#itemStaged").animate({
		opacity: 0
	}, 800, function () {
		$("#itemStaged").animate({
			opacity: 1000
		});
		$("#itemStaged").html(html);
	});




}

function beginProgress() {
	$("#progress").fadeIn("slow").html(
		"Using a hash function to compute the bucket location...");
}

function showCalculatedPos(index) {
	$("#progress").fadeIn("slow").html(
		"Position Identified at Index: " + (index)).addClass("green");
}

function animateColCool(index,k,v) {
	console.log("Here at the cool animation")
	$("#" + (index)).animate(
		{
			opacity: 0
		},
		800,
		function () {
			$("#" + (index)).animate({
				opacity: 100
			});
			$("#" + (index)).addClass("focus");
			$("#" + (index)).html(
				"k: " + k + "<br/ > v: "
				+ v);
			$("#" + (index)).addClass("selected");
			reset();
		});
}

function animateCol(index) {
	console.log("Here at the old animation")
	$("#" + (index)).animate(
		{
			opacity: 0
		},
		800,
		function () {
			$("#" + (index)).animate({
				opacity: 100
			});
			$("#" + (index)).addClass("focus");
			$("#" + (index)).html(
				"k: " + $("#key").val() + "<br/ > v: "
				+ $("#value").val());
			$("#" + (index)).addClass("selected");
			reset();
		});
}

function highlightCol(index) {
	$("#" + index).fadeIn(100).fadeOut(100).fadeIn(100).fadeOut(100)
		.fadeIn(100);
}

function removeCol(index) {
	$("#" + index).removeClass("focus selected");
	$("#" + index).html("");
}

function reset() {
	$("#itemStaged").html("");
	$("#progress").html("");
	$("#key").val("");
	$("#value").val("");
	$("#remove").val("");
	$("#search").val("");
	index = -1;
}

function animate(list) {
	if (list.length === 0) {
		return;
	}
	var event = list.shift();
	//console.log("Event: " + event)
	event;

	setTimeout(function () {
		animate(list);
	}, 2000);
}
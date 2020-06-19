// define the list

var array = [3, -5,2,6,1]
function addCol() {
	var t = document.getElementById("row");
	for (var i = 0; i < 5; i++) {
		var li = document.createElement("li");
		li.setAttribute("id", array[i]);
		li.setAttribute("class", "custom")
		li.innerHTML = array[i];
		array.push(array[i]);
		t.appendChild(li);
	}

}
addCol()

var isChoiceAsked = false;
var counter = 0;
function add() {
	if(counter > 10) {
		alert("Only maximum 10 entires allowed");
		document.getElementById("add").value = "";
		return;
	}
	
	if (isChoiceAsked === false) {
		if (confirm('Do you want to clear the existing list.')) {
			$("#row").empty();
		}
		isChoiceAsked = true;
	}

	var t = document.getElementById("row");
	var val = document.getElementById("add").value;
	if(val === "" || isNaN(val)) {
		alert("Please enter a number");
		document.getElementById("add").value = "";
		document.getElementById("add").focus();
		return
	}
	
	document.getElementById("add").value = "";
	var li = document.createElement("li");
	li.setAttribute("id", val);
	li.setAttribute("class", "custom")
	li.innerHTML = val;
	t.appendChild(li);
	document.getElementById("add").focus();
	counter++;
}

function deleteAll() {
	$("#row").empty()
	counter = 0;
	
}


var bubbleSort = new BubbleSort();
var queue = []
var output = []

function sort() {
	var arr = getArray();
	var isDesc = document.getElementById("desc").checked;
	arr = bubbleSort.sort(arr, isDesc, callback);

	animate(queue);
}


function callback(evt) {
	queue.push(evt);
}

function getArray() {
	var arr = [];
	$('ul#row li').each(function(i) {
		arr.push(parseInt($(this).html()))
	});
	
	return arr;
}


function animate(list, callback) {
	if (list.length == 0) {
		showMessage("#status", "Done", "green")
		$("#row").find('li').removeClass("custom")
		$("#row").find('li').addClass("sorted")
		queue = [];
		return;
	}
	
	// dequeue the queue
	var id = list.shift();
	$(function() {
		$("#" + id.s).addClass("selected");
		$("#" + id.e).addClass("selected")

		setTimeout(function(){
			$("#" + id.s).swap({
				target : id.e + "", 
				opacity : "0.8",
				speed : 1000,
				callback : function() { 
					$("#" + id.s).removeClass("selected");
					$("#" + id.e).removeClass("selected")
					animate(list, callback);
				}
			});
		}, 3000)


	});

}

function showMessage(id, html, color) {
	$(id).html(html);
	$(id).css("color", color);
}
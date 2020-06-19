// define the queue
var queue = new Queue();


function addCol(value) {
	var t = document.getElementById("row");
	var tr = document.createElement("tr");
	tr.setAttribute("id", value);
	var td = document.createElement("td");
	td.setAttribute("class", "highlight custom")
	td.innerHTML = value;
	tr.appendChild(td);
	$("#row").append(tr);

}

var defaultValueCounter = 0;
function enqueue() {
	var value = document.getElementById("add").value;
	if (value === "" || value == NaN || value == 'NaN') {
		defaultValueCounter++;
		value = 0;
	} else {
		console.log("Pushing" + ", " + value)
		queue.push(value);
		addCol(value);
	}
	//queue.print();
	document.getElementById("add").value = "";

}

function dequeue() {
	//queue=new Stack();
	setTimeout(function () {
		try {
			var value = queue.pop();
			console.log( "dequeued, " + value);
			removeCol(value);
		} catch (e) {
			showMessage("#status", "Underflow", "red")
		}
	}, 200)
}

function peek() {
	//queue=new Stack();
	setTimeout(function () {
		try {
			var value = queue.top();
			console.log(value)
			alert("Top is: " +value)
			highlightCol(value, "")
		} catch (e) {
			showMessage("#status", "No top", "red")
		}
	}, 200)
}

function tail() {
	//queue=new Stack();
	//setTimeout(function () {
		try {
			var value = queue.back();
			console.log(value)
			alert("Tail is: " +value)
			highlightCol(value, "")
		} catch (e) {
			showMessage("#status", "No tail", "red")
		}
	//}, 200)
}


function highlightCol(value, css) {
	$("#" + value).animate({
		top: "20px"
	});
	setTimeout(function () {
		$("#" + value).find('td').addClass("hightlight");
		showMessage("#status", "Finished", "green")
	}, 500);
}

function removeCol(value) {
	$("#" + value).animate({
		top: "20px"
	});
	$("#" + value).find('td').addClass("focus");
	setTimeout(function () {
		$("#" + value).fadeOut(500).delay(1000).remove();
		showMessage("#status", "Finished", "green")
	}, 500);

}

function showMessage(id, html, color) {
	$(id).html(html);
	$(id).css("color", color);
}
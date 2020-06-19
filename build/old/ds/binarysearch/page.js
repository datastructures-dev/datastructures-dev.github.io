// define the list

var array = []
function addCol() {
	
	
	var t = document.getElementById("row");
	var max = document.getElementById("add").value;
	if(parseInt(max)%10 !== 0 || parseInt(max) > 200) {
		alert("Please add upto 200 items and Multiple of 10's");
		return;
	}
	var value = 1;
	for(var i=1; i<= max/10; i++) {
		var tr = document.createElement("tr");
		for(var j=1; j<= 10; j++) {
			var td = document.createElement("td");
			td.setAttribute("id", value);
			td.setAttribute("class", "custom")
			td.innerHTML = value;
			array.push(value);
			tr.appendChild(td);
			value++;
		}
		
		$("#row").append(tr);
	}

}

var search = new SearchUtil();

var totalComparisons = -1;
var output = []
function find() {
	reset();
	setTimeout(function(){ 
	var v = $("#inp").val();
	if(v === "") {
		showMessage("#status", "Please enter a value", "red")
		return ;
	}
	var isLinear = document.getElementById("isLinear").checked;
	output = search.search(array, v, isLinear);
	highlightCol(output);
	}, 500);
}

var defaultValueCounter = 0;

function reset() {
	$("#row").find('td').removeClass("focus selected");
	showMessage("#status", "", "red")
}

function animate(list, callback) {
    if (list.length === 1) {
        callback(list[0]);
        return;
    }
    var id = list.shift();
    $("#" + ( id+ 1)).animate({opacity: 0}, 800, function () {
    	$("#" + ( id+ 1)).animate({opacity: 800});
    	$("#" + ( id+ 1)).addClass("focus");
        animate(list, callback);
    });
}

function highlightCol(array) {
	totalComparisons = array.length;
	
	if(array[array.length - 1] === -1) {
		showMessage("#status", "No Element found", "red")
		return;
	}
	

	console.log(array)
	
	animate(array, highlight);
	
}

function highlight(val) {
	var id  = ( val+ 1)
	$("#" + id).addClass("selected");

	var message ="Found Element "+ id +" <br /> Total comparisons "+ (totalComparisons);
	showMessage("#status", message , "green")
}


function showMessage(id, html, color) {
	$(id).html(html);
	$(id).css("color", color);
}
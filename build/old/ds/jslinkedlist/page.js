// define the list
	var list = new Linkedlist();

	function addCol(value) {
		var t = document.getElementById("row");
		var node = document.createElement("div");
		node.setAttribute("id", value);
		node.setAttribute("class", "highlight custom")
		node.innerHTML = value;

		if($("#insertType")[0].checked === true) {
			$("#row").prepend(node);
		}else {
			$("#row").append(node);
		}
	}

	

	var defaultValueCounter = 0;
	function add() {
		var value = document.getElementById("add").value;
		if(value === "") {
			defaultValueCounter++;
			value = defaultValueCounter;
		}
		
		if($("#insertType")[0].checked === true) {
			list.insertAtFront(value, addCol);
		}else {
			list.insert(value, addCol);
		}
		
		document.getElementById("add").value = "";
	}
	
	function search() {
		reset();
		var value = document.getElementById("search").value;
		if(value === "") {
			showMessage("#status", "Please enter node value", "red")
			return;
		}
		
		var n = list.search(value, searchHighlight, startChain);
		if(n === undefined) {
			 showMessage("#status", "Element not found..", "red")
			 visitedNodes = [];
		}
	}
	
	function remove() {
		reset();
		var value = document.getElementById("remove").value;
		if(value === "") {
			showMessage("#status", "Please enter node value", "red")
			return;
		}
		var n = list.remove(value, searchHighlight, removeEffect);
		console.log("First: "+n.value)

		if(n === undefined) {
			 showMessage("#status", "Element not found..", "red")
			 visitedNodes = [];
		}
	}
	
	function reset() {
		// find the selected node and reset it.
		$('.focus').removeClass('focus');
		visitedNodes = [];
	}
	
	var visitedNodes =[]
	function searchHighlight(value) {
		visitedNodes.push($("#"+value))
		console.log(visitedNodes)
	}
	
	function startChain() {
		animate(visitedNodes, finished);
	}
	
	function removeNode(value) {
		visitedNodes[0].animate({top:"20px"});
		visitedNodes[0].addClass("focus");
		setTimeout(function(){ 
			visitedNodes[0].fadeOut(500).delay(1000).remove();
			visitedNodes[0] =[];
			 showMessage("#status", "Finished", "green")
		}, 500);
		
	}
	
	function removeEffect(value) {
		animate(visitedNodes, removeNode);
	}

	function finished() {
	    visitedNodes[0].addClass("focus");
	    visitedNodes = [];
	    showMessage("#status", "Finished", "green")
	}

	function animate(list, callback) {
	    if (list.length === 1) {
	        callback();
	        return;
	    }
	    $el = list.shift();
	    $el.animate({opacity: 0}, 1000, function () {
	    	$el.animate({opacity: 1}, 1000);
	        animate(list, callback);
	    });
	}
	
	
	function showMessage(id, html, color) {
		 $(id).html(html);
		 $(id).css("color", color);
	}
	
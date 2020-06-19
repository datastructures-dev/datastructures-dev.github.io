var Linkedlist = function () {
	this.head;
}

function Node() {
	this.value;
	this.next ;
}

Node.prototype.insert = function(value) {
	var current = this;
	if (current.value === undefined) { //has nothing yet
		current.value = value; //insert here
		return;
	}
	
	if(current.next === undefined) { //completely null
		current.next = new Node();//want new node
	}
	var c = current.next;
	c.insert(value);
}

Linkedlist.prototype.insertAtFront = function(value, callback) {
	
	if(value === undefined) {
		return;
	}
	
	if(this.head === undefined) {
		this.head = new Node();
		this.head.value = value;

		if(typeof callback === "function") {
			callback(value);
		}
		
		return;
	}
	
	var newHead = new Node();
	newHead.value = value;
	
	newHead.next = this.head;
	this.head = newHead;
	
	if(typeof callback === "function") {
		callback(value);
	}
}


Linkedlist.prototype.insert = function(value, callback) {
	
	if(value === undefined) {
		return;
	}
	
	
	if(this.head === undefined) {
		this.head = new Node();
		this.head.value = value;

		if(typeof callback === "function") {
			callback(value);
		}
		
		return;
	}
	
	var current = this.head;
	current.insert(value, callback);
	
	if(typeof callback === "function") {
		callback(value);
	}
	
}

Linkedlist.prototype.print = function() {
	if(this.head === undefined) {
		return;
	}
	var current = this.head;
	var nodes = "[ "
	while(current !== undefined) {
		nodes += current.value+" -> "
		current =  current.next;
	}
	nodes += " null]";
	
	console.log(nodes);
}

Linkedlist.prototype.remove = function(value, progressCallBack, postCallBack) {
	
	if(this.head === undefined) {
		return;
	}
	
	if(typeof progressCallBack === "function") {
		progressCallBack(this.head.value);
	}
	
	if(this.head.value+"" === value) {
		
		if(typeof postCallBack === "function") {
			postCallBack();
		}
		//curr=this.head.value
		this.head = this.head.next;
		return this.head;
	}
	
	var current = this.head.next;
	var prev = this.head;
	var found = false;
	while(current !== undefined) {
		if(typeof progressCallBack === "function") {
			progressCallBack(current.value);
		}
		
		if (current.value+"" === value) {
			found = true;
			break;
		}
		
		prev = current;
		current =  current.next;
	}
	
	if(found && typeof postCallBack === "function") {
		console.log("Thing: "+current.value)
		postCallBack(current.value);
		prev.next = current.next;
		return current;
	}
	
	return undefined;
	
}

Linkedlist.prototype.search = function(value, progressCallBack, postCallBack) {
	if(this.head === undefined) {
		return;
	}
	
	if(this.head.value !== undefined && typeof progressCallBack === "function") {
		progressCallBack(this.head.value);
	}
	
	if(this.head.value+"" === value) {
		if(typeof postCallBack === "function") {
			postCallBack();
		}
		return this.head;
	}
	

	var current = this.head.next;
	var found = false;
	while(current !== undefined) {
		
		if(typeof progressCallBack === "function") {
			progressCallBack(current.value);
		}
		
		if (current.value+"" === value) {
			found = true;
			break;
		}
		
		current =  current.next;
	}
	
	if(found && typeof postCallBack === "function") {
		postCallBack();
		return current;
	}
	
	return undefined;
}
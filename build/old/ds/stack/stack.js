
function Node() {
	this.value;
	this.next ;
}

var Stack= function(){
	this.head;
}

Stack.prototype.push=function(value) {
	if(value==undefined || value==""|| value==NaN){
		alert ("Please input proper value (number)")
	}
	if(this.head==undefined||this.head==NaN){//nothing exists yet
		this.head=new Node();
		this.head.value=value;
		this.head.next=new Node();
	}else{//nonempty stack
		var c=new Node;
		c.next = this.head;
		c.value=value;
		this.head=c;
	}	
}

Stack.prototype.print=function(){
	//debugging purposes
	var c=new Stack();
	c.head=this.head
	while(c.head!=undefined || c.head.value!=NaN){
		console.log("Val: "+c.head.value)
		c=c.head.next
	}
	console.log("Head: "+ this.head.value)
}

Stack.prototype.pop=function() {
	console.log("pop")
	if(this.head==undefined){//nothing exists yet
		alert ("Trying to pop null")
	}else{//nonempty stack
		var val=this.head.value;
		this.head=this.head.next;
		return val;
	}	
}

Stack.prototype.top=function() {
	console.log("top")
	if(this.head==undefined){//nothing exists yet
		alert ("Trying to get top of null")
	}else{//nonempty stack
		var val=this.head.value;
		return val;
	}	
}

Node.prototype.insert=function(value) {
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


function Node() {
	this.value;
	this.next ;
}

var Queue= function(){
	this.head;
	this.tail;
}

Queue.prototype.push=function(value) {
	if(value==undefined || value==""|| value==NaN){
		alert ("Please input proper value (number)")
	}
	var c=new Node;
	c.next = new Node;
	c.value=value;
	if(this.head==undefined||this.head==NaN||this.head==null){//nothing exists yet
		this.head=new Node()
		this.head=c;
		this.tail=new Node();	
		this.tail=c;
	}else{//nonempty Queue	
		console.log("Adding to tail during enqueue: "+value)
		this.tail.next=c;
		this.tail=c
		//this.tail.next=new Node;
	}	
}

Queue.prototype.print=function(){
	//debugging purposes
	var c=new Queue();
	c.head=this.head
	while(c.head!=undefined || c.head.value!=NaN){
		console.log("Val: "+c.head.value)
		c=c.head.next
	}
	console.log("Head: "+ this.head.value)
}

Queue.prototype.pop=function() {
	console.log("pop")
	if(this.head==undefined||this.head==null||this.head==NaN||this.head.value==null){//nothing exists yet
		alert ("Trying to pop null")
	}else{//nonempty Queue
		//
		var val=this.head.value;
		this.head=this.head.next;
		console.log("Removing from head during dequeue: "+val)

		 if(this.head==undefined||this.head==null||this.head==NaN||this.head.value==null){
			 console.log("here")
			 this.tail=null;
			 this.head=null;
		 }
		return val;
	}	
}

Queue.prototype.top=function() {
	console.log("top")
	if(this.head==undefined||this.head==null||this.head==NaN){//nothing exists yet
		alert ("Trying to get top of null")
	}else{//nonempty Queue
		var val=this.head.value;
		return val;
	}	
}

Queue.prototype.back=function() {
	console.log("tail")
	if(this.tail==undefined||this.tail==null){//nothing exists yet
		alert ("Trying to get tail of null")
	}else{//nonempty Queue
		var val=this.tail.value;
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


var HashTable = function (side) {
	this.bucketSize = side**2||4;
	this.array = [];
	for(var i= 0; i< this.bucketSize; i++) {
		this.array.push(undefined);
      }
      this.in=0;
}

// holds the entry
var Entry = function(k, v) {
	this.key = k;
	this.value = v
}


// var getHash = function(str, max){
//     var hash = 0;
//     for (var i = 0; i < str.length; i++) {
//       hash = ((hash<< 5) - hash) + str.charCodeAt(i);
//       console.log(hash)
//       hash = hash & hash; // Convert to 32bit integer
//       hash = Math.abs(hash);
   
//     }
//     return hash % max;
// };

// My simple hash implementation
var getHash = function (key, max) {
	return (key % max)+1;
}

HashTable.prototype.isEmpty = function () {
	return this.array.length > 0;
}

HashTable.prototype.print = function () {
	return console.log(this.array)
}

HashTable.prototype.put = function (key, value) {
      var hash = getHash(key, this.bucketSize); //hash is the index at which it is stored
      var replaced=false//replaced value for key
      if(this.array[hash] !== undefined &&this.array[hash].key === key){
            replaced=true;
      }
     while (this.array[hash] !== undefined && this.array[hash].key !== key)
           hash = (hash + 1) % this.bucketSize; //liner probing
     
     if(replaced==false){
            this.in=this.in+1; //add another entry
     }
     var rehashed=false;
     if(this.in/this.bucketSize>=0.7){
           var newTable=new HashTable(this.bucketSize*2)
           newTable= this.rehash();
           //console.log("rehashed for "+this.in+" "+this.bucketSize+" "+ this.in/this.bucketSize)
           rehashed=true;
           this.bucketSize=newTable.bucketSize;
           this.array=newTable.array;
           this.in=newTable.in;
           hash = getHash(key, this.bucketSize);
           console.log(this.bucketSize**0.5)
     }
     this.array[hash] = new Entry(key, value);

     return [hash,rehashed,this.bucketSize**0.5];
}

HashTable.prototype.rehash=function(){
      var newTable=new HashTable((this.bucketSize**0.5)*2);
      //console.log("Doubled from: "+this.bucketSize+" to "+newTable.bucketSize)
      //var hash;
      for(var i=0;i<this.bucketSize;i++){
            if(this.array[i]!=undefined){
                  newTable.put(this.array[i].key,this.array[i].value);//copy all vals
            }
      }
      return newTable;

     // this=newTable;
}
HashTable.prototype.get = function (key) {
	var hash = getHash(key, this.bucketSize);
    while (this.array[hash] !== undefined && this.array[hash].key !== key)
          hash = (hash + 1) % this.bucketSize;
   
    if (this.array[hash] == null)
          return -1;
    else
          return hash;
}

HashTable.prototype.remove = function (key) {
	var hash = this.get(key);
	this.array[hash] = undefined;
      this.print();
      this.in=this.in-1;
	return hash;
}

//I adopted this hash function from the below URL
//http://www.willvillanueva.com/javascript-hash-tables/
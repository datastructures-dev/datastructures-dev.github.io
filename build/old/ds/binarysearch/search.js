function SearchUtil() {

	this.search = function (data, value, isLinear) {
		if(isLinear === true) {
		  return find(data, value);
		} 

		console.log("doing binary" + value)
	  	return findUsingBinarySearch(data, value, 0, data.length - 1);
	}

	var find = function(data, value) {
		var visited = [];
		var isFound = false;
		for (var i = 0; i < data.length; i++) {
			visited.push(i);
			if (data[i] + "" === value) {
				isFound = true;
				break;
			}
		}

		if (!isFound) {
			visited.push(-1)
		}
		return visited


	}


	var findUsingBinarySearch = function (data, value, lo, hi) {
		var visited= [];
		var isFound = false;
		while(lo <= hi) {
			var mid = parseInt((hi + lo) /2);
			visited.push(mid);
			if(data[mid] +"" === value) {
				isFound = true;
				break;				
			}
			
			if(data[mid] > value) {
				hi = mid -1;
			} else {
				lo = mid + 1;
			}
		}

		if(!isFound) {
			visited.push(-1)
		}

		return visited;
	}

}

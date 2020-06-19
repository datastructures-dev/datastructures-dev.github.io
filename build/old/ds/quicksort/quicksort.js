var QuickSort = function (arr, order, queue, key) {
    this.array = arr;
    this.sortOrder = order;
    this.key = key;
    this.queue = queue;
}

QuickSort.prototype.sort = function () {
    return this
        .doSort(this.array, 0, this.array.length - 1);
}

QuickSort.prototype.doSort = function (array, start, end) {
    if (start < end) {
        var pivot = this.partition(array, start, end);
        this.doSort(array, start, pivot - 1);
        this.doSort(array, pivot + 1, end);
    }

    return array;
}

QuickSort.prototype.partition = function (array, startIndex, endIndex) {
    var key = this.key;
    var model = {

    }
    // if key is missing, then it will assume array as some primitive value array
    var pivotValue = (key ? array[endIndex][key] : array[endIndex]);
    model.pivot = pivotValue;
    model.events = [];
    model.range = startIndex +" : "+endIndex;
    var lastSortedIndex = startIndex;

    for (var currenIndex = startIndex; currenIndex < endIndex; currenIndex++) {
        var currenIndexValue = (key ? array[currenIndex][key] : array[currenIndex]);
        var evt = {
            start: array[currenIndex],
            end: array[lastSortedIndex],
        };

        if (this.sortOrder === "asc") {
            if (currenIndexValue <= pivotValue) {
                this.swap(array, lastSortedIndex, currenIndex);
                evt.swap = true;
                lastSortedIndex++;
            }
        } else {
            if (currenIndexValue >= pivotValue) {
                this.swap(array, lastSortedIndex, currenIndex);
                evt.swap = true;
                lastSortedIndex++;
            }
        }

        model.events.push(evt);
    }

    var evt = {
        start: array[endIndex],
        end: array[lastSortedIndex],
        swap: true
    };
    this.swap(array, endIndex, lastSortedIndex)
    model.events.push(evt);

    this.queue.push(model);
    return lastSortedIndex;
}

QuickSort.prototype.swap = function (array, a, b) {
    var temp = array[a]
    array[a] = array[b];
    array[b] = temp;
}

//TODO(rocks): needs to fix
QuickSort.prototype.randomPartition = function(arr, s, e) {

		var n = (e - s + 1);

		var p =  parseInt((Math.random() % n));

		var t = arr[p + 1];
		arr[p + 1] = arr[e];
		arr[e] = t;

		return this.partition(arr, s, e);
	}
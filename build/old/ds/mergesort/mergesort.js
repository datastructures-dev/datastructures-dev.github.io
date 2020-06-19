var MergeSort = function (arr) {
    this.array = arr || [];
}

MergeSort.prototype.sort = function () {
    doSort(this.array);
    return this.array;
}



var doSort = function (arr) {
    var length = arr.length;
    // base condition
    if (length < 2) {
        return;
    }

    var mid = parseInt(length / 2);
    var left = [];
    var right = [];
    for (var i = 0; i < mid; i++) {
        left.push(arr[i]);
    }

    for (var j = 0; j < (length - mid); j++) {
        right.push(arr[(mid + j)]);
    }

    doSort(left);
    doSort(right);
    merge(left, right, arr);
}

var merge = function (left, right, arr) {
    var leftLen = left.length;
    var rightLen = right.length;
    var lIndx = 0,
        rIndx = 0,
        sortedIndx = 0;

    while (lIndx < leftLen && rIndx < rightLen) {
        if (left[lIndx] < right[rIndx]) {
            arr[sortedIndx] = left[lIndx];
            lIndx++;
            sortedIndx++;
        } else if (right[rIndx] < left[lIndx]) {
            arr[sortedIndx] = right[rIndx];
            rIndx++;
            sortedIndx++;
        }
    }
    while (lIndx < leftLen) {
        arr[sortedIndx] = left[lIndx];
        lIndx++;
        sortedIndx++;
    }

    while (rIndx < rightLen) {
        arr[sortedIndx] = right[rIndx];
        rIndx++;
        sortedIndx++;
    }

}
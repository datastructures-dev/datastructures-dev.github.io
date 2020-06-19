/*
 * Licensed under the MIT license: http://www.opensource.org/licenses/mit-license.php
 * Version: 1 (11-Mar-2017)
 */
function BubbleSort() {
	
	this.sort = function(arr, isDesc, callback) {
		// store the last untouched index
		var sortedPartIndex = arr.length;
		// first bucket
		var leftBucketIndex = 0;
		// second bucket
		var rightBucketIndex = 1;
		
		// keep running until sorted index reaches 0 (right to left)
		while (sortedPartIndex > 0) {
			
			if (!isDesc) {
				if (arr[leftBucketIndex] > arr[rightBucketIndex]) {
					var tempBucket = arr[rightBucketIndex];
					arr[rightBucketIndex] = arr[leftBucketIndex];
					arr[leftBucketIndex] = tempBucket;
					if (typeof callback === 'function') {
						callback({
							s : arr[leftBucketIndex],
							e : arr[rightBucketIndex]
						});
					}
				}
			} else {
				if (arr[leftBucketIndex] < arr[rightBucketIndex]) {
					var tempBucket = arr[rightBucketIndex];
					arr[rightBucketIndex] = arr[leftBucketIndex];
					arr[leftBucketIndex] = tempBucket;
					
					if (typeof callback === 'function') {
						callback({
							s : arr[leftBucketIndex],
							e : arr[rightBucketIndex]
						});
					}
					
				}
				
				
			}

			leftBucketIndex++;
			rightBucketIndex++;

			if (rightBucketIndex >= sortedPartIndex) {
				// decrement the sorted part index
				// as the the farthest most element is largest/smallest based on the desc order aked
				sortedPartIndex = sortedPartIndex - 1;
				// reset the left and right bucket index to default, to start
				// over, as the largest is reached at the most right side
				leftBucketIndex = 0;
				rightBucketIndex = 1;
			}

		}
		
		console.log(arr)
	}
}
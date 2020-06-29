#Binary Search algorthim
#Ryan Goudie

class BinarySearch():
	def initialise(self):
		print("Binary Search")

	def find(self,a,key):
		low = 0
		high = len(a)-1
		while (low <= high):
			middle = low + (high-low)
			if (a[middle] < key):
				# middle is < then the key variable.
				lo = middle+1
			elif (a[middle] > key):
				# middle is > then the key variable.
				hi = middle-1
			else:
				return middle
		return -1

# at this point the algorithim is unsuccessfull therefore it will re run to ensure result.

	def testFind(self,a,key):
		lo = 0
		hi = len(a)-1

		while(lo <= hi):
			mid = lo + (hi-lo)/2
			if (a[mid] > key):
				hi = mid-1
			elif (a[mid] < key):
				lo = mid+1
			else:
				return mid
		return lo

#Test data below


j = [1,3,5,8,9,10,12,15]

z = BinarySearch()

x = z.testFind(j,15)
print(x)
print("done")
var arr = [1,2,3,4]
//undefined
arr.fill(arr, 1,3)
/*
(4) [1, Array(4), Array(4), 4]
0: 1
1: (4) [1, Array(4), Array(4), 4]
	0: 1
	1: [1, Array(4), Array(4), 4]
		0: 1
		1: (4) [1, Array(4), Array(4), 4]
		2: (4) [1, Array(4), Array(4), 4]
		3: 4
		length: 4
		__proto__: Array(0)
	2: (4) [1, Array(4), Array(4), 4]
	3: 4
	length: 4
	__proto__: Array(0)
2: (4) [1, Array(4), Array(4), 4]
3: 4
length: 4
__proto__: Array(0)
*/

arr
//(4) [1, Array(4), Array(4), 4]
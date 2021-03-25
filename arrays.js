var arr = [1,2,3]
//(3) [1, 2, 3]


arr.push(4,5)
//5
arr
//(5) [1, 2, 3, 4, 5]

arr.unshift(-1,0)
//7
arr
//(7) [-1, 0, 1, 2, 3, 4, 5]

Object.keys(arr)
//(7) ["0", "1", "2", "3", "4", "5", "6"]

arr.length = 10
//10
arr
//(10) [-1, 0, 1, 2, 3, 4, 5, empty × 3]
Object.keys(arr)
//(7) ["0", "1", "2", "3", "4", "5", "6"]
arr[arr.length -1]
//undefined


/* Array.from(arr)
(10) [-1, 0, 1, 2, 3, 4, 5, undefined, undefined, undefined]
arr
(10) [-1, 0, 1, 2, 3, 4, 5, empty × 3] */


/* Array.from(obj)
[] */
var obj = {l:1, m:2, n:3}
//{l: 1, m: 2, n: 3}

Array.of(arr)
//[Array(10)] //length: 1 
var arr1 = Array.of(arr)
//[Array(10)]
arr1.length
//1
arr1[0]
//(10) [-1, 0, 1, 2, 3, 4, 5, empty × 3]
arr1 = Array.of(arr, arr1)
//(2) [Array(10), Array(1)]
arr1 = Array.of(arr, arr1 , obj)
//(3) [Array(10), Array(2), {…}]
Array.of(1,2,3)
//(3) [1, 2, 3]

Array.isArray(arr)
//true

/* arr.copyWithin(arr1)
//(10) [-1, 0, 1, 2, 3, 4, 5, empty × 3]
arr
//(10) [-1, 0, 1, 2, 3, 4, 5, empty × 3]
arr1
//(3) [Array(10), Array(2), {…}] */


arr
//(10) [-1, 0, 1, 2, 3, 4, 5, empty × 3]

var arr2 = ["a", "b"]
//(2) ["a", "b"]
var arr3 = ['x','y']
//(2) ["x", "y"]
arr.concat(arr2,arr3)
//(14) [-1, 0, 1, 2, 3, 4, 5, empty × 3, "a", "b", "x", "y"]
arr
//(10) [-1, 0, 1, 2, 3, 4, 5, empty × 3]

arr[0,1,2,3,5]
//4

arr.every(function(x,y){console.log(x,y)})
false

arr4 = ['l','m','n']
//(3) ["l", "m", "n"]
arr4.fill()
//(3) [undefined, undefined, undefined]
arr4.fill(0)
//(3) [0, 0, 0]


arr.filter(function(x){ return x%2==0 })
//(3) [0, 2, 4]

arr.forEach(
    function(x){console.log(x**2)})
/*  1
 0
 1
 4
 9
 16
 25
undefined */

arr.findIndex(function(x){ return x%5==1 })
//2
arr.findIndex(function(x){ return x%2==1 })
//2
arr.includes(2)
//true
arr.indexOf(5)
//6
arr3.join("")
//"xy"
arr3.join(".")
//"x.y"
for(var i of arr.keys()){console.log(i)}
/*  0
 1
 2
 3
 4
 5
 6
 7
 8
 9
undefined */
[1,2,3,1].lastIndexOf(1)
3
var arr5 = [1,2,3,5,7]
undefined
arr.map(function(z){return x**2})
VM4671:1 Uncaught ReferenceError: x is not defined
    at <anonymous>:1:21
    at Array.map (<anonymous>)
    at <anonymous>:1:5
(anonymous) @ VM4671:1
(anonymous) @ VM4671:1
arr.map(function(z){return z**2})
(10) [1, 0, 1, 4, 9, 16, 25, empty × 3]
arr5.map(function(z){return z**2})
(5) [1, 4, 9, 25, 49]
arr5.every(function(z){return z%z==0})
true
arr5.every(function(z){return z%2==0})
false
arr5.reduce(function(x,y){console.log(x);return x+y})
VM5158:1 1
VM5158:1 3
VM5158:1 6
VM5158:1 11
18
arr5.reduceRight(function(x,y){console.log(x);return x-y})
VM5183:1 7
VM5183:1 2
VM5183:1 -1
VM5183:1 -3
-4
arr5.reduce(function(x,y){return x-y})
-16
arr5.reverse()
(5) [7, 5, 3


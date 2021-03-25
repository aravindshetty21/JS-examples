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
arr[arr.length-1]
//undefined


Array.from('abc')
['a','b','c']

var obj = {l:1, m:2, n:3}
//{l: 1, m: 2, n: 3}

Array.of(arr)
//[Array(10)] 
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
 9 */
[1,2,3,1,5].lastIndexOf(1)
//3 
var arr5 = [1,2,3,5,7]

arr.map(function(z){return z**2})
//(10) [1, 0, 1, 4, 9, 16, 25, empty × 3]
arr5.map(function(z){return z**2})
//(5) [1, 4, 9, 25, 49]


arr5.every(function(z){return z%z==0})
//true
arr5.every(function(z){return z%2==0})
//false
arr5.reduce(function(x,y){console.log(x); return x+y})
/*  1
 3
 6
 11
18 */
arr5.reduceRight(function(x,y){console.log(x);return x-y})
/*  7
 2
 -1
 -3
-4 */
arr5.reduce(function(x,y){return x-y})
//-16
arr5.reverse()
//(5) [7, 5, 3, 2, 1]

arr5.some(function(z){return z%2==0})
//true
arr5.splice(2,2,8,9)
//(2) [3, 2]
arr5
//(5) [7, 5, 8, 9, 1]
for(i of arr5.values()){console.log(i)}
/* 7
5
8
9
1 */


for(i of arr.values()){console.log(i)}
/*  -1
 0
 1
 2
 3
 4
 5
3 undefined */


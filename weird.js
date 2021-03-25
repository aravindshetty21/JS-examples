let a = '5';
let b = 1;
console.log( a - b); // 4
console.log( a + b); // 51
console.log( null == undefined ) // true

let fun = (function fun1() { return 0 ;})() ; // immediately invoked function
console.log(fun); // 0

arr1 = [1, 2, 3];
arr2 = [1, 2, 3];
arr3 = arr1;
console.log( arr1 == arr2 ); // false
console.log( arr1 == arr3 ); // true
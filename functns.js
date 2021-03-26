function square(num){
    return num*num; 
}

//calling a function
square(5);  //25

var test = 0;
	function write(){
        var test = 1;            // function scope
    }
 console.log(test) ;
 // 0

 // function expressions 

 var square = function(num){return num*num};
 var x = square(5); // 25

 // name of function in function expression in a recursion

 var fibonacci = function fib(x){
    if(x == 0 || x==1){
         return x;
        }
    else{
        return fib(x-1)+fib(x-2);
    }
    }

// based on a condition ;

var num = 0;
var f;
if(num == 0){ f = function(x){ return x*x}};

// A nested function
function getDifference(num1, num2){
    function abs(x){if(x>=0) return x; else return -x} ;
    return abs(num1-num2);
}

//arguments.callee
function factorial1(n) {
    if ((n === 0) || (n === 1))
      return 1;
    else
      return (n * arguments.callee(n - 1));
}

factorial1(5)
//120

// The arguments object
function sum(){
    var s = 0;
    for( var i of arguments){s+=i};
    return s;
}

sum(1,2,3,4)
//10

//default values
function multiply(a, b = 1) {
    return a * b;
  }
  
multiply(5); // 5

// rest parameters
function pro(...num){
    var s=1;
    for(var i of num){s*=i};
    return s;
}
pro(1,2,3,4)
//24

//Arrow functions
a = x=>x*x ;
a(2)
//4
a(8)
//64


eval('b = x=>x*x ;');
b(8)
//64

//passing reference
function fun(x){
    x.age = 20
}
var person = {name: "Aravind", age:"23"}
fun(person);
person;
//{name: "Aravind", age: 20}

//IIFE- immediately invoked functions
var x = (function(){return true})() // x = true



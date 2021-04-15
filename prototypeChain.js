var doSomething = function(){};

doSomething.prototype.foo = `bar`;
"bar"

doSomething.prototype
/* {foo: "bar", constructor: ƒ}
foo: "bar"
constructor: ƒ doSomething()
__proto__: Object */

doSomething.foo
//undefined

var doSomeInstancing = new doSomething();

doSomeInstancing.prop = "a value";
"a value"

doSomeInstancing

/* doSomething {prop: "a value"}
prop: "a value"
__proto__:
foo: "bar"
constructor: ƒ doSomething()
arguments: null
caller: null
length: 0
name: "doSomething"
prototype: {foo: "bar", constructor: ƒ}
__proto__: ƒ ()
[[FunctionLocation]]: VM291:1
[[Scopes]]: Scopes[1]
__proto__: Object */

function Person(first, last, age, gender){
    this.name={
        first, 
        last
    };
    this.age=age;
    this.gender=gender;
};

Person.prototype.subject = 'Physics'
Person
/* ƒ Person(first, last, age, gender){
    this.name={
        first, 
        last
    };
    this.age=age;
    this.gender=gender;
} */
var student = new Person('Aravind', 'Emmadishetty',23, 'Male');
student
/* Person {name: {…}, age: 23, gender: "Male"} */
student.__proto__
/*{subject: "Physics", constructor: ƒ}subject: "Physics"constructor: ƒ Person(first, last, age, gender)__proto__: Object */
student.subject
"Physics"
var obj= Object.create(student);

obj.name
//{first: "Aravind", last: "Emmadishetty"}
obj.subject
"Physics"

Person.prototype == student.__proto__
true

obj
/* Person {}
__proto__: Person
age: 23
gender: "Male"
name: {first: "Aravind", last: "Emmadishetty"}
__proto__:
subject: "Physics"
constructor: ƒ Person(first, last, age, gender)
__proto__: Object */
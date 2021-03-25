obj = Object()
//{}
obj.k1 = 1; obj.k2 = 2
obj
//{k1: 1, k2: 2}
obj1 = Object({k3:3, k4:4})
//{k3: 3, k4: 4}
obj2 = {k5:5, k6:6}
//{k5: 5, k6: 6}
obj3= obj2
//{k5: 5, k6: 6}
delete obj3.k6
//true
obj2
//{k5: 5}
obj2.k4 = 0
obj3
//{k5: 5, k4: 0}
Object.assign(obj,obj1,obj2);
//{k1: 1, k2: 2, k3: 3, k4: 0, k5: 5}

obj
//{k1: 1, k2: 2, k3: 3, k4: 0, k5: 5}k1: 1k2: 2k3: 3k4: 0k5: 5__proto__: Object
obj1
//{k3: 3, k4: 4}
obj2
//{k5: 5, k4: 0}

objr = Object.create(obj)
//{}

objr.k1
1
objr.k4
0



Object.defineProperties(objr , {p1: {value: 'l'} , p2: {value:'m'}})
//{p1: "l", p2: "m"}
objr
//{p1: "l", p2: "m"}

Object.defineProperties(objr , {p3:{value: 'n', writable: true, configurable: true}})
//{p1: "l", p2: "m", p3: "n"}


objr.p1 = 'changed'
objr.p1
//"l"
objr.p3 = "changed"
objr.p3
//"changed"
delete objr.p1
//false
delete objr.p3
//true
objr
//{p1: "l", p2: "m"}

for( var i of Object.entries(obj)) {
    console.log( i[0] ,':', i[1] ) }
/*  k1 : 1
 k2 : 2
 k3 : 3
 k4 : 0
 k5 : 5 */

 obj1 
//{k3: 3, k4: 4}
Object.freeze(obj1)
//{k3: 3, k4: 4}
delete obj1.k3
//false
Object.fromEntries(Object.entries(obj))
//{k1: 1, k2: 2, k3: 3, k4: 0, k5: 5}

var des = Object.getOwnPropertyDescriptors(obj)
des
//{k1: {…}, k2: {…}, k3: {…}, k4: {…}, k5: {…}}
des.k2
//{value: 2, writable: true, enumerable: true, configurable: true}
Object.getOwnPropertyDescriptor(obj, 'k2')
//{value: 2, writable: true, enumerable: true, configurable: true}

Object.getOwnPropertyNames(obj)
//(5) ["k1", "k2", "k3", "k4", "k5"]
Object.getPrototypeOf(objr);
//{k1: 1, k2: 2, k3: 3, k4: 0, k5: 5}
Object.is(1,1)
//true
Object.is(1,2)
//false
""==false
//true
Object.is("",false)
//false

Object.isFrozen(obj1)
//true

Object.keys(obj)
//(5) ["k1", "k2", "k3", "k4", "k5"]
Object.values(obj)
//(5) [1, 2, 3, 0, 5]

obj.hasOwnProperty('k1')
true
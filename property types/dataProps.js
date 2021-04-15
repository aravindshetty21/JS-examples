var obj = {k1:1, k2:2};

Object.defineProperties(obj,{
	"k3":{
		value : 3,
		writable: true,
		configurable: true,
		enumerable: true
	},
	"k4":{
		value : 4,
}});

obj
//{k1: 1, k2: 2, k3: 3, k4: 4}
for(var i in obj){console.log(i)};
/*
k1
k2
k3
*/
delete obj.k1
//true
delete obj.k4
//false
obj.k3 = "changed"
obj
//{k2: 2, k3: "changed", k4: 4}
obj.k4 = "changed"
obj
//{k2: 2, k3: "changed", k4: 4}
function getNset(){};

var value;

Object.defineProperty(getNset.prototype, "x" , {
	get(){return value;},
	set(a){value = a;}
});
var obj = new getNset();
obj.x = 12;
//12
value
//12
obj.x
//12
obj.x = 40;
//40
value 
//40
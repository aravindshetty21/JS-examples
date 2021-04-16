function Lodash(){
	
	this.chunk = function(array, n=1){
		var temp = [];
		var i = 0, j=0;
		while(true){
			temp[i]= array.slice(j,j+n);
			j+=n;
			i+=1;
			if(j>=array.length) break;
		};
		return temp;
	};
	
	this.concat = function(array, ...values){
		var temp = array.concat(this.flatten(values));
		return temp;
	};
	
	this.compact = function(array){
		var temp = array.filter(function(x){
			if(!(x == false || x == null || x == NaN)){return true}
		});
		return temp;
	};
	
	this.difference = function(array, values = []){
		if(Array.isArray(values) == false || values == false ){return array};
		var temp = array;
		array.forEach(function(x){
			if(values.includes(x)){
				temp.splice(temp.indexOf(x),1);
			};
		})
		return temp;
	};
	
	
	this.flatten = function(array){
		var temp = []
		for( var i of array){
			if(Array.isArray(i)){
				for(var j of i){
					temp.push(j)
					};
				continue;
			};
			temp.push(i);
		};
		return temp;
	};
	
	this.flattenDeep = function(array){
		var temp = [];
		function recurse(x){
			for( var i of x){
				if(Array.isArray(i)){
					recurse(i);
					continue;
				};
				temp.push(i);
			};
		
		};
		recurse(array);
		return temp;
	};
	
	this.flattenDepth = function(array, depth = 1){
		var temp = array;
		for(var i=0;i< depth;i++){
			temp = this.flatten(temp);
		};
		return temp;
	};
	
	this.fromPairs = function(array){
		var temp = Object.fromEntries(array);
		return temp;
	};
	
	this.drop = function(array , n=1){
		var temp = array.reverse();
		if(n<0){return array};
		if(array.length>n){temp.length = array.length - n;}
		else{temp.length = 0};
		return temp.reverse()
	};
	
	this.dropRight = function(array, n=1){
		var temp = array
		if(n<0){return array};
		if(array.length>n){temp.length = array.length-n;}
		else{temp.length = 0};
		return temp
	};
	
	this.indexOf = function(array, value, fromIndex = 0){
		if(fromIndex>=array.length) return `Invalid Index: fromIndex = ${fromIndex}, must be less than array length`
		var temp = array;
		var x = temp.indexOf(value)
		while(x < fromIndex){
			x+=array.slice(x+1).indexOf(value) + 1;
		};
		return x;
	};
	
	this.findIndex = function( array, predicate, fromIndex = 0){
		if( typeof predicate != "function"){return "findIndex method must have function as its second argument"}
		var value = array.find(predicate);
		var valueIndex = array.indexOf(value);
		while(valueIndex < fromIndex){
			value = array.slice( valueIndex + 1).find(predicate);
			valueIndex = _.indexOf(array, value, valueIndex+1);
		};
		return valueIndex;
		
	};
	
    this.fill = function(array, value, start=0,end=array.length){
        for( var i=start;i<end;i++){
            array[i] = value;
        }
        return array;
    };
	
	
	this.head = function(array){
		return array[0];
	};
	
	this.initial = function(array){
		return array.slice(0,array.length-1);
	};
	
}

var _ = new Lodash();

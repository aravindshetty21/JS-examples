function Stack(){
	this.data = [];
	this.push = function(x){
		this.data.push(x);
	};
	this.pop = function(){
		if(this.data.length == 0) return "underflow"
		return this.data.pop()
	};
	this.isEmpty = function(){
		if(this.data.length == 0 ) return true;
	};
	this.peek = function(){
		return this.data(this.data.length -1);
	};
};

function Queue(){
	this.data1 = new Stack();
	this.data2 = new Stack();
	
	this.enqueue = function(x){
		while(!(this.data1.isEmpty())){
			this.data2.push(this.data1.pop());
		};
		this.data1.push(x);
		while(!(this.data2.isEmpty())){
			this.data1.push(this.data2.pop());
		};
	};
	
	this.dequeue = function(x){
		return this.data1.pop();
	};
	
};
function Queue(){
	this.list = [];
	
	this.enqueue = function(x){
		this.list.push(x);
	};
	this.dequeue = function(){
		if(this.isEmpty()){return "error: Undeflow"};
		return this.list.shift();
	};
	this.isEmpty = function(){
		if(this.list.length == 0){return true}
		else return false;
	};
	this.front = function(){
		if(this.isEmpty){return "This queue is empty"}
		return this.list[0];
	};
	
};
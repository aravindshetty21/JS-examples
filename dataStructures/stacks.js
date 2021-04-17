function Stack(){
	this.list = [];
	
	this.push = function(x){
		this.list.push(x);
	};
	this.pop = function(){
		if(this.isEmpty()){return "error: Underflow"};
		return this.list.pop()
	};
	this.peek = function(){
		if(this.isEmpty){"The stack is empty"}
		return this.list[this.list.length -1]
	};
	this.isEmpty = function(){
		if(this.list.length == 0){return true}
		else return false;
	};
};
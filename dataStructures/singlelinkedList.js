function Node(value){
	this.value = value;
	this.next = null;
};

function SLinkedList(){
	this.head = null;
	this.size = 0;
	
	this.add = function(value){
		var current;
		var node = new Node(value);
		if(this.head == null){this.head = node;}
		else{
			current = this.head;
			while(current.next){
				current = current.next;
			};
			current.next = node;
		};
		this.size++;
	};
	
	this.insertAt = function(value, index){
		if( index<0 || index>this.size){return console.log("Enter a valid Index")}
		else{
			var node = new Node(value);
			var current = this.head;
			if(index == 0){
				node.next = current;
				this.head = node;
			}
			else{
				for(var i=1; i<index; i++){
					current = current.next;
				};
				node.next = current.next;
				current.next = node;
			};
		};
		this.size++;
	};
	
	this.removeFrom = function(index){
		if(index<0 || index>=this.size){return console.log(`The size of Linked list is ${ this.size }. Enter a valid Index less than the size of the list`)}
		else{
			var current = this.head;
			if(index == 0){
				this.head = current.next;
			}
			else{
				for(var i=1;i<index; i++){
					current = current.next;
				};
				var postCurrent = current.next;
				current.next = postCurrent.next;
			};
		};
		this.size--;
	};
	this.removeElement = function(value){
		var current = this.head;
		if(current.value == value){
			this.head = current.next;
		}
		else{
			while(current.next.value!=value){
				current = current.next;
				if(current.next==null){return console.log("List doesn't have this element")};
			};
			current.next = current.next.next;
		};
		this.size--;
	};
	this.isEmpty = function(){
		if( this.head == null) return true;
		return false;
	};
	this.sizeOfList = function(){
		return this.size;
	};
	this.printList = function(){
		var current = this.head;
		if(current === null){return null};
		while(current.next!=null){
			console.log(current.value);
			current = current.next;
		};
		console.log(current.value);
		return null;
	};
};


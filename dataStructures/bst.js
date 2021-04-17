function Node(data){
	this.data = data;
	this.left = null;
	this.right = null;
}

function Bst(){
	this.root = null;
	
	this.insert = function(data){
		var newNode = new Node(data);
		if(this.root == null){this.root = newNode;}
		else{
			this.insertNode(this.root,newNode);
		};
	};
	this.insertNode = function(node, newNode){
		
		if(newNode.data < node.data){
			if( node.left === null){node.left = newNode;}
			else{
				this.insertNode(node.left , newNode);
			};
		}
		else{
			if(node.right === null){node.right = newNode;}
			else{
				this.insertNode(node.right, newNode);
			};
		};
	};
	
	this.findMinNode = function(node){
		if(node.left == null){return node;}
		else{
			return this.findMinNode(node.left);	
		};
	};
	
	this.remove = function(data){
		this.root = this.removeNode(this.root,data);
		
	};
	
	this.removeNode = function(node,data){
		if(node === null) return null;
		if(node.data > data ){
			node.left = this.removeNode(node.left,data);
			return node;
		}
		else if( node.data < data){
			node.right = this.removeNode(node.right, data);
			return node;
		}
		else{
			if(node.right === null && node.left === null){
				node = null
				return node;
			}
			if(node.left === null){
				node = node.right;
				return node;
			}
			else if(node.right === null){
				node = node.left;
				return node
			}
			
			var minNode = this.findMinNode(node.right);
			node.data = minNode.data;
			
			node.right = this.removeNode(node.right, minNode.data); 
			return node
		};
		
	};
	
	this.getRootNode = function(){
		return this.root;	
	};
	this.inorder = function(node){
		if(node!==null){
			this.inorder(node.left);
			console.log(node.data);
			this.inorder(node.right);
		};
	};
	this.preorder = function(node){
		if(node!==null){
			console.log(node.data);
			this.preorder(node.left);
			this.preorder(node.right);
		};
	};
	this.postorder = function(node){
		if(node!==null){
			this.postorder(node.left);
			this.postorder(node.right);
			console.log(node.data);
		};
	};
	this.search = function(node,data){
		if(node === null){return "The given data is not present in BST"}
		if(node.data>data){
			return this.search(node.left,data)
		}
		else if(node.data<data){
			return this.search(node.right,data);
		}
		else {
			return node;
		};
	};
	
};
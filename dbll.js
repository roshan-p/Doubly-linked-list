function Node(data) {
	this.data = data;
	this.next = null;
	this.prev = null;
}

function Dbll() {
	this.first_node = null;
	this.last_node = null;
}
Dbll.prototype.addAtFirst = function (data) {
	if (!this.first_node) {  
		this.first_node = new Node(data);
		this.last_node = this.first_node;
	} else {
		let temp = new Node(data);
		temp.next = this.first_node;
		this.first_node.prev = temp;
		this.first_node = temp;
	}
};

Dbll.prototype.addAtLast = function (data) {
	if (!this.last_node) { 
		this.last_node = new Node(data);
		this.first_node = this.last_node;
	} else {
		let temp = new Node(data);
		temp.prev = this.last_node;
		this.last_node.next = temp;
		this.last_node = temp;
	}
};

Dbll.prototype.removeFirst = function () {
	let result = null;

	if (this.first_node) {
		result = this.first_node.data;

		if (this.first_node === this.last_node) {
			this.first_node = null;
			this.last_node = null;
		} else {
			this.first_node = this.first_node.next;
			this.first_node.prev = null;
		}
	}
	return result;
};

Dbll.prototype.removeLast = function () {
	let result = null;

	if (this.last_node) {
		result = this.last_node.data;

		if (this.first_node === this.last_node) {
			this.first_node = null;
			this.last_node = null;
		} else {
			this.last_node = this.last_node.prev;
			this.last_node.next = null;
		}
	}

	return result;
};
Dbll.prototype.iterateForwards = function() {
  var current = this.first_node;
  while(current) {
    console.log(current.data);
    current = current.next;
  }
};
Dbll.prototype.iterateBackwards = function() {
  var current = this.last_node;
  while(current) {
    console.log(current.data);
    current = current.prev;
  }
}
Dbll.prototype.printList = function () {
	let nodeList = ""
	let current = this.first_node;
	while(current) {
		nodeList=nodeList+' '+current.data
		current = current.next;

	}
	return nodeList;
};




let newList = new Dbll();

al=()=>{
	let node = document.getElementById('inputNode').value
	newList.addAtLast(node);
	let result = newList.printList();
	console.log(result)
	document.getElementById('outputLabel').innerHTML = result
	document.getElementById('inputNode').value=""

}
af=()=>{
	let node = document.getElementById('inputNode').value
	newList.addAtFirst(node);
	let result = newList.printList();
	console.log(result)
	document.getElementById('outputLabel').innerHTML = result
	document.getElementById('inputNode').value=""
}
rl=()=>{
	newList.removeLast();
	let result = newList.printList();
	document.getElementById('outputLabel').innerHTML = result
	document.getElementById('inputNode').value=""
}
rf=()=>{
	newList.removeFirst();
	let result = newList.printList();
	document.getElementById('outputLabel').innerHTML = result
	document.getElementById('inputNode').value=""
}
init=()=>{
	// newList.addAtFirst(8);
	// newList.addAtFirst(90);
	// newList.addAtLast(40);
	// newList.addAtLast(2);
	// newList.printList();
	// console.log('---------------------')
	// newList.iterateForwards();
	// console.log('---------------------')
	// newList.iterateBackwards();
	// console.log('---------------------')
	// newList.removeFirst();
	// newList.removeLast();
	// newList.printList();
	// console.log('---------------------')
	// newList.removeFirst();
	// newList.removeFirst();
	// newList.printList();

};
init();
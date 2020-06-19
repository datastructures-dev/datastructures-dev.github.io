/*
 *
 * A simple implementation of <code>BinaryTree</code>.
 * Author: rocksvashi
 * License:  <a href="http://www.wtfpl.net/">WTFPL</a>
 */

var BinaryTree = function (isBst) {
	this.root = null;
	this.isBst = isBst || false;
}

BinaryTree.prototype.insert = function (value) {
	if (this.root === null) {
		this.root = new Node();
	}

	if (this.isBst == true) {
		this.root.insertBst(value, 1);
		return;
	}

	this.root.insert(value, 1);
}

BinaryTree.prototype.levelOrder = function () {
	var levelNodes = 0;
	if (this.root == null)
		return;

	var m = []
	var q = [];
	q.unshift(this.root);
	while (q.length > 0) {
		levelNodes = q.length;
		var t = []
		while (levelNodes > 0) {
			var n = q.pop();
			t.push({
				l: levelNodes,
				value: n.value
			});

			levelNodes--;

			if (n.left !== null) {
				q.unshift(n.left);
			}

			if (n.right !== null) {
				q.unshift(n.right);
			}


		}

		m.push(t);
	}

	return m;
}

BinaryTree.prototype.find = function (value) {
	if (this.root === null) {
		return [];
	}
	var visited = []
	if (this.isBst) {
		return this.root.findBstStyle(value, visited);
	}

	return this.root.findNonBst(value, visited);
}

BinaryTree.prototype.printTree = function (node) {
	if (node === null || typeof node == "undefined") {
		return;
	}

	console.log(node.value);
	this.printTree(node.left);
	this.printTree(node.right);
}

var Node = function (value) {
	this.value = value || null;
	this.left = null;
	this.right = null;
}

Node.prototype.insert = function (value, level) {
	if (this.value === null) {
		this.value = value;
		return value;
	}

	var nodes = [];
	nodes.push(this); // push the root

	while (nodes.length > 0) {
		var node = nodes.pop();
		if (node.left === null) {
			node.left = new Node();
			node.left.value = value;
			return;
		} else {
			// add at front
			nodes.unshift(node.left)
		}

		if (node.right === null) {
			node.right = new Node();
			node.right.value = value;
			return;
		} else {
			// add at front
			nodes.unshift(node.right)
		}
	}

}

Node.prototype.insertBst = function (value) {

	if (!this.value) {
		this.value = value;
		return value;
	}

	if (value >= this.value) {
		if (this.right === null) {
			this.right = new Node();
			this.right.value = value;
			return value;
		}

		return this.right.insertBst(value);

	} else {

		if (this.left === null) {
			this.left = new Node();
			this.left.value = value;
			return value;
		}

		return this.left.insertBst(value);
	}

}

Node.prototype.findBstStyle = function (value, visited) {

	if (this.value == value) {
		visited.push(value);
		return visited;
	}

	visited.push(this.value);
	if (value > this.value && this.right !== null) {
		return this.right.findBstStyle(value, visited);

	} else {
		if (this.left !== null) {
			return this.left.findBstStyle(value, visited);
		}
	}

	// if no match found
	return [];
}

Node.prototype.findNonBst = function (value) {
	if (this.value == value) {
		return value;
	}

	if (this.left !== null) {
		return this.left.findNonBst(value);
	}

	if (this.right !== null) {
		return this.right.findNonBst(value);
	}

	return -1;
}
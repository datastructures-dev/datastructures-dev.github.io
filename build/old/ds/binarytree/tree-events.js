// Init the Canvas 
var canvas = document.getElementById("treeCanvas");
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

// Init the Tree Object
var tree = new BinaryTree(false); // by default non BST

var defaultX = canvas.width / 2;
var defaultY = 30;
var defaultRadius = 25;
var defaultNodeDistanceX = 60;
var defaultNodeDistanceY = 80;

// object responsible to draw item on tree
var treeDrawer = new CanvasTreeDrawer(canvas, defaultRadius, defaultNodeDistanceX, defaultNodeDistanceY);

function add() {
    // pre condtions
    var newNode = $("#node").val();
    if (newNode === "" || !$.isNumeric(newNode)) {
        alert("Please enter a valid number");
        $("#node").val("");
        return;
    }
    // insert the node in tree
    tree.insert(parseInt(newNode));
    // clear the canvas
    treeDrawer.clearTree();
    // render root node
    treeDrawer.renderNode(tree.root, defaultX, defaultY, treeDrawer.defaultKeys);
    // now render the subtree
    treeDrawer.renderSubtree(tree.root, defaultX, defaultY, false, true, treeDrawer.defaultKeys);
    // clear the input text value    
    $("#node").val("");

}

// This will do path walk using delay
function animatedWalk() {
    if (visited.length == 0) {
        return;
    }

    var key = visited[0];
    treeDrawer.renderNode({
        value: key
    }, treeDrawer.map[key].x, treeDrawer.map[key].y, treeDrawer.animationKeys);
    visited.shift();

    setTimeout(function () {
        animatedWalk()
    }, 300)
}

var visited = []

function find() {
    if(!document.getElementById("type").checked) {
        alert("Right now only BST Find node is available");
        return;
    }
    // pre condtions
    var newNode = $("#node").val();
    if (newNode === "" || !$.isNumeric(newNode)) {
        alert("Please enter a valid number");
        $("#node").val("");
        return;
    }

    visited = tree.find(newNode);

    animatedWalk();
}

function deleteNode() {
    alert("Implementation in progress");
}

function resetRoot() {
    var isBst = document.getElementById("type").checked;
    tree = new BinaryTree(isBst);
}

function bstMode(obj) {
    if (obj.checked === true) {
        alert("BST Option is selected, Clearing the existing tree on canvas.");
        treeDrawer.clearTree();
        tree = new BinaryTree(true);
        $("#mode").html("Binary Search Tree");
    }
}
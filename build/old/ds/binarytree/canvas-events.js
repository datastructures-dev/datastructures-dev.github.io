/*
 *
 * Draw the tree nodes on Canvas.
 * Author: rocksvashi
 * License:  <a href="http://www.wtfpl.net/">WTFPL</a>
 * 
 * Refrences: http://www.cprogramming.com/tutorial/lesson18.html
 */

var CanvasTreeDrawer = function (canvas, defaultRadius, defaultNodeDistanceX, defaultNodeDistanceY) {
    this.canvas = canvas;
    this.context = this.canvas.getContext('2d');
    this.defaultX = this.canvas.width / 2;
    this.defaultY = 30;
    this.defaultRadius = defaultRadius || 25;
    this.defaultNodeDistanceX = defaultNodeDistanceX || 60;
    this.defaultNodeDistanceY = defaultNodeDistanceY || 80;
    this.map = {}
}

// keys for shapes properties
CanvasTreeDrawer.prototype.defaultKeys = {
    lineWidth: 3,
    fillStyle: '#000',
    strokeStyle: '#cc6600',
    labelStroke: "#000",
    labelFillStyle: "#fff"
}

// keys for shapes properties
CanvasTreeDrawer.prototype.animationKeys = {
    lineWidth: 12,
    fillStyle: '#000',
    strokeStyle: 'green',
    labelStroke: "#000",
    labelFillStyle: "#fff"
}

// count the subtree items beneath the node.
CanvasTreeDrawer.prototype.childNodes = function (node) {
    if (node == null) {
        return 0;
    }

    var childCount = 0;
    if (node.left !== null) {
        childCount += 1 + this.childNodes(node.left);
    }

    if (node.right !== null) {
        childCount += 1 + this.childNodes(node.right);
    }
    return childCount;
}

CanvasTreeDrawer.prototype.renderSubtree = function (node, centerX, centerY, isRight, isRoot, defaultKeys) {
    var count = 1,
        x = centerX,
        y = centerY;

    if (!isRoot) {
        if (node.right == null) {
            count = 0;
        } else {
            count = 1 + this.childNodes(node.left);
        }

        // calculate the x,y for left subtree
        x = centerX - this.defaultNodeDistanceX - (count * this.defaultNodeDistanceX);
        y = centerY + this.defaultNodeDistanceY;

        // if current node direction is right then calculate the x,y for right subtree
        if (isRight === true) {
            if (node.left == null) {
                count = 0;
            } else {
                count = 1 + this.childNodes(node.left);
            }

            x = centerX + this.defaultNodeDistanceX + (count * this.defaultNodeDistanceX);
            y = centerY + this.defaultNodeDistanceY;
        }
        // lets connect the nodes first(i.e line to connect), so that way we can achive 
        // z-index(higher layer)
        // for the circle and it wont be appear over the text on circle(i.e cut off). ~rocksvashi
        this.connect(node, x, y, centerX, centerY, "#000");
        this.renderNode(node, x, y, defaultKeys)

    }


    if (node.left !== null) {
        this.renderSubtree(node.left, x, y, false, false, defaultKeys)
    }

    if (node.right !== null) {
        this.renderSubtree(node.right, x, y, true, false, defaultKeys)
    }
}

CanvasTreeDrawer.prototype.connect = function (node, x, y, centerX, centerY, color) {
    this.context.beginPath();
    this.context.moveTo(x, y);
    this.context.lineTo(centerX, centerY);
    this.context.strokeStyle = color;
    // add shadow effect
    /*
    this.context.shadowOffsetX = 0;
    this.context.shadowOffsetY = 0;
    this.context.shadowBlur = 6;
    this.context.shadowColor = '#656565';
    */

    this.context.stroke();
}

CanvasTreeDrawer.prototype.nodeMapper = function () {
    console.log(this.map);
}

CanvasTreeDrawer.prototype.renderNode = function (node, pX, pY, defaultKeys) {
    this.context.beginPath();
    this.context.arc(pX, pY, defaultRadius, 0, 2 * Math.PI, false);
    this.context.fillStyle = defaultKeys.fillStyle;
    this.context.fill();
    this.context.lineWidth = defaultKeys.lineWidth;
    this.context.strokeStyle = defaultKeys.strokeStyle;
    this.context.stroke();
    this.context.closePath();
    this.map[node.value] = {
        x: pX,
        y: pY
    };
    // now fill the text
    this.context.font = "14px arial";
    this.context.fillStyle = defaultKeys.labelFillStyle;
    this.context.strokeStyle = defaultKeys.labelStroke;
    this.context.textAlign = 'center';
    this.context.fillText(node.value, pX, pY);
}

CanvasTreeDrawer.prototype.clearTree = function () {
    this.context.clearRect(0, 0, this.canvas.width, this.canvas.height);
}
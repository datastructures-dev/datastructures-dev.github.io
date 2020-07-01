// currently just not resetting parent after swap at the end of chain of stuff
// a zero in there seems like it breaks things

// var d3 = require('d3')
// This will make a heap node by node in a nice animation type thing.

// const executeHome=function(){
  var arr = []

  console.log("Here")
  makeRandArray()
  console.log(arr)
  var duration = 500; // 700 a good moderate speed
  var colorduration = 100;
  var textTransDuration = 700;
  var swapDelay = 500;
  var textRemoveDuration = 3000;
  var compareDuration = 3000;
  var addColorDuration = 1000;

  var margin = { top: 50, right: 90, bottom: 30, left: 90 },
    width = 960 - margin.left - margin.right,
    height = 500 - margin.top - margin.bottom;

  var svg = d3.select("body")
    .append("svg")
    .attr("width", width + margin.right + margin.left)
    .attr("height", height + margin.top + margin.bottom)

  var textSpacing = 40;
  var arrtext = svg.append("g").attr("class", 'arrtext')

  arrtext
    .append('text').text('[')
    .attr('transform', 'translate(10,20)');

  var arrtextg = arrtext.selectAll('.eletext').data(arr).enter().append('g')
    .attr('id', function (d, i) {
      return ("artextg" + i);
    })
    .attr('transform', function (d, i) {
      var xtran = i * textSpacing + 20;
      var ytran = 20;
      return "translate(" + xtran + ', ' + ytran + ')';
    })
    .attr('x', function (d, i) {
      var xtran = i * textSpacing + 20;
      return xtran
    })

  arrtextg.append('rect', ':first-child')
    .attr('width', function (d, i) {
      //          console.log('this = ', this, 'd = ', d)
      return 20
    })
    .attr('height', 20)
    .attr('transform', 'translate(0, -15)')
    .attr('fill', 'none')
    .attr('opacity', .4)
  //        .transition(duration * 100)
  //      .attr('fill', 'white')

  arrtextg.append('text')
    .text(function (d, i) {
      //    console.log(d, i, arr.length);
      return (i === arr.length - 1) ? d : (d + ', ');
    })
    .attr('class', 'eletext')
    .attr('id', function (d, i) {
      return 'arrText' + i;
    })
    .attr('stroke', 'grey')
    .attr('fill', 'black')


  arrtext.append('text').text(']')
    .attr('transform', 'translate(' + ((arr.length + 1) * textSpacing) + ',20)');

  arrtextg.attr('textbox', function (d) {
    //  console.log('this arrtext = ', d3.select(this).select('text').node().getBBox().width)
    var textW = d3.select(this).select('text').node().getBBox().width
    d3.select(this).select('rect').attr('width', textW)
    return d3.select(this).select('text').node().getBBox().width;
  })


  var g = svg.append("g")
    .attr("transform", "translate(" + margin.left + "," + margin.top + ")");


  // declares a tree layout and assigns the size
  var treemap = d3.tree()
    .size([width, height]);

  var newsource = { name: arr[0], children: getChildren(0, arr) }

  console.log(newsource);

  var root = d3.hierarchy(newsource, function (d) { return d.children; });

  root.x0 = 5;
  root.y0 = 0;

  // Make the root and all it's children null and move into _children attribute
  collapse(root)
  update(root);
  runprom(root);

  function runprom(dat) {
    promun(dat)
      .then(function (d) {
        var nodescendants = true;
        //  console.log('finished the promise', d.descendants())
        for (i of root.descendants()) {
          //  console.log(i)
          if (i._children) {
            nodescendants = false;
            runprom(i)
            break;
          }
        }
        if (nodescendants === true) {
          //      console.log('done buidling heap, now to max heap')
          buildMaxHeap();
        }
      });
  }


  function promun(ino) {
    var innodes = ino.descendants();
    return new Promise(function (res, rej) {
      //console.log('inpromise', ino)
      unfold(ino);
      d3.timeout(function () {
        res(ino)
      }, 2000);

    })
  }

  function unfold(data) {
    //console.log('unfolding, ', data)
    //	update(data)
    if (data._children) {
      if (data._children.length > 0) {
        if (data.children === null) { data.children = [] }
        data.children.push(data._children.shift())
        if (data._children.length === 0) {
          data._children = null;
        }
      }

      setTimeout(function (d) {
        update(data)
        //console.log('should try to unfold data')
        unfold(data)
      }, 400)
    }
  }


  function getChildren(i, array) {
    var childs = [];
    var nextIndex = i * 2 + 1;
    if (typeof (array[i * 2 + 1]) === "number") {
      childs[0] = { name: array[i * 2 + 1], children: [] };
      if (typeof (array[i * 2 + 2]) === "number") {
        childs[1] = { name: array[i * 2 + 2] };
      }
    }

    if (typeof (arr[nextIndex * 2 + 1]) === "number") {
      childs[0].children = getChildren(nextIndex, array)
      childs[0]._children = null;

      if (typeof (arr[nextIndex * 2 + 2]) === "number") {
        childs[1].children = getChildren(nextIndex + 1, array);
        childs[1]._children = null;
      }
    }

    return childs
  }

  var nodes;
  function update(data) {
    //console.log(data)
    //  var mapData = data.map()

    var treeData = treemap(root);
    nodes = treeData.descendants();

    var links = treeData.descendants().slice(1);
    // console.log(nodes);
    //  console.log("nodes = ", nodes, ", links = ", links);

    var node = g.selectAll('g.node')
      .data(nodes, function (d, i) {
        return d.id = i;
      })

    //	console.log('node = ', node)

    var nodeEnter = node.enter().append('g')
      .attr('class', 'node')
      .attr('transform', function (d) {
        //		  console.log('appending a new node', d);
        d3.select('#artextg' + d.id)
          .call(function (d) {
            //  console.log('this is', this, d)
            d.select('rect')
              .attr('fill', 'red')
              .transition()
              .duration(duration * 2)
              .attr('fill', 'white')
          })

        return 'translate( ' + data.x0 + ', ' + data.y0 + ' )';
      })
      .attr('id', function (d, i) {
        return 'nodey' + i;
      })
      .attr('index', function (d, i) {
        return i;
      })


    nodeEnter.append('circle')
      .attr('class', 'node')
      .attr('r', 1e-6)
      .style('fill', function (d) {
        return "red" //d._children ? "lightsteelblue" : "#fff";
      })

    // Labels for the nodes
    nodeEnter.append('text')
      .attr("dy", ".35em")
      .attr("y", function (d, i) {
        return -15
      })
      .attr("x", function (d, i) {
        var xmove = i % 2;
        return xmove ? -16 : 3 //d.children || d._children ? 1 : 1;
      })
      .attr("text-anchor", function (d, i) {
        var xmove = i % 2;
        return xmove ? "end" : "start"; //d.children || d._children ? "end" : "start";
      })
      .attr("class", "valtext")
      .text(function (d) {
        return d.data.name;
      });

    // UPDATE
    var nodeUpdate = nodeEnter.merge(node)
      .transition()
      .duration(duration)
      // .text(function(d) { return d.data.name; })
      .attr('transform', function (d) {
        return "translate(" + d.x + "," + d.y + ")"
      })
      .on('end', function (d) {

       
      })

    // Update the node attributes and style
    nodeUpdate.select('circle.node')
      .attr('r', 10)
      .attr('cursor', 'pointer')
      .style('stroke', 'black')
      .style('stroke-width', '2px')
      .transition()
      .duration(addColorDuration)
      .style("fill", function (d) {
        return "steelblue"//d._children ? "lightsteelblue" : "#fff";
      })


    // Remove any exiting nodes
    var nodeExit = node.exit().transition()
      .duration(duration)
      .attr("transform", function (d) {
        return "translate(" + data.x + "," + data.y + ")";
      })
      .remove();

    // On exit reduce the node circles size to 0
    nodeExit.select('circle')
      .attr('r', 1e-6);

    // On exit reduce the opacity of text labels
    nodeExit.select('text')
      .style('fill-opacity', 1e-6);

    // ****************** links section ***************************

    // Update the links...
    var link = g.selectAll('path.link')
      .data(links, function (d) { return d.id; });

    // Enter any new links at the parent's previous position.
    var linkEnter = link.enter().insert('path', "g")
      //   .on('click', click)
      .attr("class", "link")
      .attr('d', function (d) {
        var o = { y: data.y0, x: data.x0 }
        return diagonal(o, o)
      })
      .style('fill', 'none')
      .style('stroke', 'black');

    // UPDATE
    var linkUpdate = linkEnter.merge(link);

    // Transition back to the parent element position
    linkUpdate.transition()
      .duration(duration)
      .attr('d', function (d) { return diagonal(d, d.parent) });


    // Remove any exiting links
    var linkExit = link.exit().transition()
      .duration(duration)
      .attr('d', function (d) {
        var o = { x: data.x, y: data.y }
        return diagonal(o, o)
      })
      .remove();

    // Store the old positions for transition.
    nodes.forEach(function (d, i) {
      //   console.log(d)
      d.x0 = d.x;
      d.y0 = d.y;
    });

  }

  // Make the node and all it's children null and move into _children attribute
  function collapse(d) {
    if (d.children) {
      d._children = d.children;
      d._children.forEach(collapse);
      d.children = null;
    }
  }

  // Creates a curved (diagonal) path from parent to the child nodes
  // switched around all the x's and y's from orig so it's verticle
  function diagonal(s, d) {
    //console.log('in diag and s = ', s);
    //console.log('d = ', d)

    path = `M ${s.x} ${s.y}
              C ${(s.x + d.x) / 2} ${s.y},
                ${(s.x + d.x) / 2} ${d.y},
                ${d.x} ${d.y}`

    return path;

  }


  function colorAllCircsGreen() {
    d3.selectAll('circle')
      .transition()
      .duration(colorduration)
      .style('fill', 'green')
  }

  var noders;


  function buildMaxHeap() {

    noders = d3.selectAll('g.node');
    console.log('time to makeheapify', noders)
    var numnodes = noders._groups[0].length;

    var holders = { restartIndex: Math.floor((numnodes) / 2) - 1, bigChild: null }
    console.log('holders to start = ', holders)
    max_heapify(Math.floor((numnodes) / 2) - 1, holders)

  }


  function bigChildIndex(ind) {
    //  console.log(ind);

    var chillies = [];
    if (nodes[ind]) {
      chillies = nodes[ind].children;
      if (chillies[1]) {
        return (parseInt(chillies[0].data.name) > parseInt(chillies[1].data.name)) ? 0 : 1;
      }
      else {
        return 0;
      }
    }
    else {
      return -1;
    }
    //  console.log(chillies)
  }

  function max_heapify(ind, holders) {
    //    console.log('max heap from isnt going ', nodes[ind])
    if (holders === null) {
      holders = {}
    }
    noders = d3.selectAll('g.node')
    var childindexes = []
    holders.bigChild = bigChildIndex(ind)
    holders.starter = ind;

    if (nodes[ind].children) {
      childindexes = nodes[ind].children.map(function (d, i) {
        return d.id;
      })
    }

    //  console.log('childindexes are', childindexes)
    var anode = d3.select('#nodey' + ind)

    changeRectColor(ind, 'red');

    anode.select('circle')
      .transition()
      .duration(duration + textTransDuration)
      .style('fill', 'red')
      .on('end', function (d) {
        //      console.log('holders', holders)
        compareChils(childindexes, holders)
      })



    var comptext = 'compare the childrens';
    anode.append('text')
      .text(comptext)
      .attr("text-anchor", function (d) {
        return 'middle';
      })
      .attr("dy", '20px')
      .attr('class', 'process')
  }

  function compareChils(childsArr, holders) {
    colorForComp(childsArr[0], holders);
    if (childsArr[1]) {
      colorForComp(childsArr[1], holders);
    }
  }

  function colorForComp(inex, holders) {

    changeRectColor(inex, 'orange')

    d3.select('#nodey' + inex)
      .select('circle')
      .transition()
      .duration(duration + textRemoveDuration)
      .style('fill', function (d) {
        return 'orange'
      })
      .on('end', function (d) {
        //        console.log('done and have ', d)
        //      console.log(holders)
        //     console.log(nodes[holders.restartIndex].children[holders.bigChild])
        if (nodes[holders.starter].children[holders.bigChild] === d) {
          //         console.log('its the big child need to check swaping')

          changeRectColor(inex, 'yellow')

          d3.select(this).transition()
            .duration(duration + 200)
            .style('fill', 'yellow')
            .on('end', function () {
              checkParentSwap(d, holders);
            })
        }
        else {
          console.log('this should make it green')

          d3.select(this)
            .transition()
            .duration(colorduration)
            .style('fill', 'green')
          changeRectColor(inex, 'green')
        }
      })
  }

  function checkParentSwap(d, holders) {
    // check if the given thing is bigger than the parent node
    // and if not decrement holders.restartIndex and call the max heap thing with that
    //console.log("d = " , d)
    var childer = d;
    var cnode = d3.select('#nodey' + (d.id));
    var pnode = d3.select('#nodey' + (d.parent.id));

    console.log('parent node id = ', pnode.attr('id'))

    d3.select('.process').text('Compare with largest child')


    if (d.data.name > d.parent.data.name) {
      d3.select('.process').text('Compare with largest child')
        .transition()
        .duration(compareDuration)
        .delay(swapDelay)
        .text("swap with big child")
        .on('end', function (d) {
          //    console.log('swap with parent ', childer, holders);
          //  changeRectColor(pnode.attr('id').slice(pnode.attr('id').length-1), 'green');
          swapWithParent(childer, holders)
        })
        .on('interrupt', function (d) {
          //    console.log('swap with parent ', childer, holders);
          swapWithParent(childer, holders)
        })
        .remove();

    }
    else {
      console.log('making stuff greenie')
      cnode.select('circle')
        .transition()
        .duration(colorduration)
        .style("fill", 'green')
        .on('end', function () {
          console.log('maybe i should do stuff here')
        })
      changeRectColor(cnode.attr('index'), 'green');
      changeRectColor(pnode.attr('index'), 'green');

      d3.select('.process').text('This node is good move on')
        .call(function () {
          console.log('trying to just make the rects green', pnode)
          setTimeout(function () {

            console.log('why dont the rects turn green', cnode.attr('id').slice(cnode.attr('id').length - 1))
            //    changeRectColor(pnode.attr('id').slice(pnode.attr('id').length-1), 'green');
            //  changeRectColor(cnode.attr('id').slice(cnode.attr('id').length-1), 'green');

          }, 700)

        }
        )
        .transition()
        .duration(3000)
        .delay(2000)
        .remove();

      if (holders.restartIndex > 0) {
        //    console.log('need to color stuff here', pnode)
        changeRectColor(pnode.attr('id'), 'green');


        pnode.select('circle')
          .transition()
          .duration(3000)
          .style("fill", 'green')


        //    console.log('we get to recur!!!')
        holders.restartIndex = holders.restartIndex - 1;
        max_heapify(holders.restartIndex, holders)
      }
      else {
        //  colorAllCircsGreen();
        changeRectColor(pnode.attr('id'), 'green');
        console.log('its all over')
        changeRectColor(pnode.attr('id'), 'green');
        popLargest();
      }
    }
  }


  function swapWithParent(bigchild, holders) {

    var newLowval = bigchild.parent.data.name;
    bigchild.parent.data.name = bigchild.data.name;
    bigchild.data.name = newLowval;

    console.log(bigchild.id, 'and we got', bigchild.parent.id)
    swapArrayGs(bigchild.parent.id, bigchild.id)


    var parnode = d3.select('#nodey' + (bigchild.parent.id))
    parnode
      .select('circle')
      .transition()
      .duration(duration + 2000)
      .style('fill', 'green')
      .on('end', function () {

        parnode.select('.process')
          .transition()
          .delay(1000)
          .remove();

        changeRectColor(bigchild.parent.id, 'green')
      })

    var partext = parnode.select('.valtext');
    //  console.log(partext)
    partext
      .transition()
      .duration(textTransDuration)
      .attr('transform', function (d) {
        //    console.log('need to translate, ', d)
        return "translate(" + (d.children[holders.bigChild].x - d.x) + ', ' + (d.children[holders.bigChild].y - d.y) + ')'
      })
      .on('end', function (d) {
        changeRectColor(bigchild.parent.id, 'green')

        d3.select(this).attr('transform', function (d) {
          //  console.log('trying to put it back', this, d)
          return 'translate(0,0)'
        })
          .text('')
      })


    var chinode = d3.select('#nodey' + (bigchild.id));

    var chitext = chinode.select('.valtext');
    chitext.transition()
      .duration(textTransDuration)
      .attr('transform', function (d) {
        //console.log('its this.x  =', d3.select(this).attr('x'))
        return "translate(" + (d.parent.x - d.x - d3.select(this).attr('x')) + ', ' + (d.parent.y - d.y) + ')'
      })
      .on('end', function (d) {
        d3.select(this).attr('transform', function (d) {
          //      console.log('trying to put it back', this, d)
          return 'translate(0,0)'
        })
          .text('')
      })

    chinode.select('circle').transition()
      .duration(duration)
      .style('fill', 'red')
      .on('end', function (d) {
        //      console.log('need to do stuff with ', d)

        chinode.append('text')
          .attr('class', 'process')
          .text(function (d) {
            console.log(d)
            console.log('and the holders', holders)
            if (d.children) {
              console.log('need to keep ballancing')
              if (d.children.length > 0) {
                console.log('trying to maxheap with ', holders, d)
                changeRectColor(bigchild.index, 'red');
                max_heapify(parseInt(d.id), holders)
              }
              else {
                console.log('in the wierd stpot moving on with the', holders)
                console.log('make all circs white fill still')
                chinode.select('circle').transition()
                  .duration(100)
                  .style('fill', 'green')

                changeRectColor(bigchild.attr('index'), 'green');

                holders.restartIndex = holders.restartIndex - 1;
                max_heapify(holders.restartIndex, holders)
              }
            }
            else {
              //    console.log('move on with the', holders)
              //      console.log('rect not turning green, chinodeid = ', chinode.attr('id'))
              chinode.select('circle').transition()
                .duration(10)
                .style('fill', 'green')

              changeRectColor(bigchild.id, 'green');

              if (holders.restartIndex > 0) {
                holders.restartIndex = holders.restartIndex - 1;
                max_heapify(holders.restartIndex, holders)
              }
              else {
                console.log('endgame spot, done with it all')
                changeRectColor(chinode.attr('id'), 'green');

                popLargest();
                //    colorAllCircsGreen();
              }
            }

            return "Check for children";

          })
          .attr("text-anchor", function (d) {
            return 'middle';
          })
          .attr("dy", '-20px')
          .transition()
          .duration(textRemoveDuration)
          .delay(1000)
          .style('fill', 'green')
          .remove();
      })
    parnode.select('.process').remove();
    upDateNodeVals()

  }

  function upDateNodeVals() {

    d3.selectAll('g.node')
      .transition()
      .delay(swapDelay)
      .select('text')
      .text(function (d) {
        //console.log('need to change all the texts', d)
        return d.data.name
      })

  }

  // a function to add a colored rectange to go behind the text in the array.

  function changeRectColor(index, color) {

    d3.select('#artextg' + index).select('rect')
      .transition().duration(duration)
      .attr('fill', color)

    //  console.log('need to remove or change color of recs at right time still')
  }

  // Will swap the elements in the array at the top of the page.
  // Just give the indexes of the elements you wish to swap.
  function swapArrayGs(ind1, ind2) {

    var g1 = d3.select('#artextg' + ind1)
    var gx1 = g1.attr('x')
    var g2 = d3.select('#artextg' + ind2)
    var gx2 = g2.attr('x')
    var g1Start = g1.select('text').text();
    var g2Start = g2.select('text').text()

    //  console.log('startiing val ', g1Start)
    var xdis = gx2 - gx1

    g1.select('text').transition()
      .duration(duration)
      .attr("transform", "translate(" + xdis + ', 0)')
      .on('end', function (d, i) {
        //    console.log('d = ', d, 'this = ???', this)
        g1.select('text').attr('transform', 'translate(0, 0)').text(g2Start);
      })

    g2.select('text').transition()
      .duration(duration)
      .attr("transform", "translate(" + (-xdis) + ', 0)')
      .on('end', function (d, i) {
        //    console.log('d = ', d, 'this = ???', this)
        g2.select('text').attr('transform', 'translate(0, 0)').text(g1Start);
        updateRectSizes();
      })
  }


  function updateRectSizes() {
    arrtextg.attr('textbox', function (d) {
      //  console.log('this arrtext = ', d3.select(this).select('text').node().getBBox().width)
      var textW = d3.select(this).select('text').node().getBBox().width
      d3.select(this).select('rect').attr('width', textW)
      return d3.select(this).select('text').node().getBBox().width;
    })
  }


  // Should take the top element in the heap and swap it with the last one,
  // then the heap should get reballanced
  function popLargest() {
    console.log('done heaping now need to start sorting, should show swapping first and last elements of the array')

    //console.log('need to update nodes = ', nodes)
    // swap first with last node
    var topper = d3.select('#nodey' + nodes[0].id)

    var highval = nodes[0].data.name

    var lower = d3.select('#nodey' + nodes[nodes.length - 1].id)
    var lowval = nodes[nodes.length - 1].data.name

    //  console.log('lowval is', lowval)
    var toptransX = nodes[0].x - nodes[nodes.length - 1].x
    var toptransY = nodes[nodes.length - 1].y - nodes[0].y

    //  console.log(toptransX, 'and y= ', toptransY)
    topper.select('.valtext')
      .transition()
      .attr('transform', "translate(" + toptransX + ", " + toptransY + ')')
      .on('end', function () {
        //nodes[0].data.name = lowval;
        //nodes[nodes.length-1].data.name = highval;
        //    console.log('and this is', this)
        d3.select(this).attr('transform', 'translate(0,0)')

        //  upDateNodeVals()
      })

    nodes[0].data.name = lowval;
    nodes[nodes.length - 1].data.name = highval;

    swapArrayGs(0, nodes.length - 1)

    MakeRectDone(nodes.length - 1, 'blue')

    lower.select('circle')
      .transition()
      .delay(1000)
      .duration(colorduration)
      .style('fill', 'blue')
      .on('end', function (d) {
        var lastpar = nodes[nodes.length - 1].parent;
        lastpar._children = nodes[nodes.length - 1];
        //    console.log(lastpar, "last parent is")
        var removableindex = lastpar.children.indexOf(nodes[nodes.length - 1]);
        lastpar.children = lastpar.children.filter(function (d) {
          return d !== nodes[nodes.length - 1]
        })
        if (lastpar.children.length === 0) {
          lastpar.children = null;
        }
        update(lastpar)
        //      console.log('nodes after all that,', nodes)
        setTimeout(function () {
          if (nodes.length === 1) {
            console.log('All done just need to make this rectangle blue and maybe make the root go to the array.')
            MakeRectDone(0, 'blue')
          }
          else {
            max_heapify(0, {})
          }

        }, 2000)

      })

    //    console.log('want to make this blue')

    lower.select('.valtext')
      .transition()
      .attr('transform', "translate(" + -toptransX + ", " + -toptransY + ')')
      .on('end', function () {
        //nodes[0].data.name = lowval;
        //  console.log('and this is', this)
        d3.select(this).attr('transform', 'translate(0,0)')

        upDateNodeVals()
      })

  }


  function MakeRectDone(i) {
    d3.select('#artextg' + i).select('rect')
      .transition().duration(duration)
      .attr('fill', 'none')
      .attr('stroke', "steelblue")

  }

  function makeRandArray() {
    var len = document.getElementById("len").value;
    console.log("s: "+len)
    for (var i = 0; i < len; i++) {
      var ele=Math.floor(Math.random() * 100)
      console.log("pushing"+ele)
      arr.push(ele)
    }
    
  }

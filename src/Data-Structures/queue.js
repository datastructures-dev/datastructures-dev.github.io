import React, { useState } from 'react';
import VisualPage, {
  About,
  Complexity,
  Controls,
  ControlGroup,
  Visualization,
} from '../VisualPage.js';
import {
  Node,
} from '../VisualComponents.js';


function Demo() {
  const [list, setList] = useState([]);
  const [start, setStart] = useState(-1);
  const [end, setEnd] = useState(-1);
  const [addVal, setAddVal] = useState();

  function add(addEnd) {
    let newList = list.map(v => Object.assign({}, v, {
      "highlight": false,
    }));
    let added = false;
    const newItem = {
      "next": addEnd ? -1 : start,
      "value": addVal,
      "highlight": false,
    }
    // Add new item in next undefined slot
    let i = 0;
    for (; i < newList.length && !added; i++) {
      if (newList[i] === undefined) {
        newList[i] = newItem;
        added = true;
      }
    }
    if (!added) {
      i = newList.length;
      newList.push(newItem);
    }

    // Fix old last node's pointer if addEnd
    if (addEnd) {
      if (end === -1) {
        //null list
        setStart(i)
        setEnd(i);
      } else {
        newList[end].next = i;
        setEnd(i);
      }
    } else {
      setStart(i);
      if (end === -1)
        setEnd(i);
    }
    console.log("adding: "+newList)
    setList(newList);
  }


  
  

  function remove() {
    
        //found something. Kill it
        var nl = Object.assign([], list)
        var index = start;
        if(start===-1){
            alert("Dequeuing from null")
        }else{
            var nxt = nl[index].next 
          //nl[index].next = nxt
          if(nxt===-1){
            //next is empty
            console.log("Empyting everything")
            setEnd(-1)
            setStart(-1)
            setList([])
          }else{
            //fix this
            console.log(nxt+" "+start+" "+end)
            console.log(nl)
            nl.splice(index,1)
            setStart(nxt)
            setList(nl)
            console.log(nl)

          }
        }
        
  }


  // Generate the nodes in correct order for visualization
  const ordered = [];
  let i = start;
  while (i !== -1) {
    console.log("Here: "+i)
    ordered.push(
      <Node key={i} highlight={list[i].highlight}>{list[i].value}</Node>
    );
    i = list[i].next;
  }
  return (
    <>
      <Controls>
        <ControlGroup>
          <label htmlFor="add">Add item</label>
          <input name="add" type="text" onChange={e => setAddVal(e.target.value)}></input>
          <button onClick={() => add(true)}>Enqueue</button>
        </ControlGroup>
        
        <ControlGroup>
          {/* <label htmlFor="remove">Remove</label> */}
          {/* <input name="remove" onChange={e => setRemoveVal(e.target.value)}></input> */}
          <button onClick={remove}>Dequeue</button>
        </ControlGroup>
      
      </Controls>
      <Visualization>
        {ordered}
      </Visualization>
    </>
  );
}

export default function Queue(props) {
  return (
    <VisualPage title="Queue">
      <About>
        <h4>What is a Queue?</h4>
        Stacks are a FIFO (first in- first out) structure. They are used in a lot of reactive and UI related
        tasks, think back button on browsers
      </About>
      <Complexity complexity={[
        {
          "name": "Indexing",
          "complexity": "Θ(n)"
        },
        {
          "name": "Enqueue/Dequeue Element",
          "complexity": "Θ(1)"
        },
        
        {
          "name": "Average wasted space",
          "complexity": "Θ(1)",
        },
      ]} />
      <Demo />
    </VisualPage>
  );
}

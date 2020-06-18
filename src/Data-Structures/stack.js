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
        setEnd(i);
      } else {
        newList[end].next = i;
        setEnd(i);
      }

      if (start === -1)
        setStart(i);
    } else {
      setStart(i);
      if (end === -1)
        setEnd(i);
    }
    setList(newList);
  }


  
  

  function remove() {
    
        //found something. Kill it
        var nl = Object.assign([], list)
        var index = start;
        if(start===-1){
            alert("Popping from null")
        }else{
            var nxt = nl[index].next //next pointer
          //nl[index].next = nxt
          setStart(nxt)
          nl.splice(index,1)
          console.log(nl)
          setList(nl)
        }
        
  }


  // Generate the nodes in correct order for visualization
  const ordered = [];
  let i = start;
  while (i !== -1) {
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
          <button onClick={() => add(false)}>Push</button>
        </ControlGroup>
        
        <ControlGroup>
          {/* <label htmlFor="remove">Remove</label> */}
          {/* <input name="remove" onChange={e => setRemoveVal(e.target.value)}></input> */}
          <button onClick={remove}>Pop</button>
        </ControlGroup>
      
      </Controls>
      <Visualization>
        {ordered}
      </Visualization>
    </>
  );
}

export default function Stack(props) {
  return (
    <VisualPage title="Stack">
      <About>
        <h4>What is a Stack?</h4>
        Stacks are a LIFO (last in- first out) structure. They are used in a lot of reactive and UI related
        tasks, think back button on browsers
      </About>
      <Complexity complexity={[
        {
          "name": "Indexing",
          "complexity": "Θ(n)"
        },
        {
          "name": "Push/Pop Element",
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

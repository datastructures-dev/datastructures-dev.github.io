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
  const [searchVal, setSearchVal] = useState();

  function add(addEnd) {
    let newList = list.slice();
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
    } else {
      setStart(i);
      if (end === -1)
        setEnd(i);
    }
    setList(newList);
  }

  function search() {
    // TODO implement actual search animation
    setList(list.map((v,i) => Object.assign({}, v, {"highlight": v.value === searchVal})));
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
          <button onClick={() => add(false)}>Add Front</button>
          <button onClick={() => add(true)}>Add End</button>
        </ControlGroup>
        <ControlGroup>
          <label htmlFor="search">Search</label>
          <input name="search" onChange={e => setSearchVal(e.target.value)}></input>
          <button onClick={search}>Search</button>
        </ControlGroup>
      </Controls>
      <Visualization>
        {ordered}
      </Visualization>
    </>
  );
}

export default function LinkedList(props) {
  return (
    <VisualPage title="Linked List">
      <About>
        <h4>What is a Linked List?</h4>
        Linked List is a linear data structure and it is very common data structure which consists of group of nodes in a sequence which is divided in two parts. Each node consists of its own data and the address of the next node and forms a chain.
      </About>
      <Complexity complexity={[
        {
          "name": "Indexing",
          "complexity": "Θ(n)"
        },
        {
          "name": "Insert/delete at beginning",
          "complexity": "Θ(1)"
        },
        {
          "name": "Insert/delete at end (when last element known)",
          "complexity": "Θ(1)"
        },
        {
          "name": "Insert/delete in middle",
          "complexity": "Θ(n) + Θ(1)",
        },
        {
          "name": "Average wasted space",
          "complexity": "Θ(1)",
        },
      ]}/>
      <Demo />
    </VisualPage>
  );
}

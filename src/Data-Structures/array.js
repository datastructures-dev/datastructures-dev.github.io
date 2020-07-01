import React, { useState } from 'react';
import { CSSTransition } from 'react-transition-group';
import VisualPage, {
  About,
  Complexity,
  Controls,
  ControlGroup,
  Visualization,
} from '../VisualPage.js';
import './Styles/queue.css';

export function Array(props) {
  return (
    <div className="array">
      {props.children}
    </div>
  );
}

export function QueueNode(props) {
  return (
    <CSSTransition
      appear
      in={props.show}
      onExited={props.onExited}
      timeout={200}
      unmountOnExit
      classNames="queue-node"
    >
      <div className={"queue-node" + (props.highlight ? " highlight" : "")}>
        {props.children}
      </div>
    </CSSTransition>
  );
}

function Demo() {
  const [list, setList] = useState([]);
  const [addVal, setAddVal] = useState(-1);
  const [length, setLength] = useState(0);
  const [index, setIndex] = useState(0);

  function add() {
    //console.log("Adding: "+addVal+" "+length)
    var nl=Object.assign([],list)
    nl[index]={
      "value": addVal,
      "highlight": false,
      "show": true,
    }
    setList(nl)
  }

  function remove() {
    var nl=Object.assign([],list)
    nl[index]={
      "value": " ",
      "highlight": false,
      "show": true,
    }
    setList(nl)
  }

  function onExited() {
    setList(list.slice(1));
  }

  function create(){
    var l=[]
    for(var i=0;i<length;i++){
      l.push({
        "value": " ",
        "highlight": false,
        "show": true,
      })
    }
    setList(l)
    console.log(list)
  }

  
  return (
    <>
      <Controls>
      <ControlGroup>
          <label htmlFor="create">Array Length</label>
          <input name="add" type="text" onChange={e => setLength(e.target.value)}></input>
          <button onClick={create}>Create Array</button>
        </ControlGroup>
        <label htmlFor="index">Index</label>
        <input name="index" type="number"  onChange={e => setIndex(e.target.value)}></input>
        <ControlGroup>
          <label htmlFor="add">Add item</label>
          <input name="add" type="text" onChange={e => setAddVal(e.target.value)}></input>
          <button onClick={add}>Insert at Index</button>
        </ControlGroup>
        <ControlGroup>
          <button onClick={remove}>Remove from Index</button>
        </ControlGroup>
      </Controls>
      <Visualization>
        <Array>
          {list.map((node, i) => {
            return (
              <QueueNode
                key={i}
                index={i}
                show={node.show}
                highlight={node.highlight}
                onExited={onExited}
              >
                {node.value}
              </QueueNode>
            );
          })}
        </Array>
      </Visualization>
    </>
  );
}

export default function QueuePage(props) {
  return (
    <VisualPage title="Array">
      <About>
        <h4>What is an Array?</h4>
        Arrays are sequential blocks of memory in a device that store data. They are not dynamic (size won't change).
        They are extremely useful if we know that input will be bounded in within a fixed size (like pictures)
      </About>
      <Complexity complexity={[
        {
          "name": "Indexing",
          "complexity": "Θ(1)"
        },
        {
          "name": "Set Element at Index",
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

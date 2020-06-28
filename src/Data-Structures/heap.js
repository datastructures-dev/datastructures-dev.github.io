import React, { useState } from 'react';
import { CSSTransition } from 'react-transition-group';
// import  { Component } from 'react';
// import Page from './heapsort/index.html';

import VisualPage, {
  About,
  Complexity,
  Controls,
  ControlGroup,
  Visualization,
} from '../VisualPage.js';
import './Styles/queue.css';

export function Heap(props) {
  return (
    <div className="heap">
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
  const [length, setLength] = useState(0);

  

  function onExited() {
    setList(list.slice(1));
  }

  function create(){
    //set HTML->./heapsort/index.html
    // window.location="./heapsort/index.html" //does not work despite going to the correct path
    window.location.replace("./heapsort/index.html")

  }

  
  return (
    <>
      <Controls>
      <ControlGroup>
          <label htmlFor="create">Len of randomized array</label>
          <input name="add" type="text" onChange={e => setLength(e.target.value)}></input>
          <button onClick={create}>Create Array</button>
        </ControlGroup>
        
      </Controls>
      <Visualization>
        <Heap>
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
        </Heap>
      </Visualization>
    </>
  );
}

export  default function QueuePage(props) {
  return (
    <VisualPage title="Array">
      <About>
        <h4>What is a Heap?</h4>
        The bane of my existance. 
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

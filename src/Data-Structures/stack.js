import React, { useState } from 'react';
import { CSSTransition } from 'react-transition-group';
import VisualPage, {
  About,
  Complexity,
  Controls,
  ControlGroup,
  Visualization,
} from '../VisualPage.js';
import './Styles/stack.css';

export function Stack(props) {
  return (
    <div className="stack">
      {props.children}
    </div>
  );
}

export function StackNode(props) {
  return (
    <CSSTransition
      appear
      in={props.show}
      onExited={props.onExited}
      timeout={200}
      unmountOnExit
      classNames="stack-node"
    >
      <div className={"stack-node" + (props.highlight ? " highlight" : "")}>
        {props.children}
      </div>
    </CSSTransition>
  );
}

function Demo() {
  const [list, setList] = useState([]);
  const [addVal, setAddVal] = useState();

  function add() {
    setList([
      ...list,
      {
        "value": addVal,
        "highlight": false,
        "show": true,
      }
    ]);
  }

  function remove() {
    setList([
      ...(list.slice(0, list.length - 1)),
      Object.assign({}, list[list.length - 1], {
        "show": false,
      }),
    ]);
  }

  function onExited() {
    setList(list.slice(0, list.length - 1));
  }

  return (
    <>
      <Controls>
        <ControlGroup>
          <label htmlFor="add">Add item</label>
          <input name="add" type="text" onChange={e => setAddVal(e.target.value)}></input>
          <button onClick={add}>Push</button>
        </ControlGroup>
        <ControlGroup>
          <button onClick={remove}>Pop</button>
        </ControlGroup>
      </Controls>
      <Visualization>
        <Stack>
          {list.map((node, i) => {
            return (
              <StackNode
                key={i}
                index={i}
                show={node.show}
                highlight={node.highlight}
                onExited={onExited}
              >
                {node.value}
              </StackNode>
            );
          })}
        </Stack>
      </Visualization>
    </>
  );
}

export default function StackPage(props) {
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

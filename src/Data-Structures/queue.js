import React, { useState } from "react";
import { v4 as uuidv4 } from "uuid";
import { CSSTransition } from "react-transition-group";
import VisualPage, {
  About,
  Complexity,
  Controls,
  ControlGroup,
  Visualization,
} from "../VisualPage.js";
import "./Styles/queue.css";

export function Queue(props) {
  return <div className="queue">{props.children}</div>;
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
  const [addVal, setAddVal] = useState();

  function add() {
    setList((prev) => [
      ...prev,
      {
        key: uuidv4(),
        value: addVal,
        highlight: false,
        show: true,
      },
    ]);
  }

  function remove() {
    setList((prev) => [
      Object.assign({}, prev[0], {
        show: false,
      }),
      ...prev.slice(1),
    ]);
  }

  function onExited() {
    setList((prev) => prev.slice(1));
  }

  return (
    <>
      <Controls>
        <ControlGroup>
          <label htmlFor="add">Add item</label>
          <input
            name="add"
            type="text"
            onChange={(e) => setAddVal(e.target.value)}
          ></input>
          <button onClick={add}>Enqueue</button>
        </ControlGroup>
        <ControlGroup>
          <button onClick={remove}>Dequeue</button>
        </ControlGroup>
      </Controls>
      <Visualization>
        <Queue>
          {list.map((node, i) => {
            return (
              <QueueNode
                key={node.key}
                index={i}
                show={node.show}
                highlight={node.highlight}
                onExited={onExited}
              >
                {node.value}
              </QueueNode>
            );
          })}
        </Queue>
      </Visualization>
    </>
  );
}

export default function QueuePage(props) {
  return (
    <VisualPage title="Queue">
      <About>
        <h4>What is a Queue?</h4>
        Queues are a FIFO (first in- first out) structure. They are used in a
        lot of reactive and UI related tasks, think back button on browsers
      </About>
      <Complexity
        complexity={[
          {
            name: "Indexing",
            complexity: "Θ(n)",
          },
          {
            name: "Enqueue/Dequeue Element",
            complexity: "Θ(1)",
          },
          {
            name: "Average wasted space",
            complexity: "Θ(1)",
          },
        ]}
      />
      <Demo />
    </VisualPage>
  );
}

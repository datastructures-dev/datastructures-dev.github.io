import React, { useState, Component } from 'react';
import { CSSTransition } from 'react-transition-group';
// import  { Component } from 'react';
// import Page from './heapsort/index.html';
import InnerHTML from 'dangerously-set-html-content'
// import './heapsort/static/heap.js'
import VisualPage, {
  About,
  Complexity,
  Controls,
  ControlGroup,
  Visualization,
} from '../VisualPage.js';
import './Styles/queue.css';
import './Styles/styles.css';
import './Styles/style.css';
import './heapsort/static/heap.js';

export function Heap(props) {
  return (
    <div className="heap">
      {props.children}
    </div>
  );
}

const ht=`<html>

<head>
  <link  href="./styles/styles.css" />
  <link  href="./styles/style.css" />
  <script src="https://d3js.org/d3.v4.min.js"></script>

</head>

<body>
  
  

    
      
      <input type="number" id="len" placeholder="Insert length of randomized array"></input>
        <button id="click" onclick="clickity()">Generate Arr of Length</button>
        <button id="Refresh" onclick="refresh()">Refresh</button>

  <div id="heap">
  </div>
 
  
</body>
<script src="https://ajax.googleapis.com/ajax/libs/jquery/1.7.1/jquery.min.js" type="text/javascript"></script>
<script type="text/javascript" src="./heapsort/static/heap.js"></script>

<script type="text/javascript">
  var myLink = document.getElementById('click');

  function refresh(){
    alert("refresh")
    location.reload();

  }
  function clickity() {
    alert("clicked")
    //executeHome()
    //var script = document.createElement("script");
    //script.type = "text/javascript";
    //script.src = "./styles/heap.js";
    //document.getElementsByTagName("head")[0].appendChild(script);
    //return false;
  }
</script>

</html>`
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
    {/* <div dangerouslySetInnerHTML={{__html: "<p>Your html code here.<p>"}} /> */}

     </CSSTransition>
  );
}


function Demo() {
  const [list, setList] = useState([]);
  const [length, setLength] = useState(0);

  

  function onExited() {
    setList(list.slice(1));
  }

  function include(file) { 
  
    var script  = document.createElement('script'); 
    script.src  = file; 
    script.type = 'text/javascript'; 
    script.defer = true; 
    
    document.getElementsByTagName('head').item(0).appendChild(script); 
    
  } 
  function create(){
    
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
      <Demo />,
      <InnerHTML html={ht} />

    </VisualPage>

  );
}


import React from 'react';
import './VisualComponents.css';

export function Node(props) {
  return (
    <div className={'node' + (props.highlight ? ' highlight' : '')}>
      {props.children}
    </div>
  );
}

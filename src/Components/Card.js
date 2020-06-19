import React from 'react';
import './Card.css';

export function CardGrid(props) {
  return (
    <div className={`card-grid ${props.className}`}>
      {props.children}
    </div>
  );
}

export default function Card(props) {
  return (
    <div className={`card ${props.className}`}>
      {props.children}
    </div>
  );
}

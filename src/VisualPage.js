import React from 'react';
import './VisualPage.css';

export function Controls(props) {
  return (
    <section className="Controls">
      {props.children}
    </section>
  );
}

export function ControlGroup(props) {
  return (
    <div className="ControlGroup">
      {props.children}
    </div>
  );
}

export function Visualization(props) {
  return (
    <section className="Visual">
      {props.children}
    </section>
  );
}

export function Complexity(props) {
  return (
    <section className="Complexity">
      <table>
        <thead>
          <tr>
            <th colSpan="2">Complexity</th>
          </tr>
        </thead>
        <tbody>
          { props.complexity.map(c => {
            return (
              <tr key={c.name}>
                <td>{c.name}</td>
                <td>{c.complexity}</td>
              </tr>
            )
          })}
        </tbody>
      </table>
    </section>
  );
}

export function About(props) {
  return (
    <section className="About">
      {props.children}
    </section>
  );
}

export default function VisualPage(props) {
  return (
    <article className="VisualPage">
      <h1>{props.title}</h1>
      {props.children}
    </article>
  );
}


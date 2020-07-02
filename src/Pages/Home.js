import React from 'react';
import { DSLinks } from '../Data-Structures';

export default function HomePage() {
  return (
    <>
      <h1>DSA Visualization</h1>
      <p>Visualizations of data structures and algorithms</p>
      <DSLinks />
      <h3 style={{margin: "5rem auto", textAlign: "center"}}>We're still building this site so some links haven't been implemented yet!</h3>
    </>
  );
}

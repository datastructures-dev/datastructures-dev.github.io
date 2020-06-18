import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
  Link,
} from 'react-router-dom';
import { DSRoutes, DSLinks } from './Data-Structures';
import { AlgoRoutes, } from './Algorithms';
import './App.css';

function HomePage() {
  return (
    <>
      <h1>DSA Visualization</h1>
      <p>Visualizations of data structures and algorithms</p>
      <DSLinks />
      <h3 style={{margin: "5rem auto", textAlign: "center"}}>We're still converting from the old design which can be accessed <a href="/old">here</a></h3>
    </>
  );
}

function AboutPage() {
  return (
    <>
      <h1>About</h1>
      <p>A repository of reactive visualisations of common Abstract Data Structures and standard Algorithms created by <a href="https://danjones.dev">Daniel Jones</a> and <a href="https://people.rit.edu/dl1683/">Devansh</a></p>
      <p>This project was originally inspired by RocksVashi Labs' <a href="https://rocksvashi.github.io/DataStructuresInJavaScript/index.html">project</a></p>
    </>
  );
}

function NavBar() {
  return (
    <header className="NavBar">
      <nav>
        <Link to="/">Home</Link>
        <Link to="/data-structures">Data Structues</Link>
        <Link to="/algorithms">Algorithms</Link>
        <Link to="/about">About</Link>
      </nav>
    </header>
  )
}

export default function App() {
  return (
    <Router>
      <NavBar />
      <Switch>
        <Route path="/data-structures">
          <DSRoutes />
        </Route>
        <Route path="/algorithms">
          <AlgoRoutes />
        </Route>
        <Route exact path="/">
          <HomePage />
        </Route>
        <Route exact path="/about">
          <AboutPage />
        </Route>
        <Route exact path="/404">
          <h1>Error 404</h1>
        </Route>
        <Route exact path="*">
          <Redirect to="/404"/>
        </Route>
      </Switch>
    </Router>
  );
}

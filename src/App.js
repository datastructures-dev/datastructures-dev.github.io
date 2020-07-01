import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from 'react-router-dom';
import { DSRoutes, DSLinks } from './Data-Structures';
import { AlgoRoutes, } from './Algorithms';
import NavBar from './Components/NavBar.js';
import './App.css';

function HomePage() {
  return (
    <>
      <h1>DSA Visualization</h1>
      <p>Visualizations of data structures and algorithms</p>
      <DSLinks />
      <h3 style={{margin: "5rem auto", textAlign: "center"}}>We're still building this site so some links haven't been implemented yet!</h3>
    </>
  );
}

function AboutPage() {
  return (
    <>
      <h1>About</h1>
      <p>A repository of reactive visualisations of common Abstract Data Structures and standard Algorithms created by <a href="https://danjones.dev">Daniel Jones</a> and <a href="https://people.rit.edu/dl1683/">Devansh</a></p>
    </>
  );
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

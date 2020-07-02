import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from 'react-router-dom';
import HomePage from './Pages/Home.js';
import AboutPage from './Pages/About.js';
import { DSRoutes, DSLinks } from './Data-Structures';
import { AlgoRoutes, } from './Algorithms';
import NavBar from './Components/NavBar.js';
import './App.css';

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

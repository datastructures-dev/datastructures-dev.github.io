import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
  useLocation,
} from 'react-router-dom';
import useAckee from 'use-ackee';
import HomePage from './Pages/Home.js';
import AboutPage from './Pages/About.js';
import { DSRoutes, DSLinks } from './Data-Structures';
import { AlgoRoutes, } from './Algorithms';
import NavBar from './Components/NavBar.js';
import './App.css';

export default function App() {
  const location = useLocation();
  useAckee(location.pathname, {
    server: 'https://ackee.icedcoffee.dev',
    domainId: '33d52b14-d0db-4bed-9395-370e46dc8000',
  }, {
    ignoreLocalhost: true,
  });

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

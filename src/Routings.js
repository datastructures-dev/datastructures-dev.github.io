import React from 'react';
import {
  Link,
  Switch,
  Route,
} from 'react-router-dom';

export function DSADefaultPage() {
  return (
    <>
      <h1>We haven't implemented this yet :-(</h1>
      <p>Can you help us implement it <a href="https://github.com/datastructures-dev/datastructures-dev.github.io/">here</a></p>
    </>
  );
}

export function GenerateLinks(props) {
  return (
    <ul>
      {props.pages.map(page => {
        const pagepath = `${props.prefix}/${page.route}`;
        return (
          <li key={pagepath}>
            <Link to={pagepath}>
              {page.name}
            </Link>
          </li>
        );
      })}
    </ul>
  );
}

export function GenerateRoutes(props) {
  return (
    <Switch>
      <Route exact path={props.prefix}>
        {props.rootPage}
      </Route>
      { props.pages.map(page => {
        const pagepath = `${props.prefix}/${page.route}`;
        return (
          <Route key={pagepath} exact path={pagepath}>
            {page.page}
          </Route>
        );
      })}
      {props.children}
    </Switch>
  );
}

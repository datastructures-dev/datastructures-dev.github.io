import React from 'react';
import {
  Link,
  Switch,
  Route,
} from 'react-router-dom';

export function GenerateLinks(props) {
  return props.pages.map(page => {
    const pagepath = `${props.prefix}/${page.route}`;
    return (
      <Link key={pagepath} to={pagepath}>
        {page.name}
      </Link>
    );
  });
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
    </Switch>
  );
}

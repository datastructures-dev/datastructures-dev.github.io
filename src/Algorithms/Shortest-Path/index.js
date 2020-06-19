import React from 'react';
import {
  DSADefaultPage,
  GenerateLinks,
  GenerateRoutes,
} from '../../Routings.js';
import Card from '../../Components/Card.js';

const prefix = '/algorithms/shortest-path';
const pages = [
  {
    "name": "Dijkstra's",
    "route": "dijkstra",
    "page": DSADefaultPage,
  },
  {
    "name": "A*",
    "route": "a-star",
    "page": DSADefaultPage,
  },
  {
    "name": "Bellman Ford",
    "route": "bellman-ford",
    "page": DSADefaultPage,
  },
];

export const ShortestPathLinks  = () => {
  return (
    <Card>
      <h4>Shortest Path</h4>
      <GenerateLinks  prefix={prefix} pages={pages}/>
    </Card>
  );
}
export const ShortestPathRoutes = () => <GenerateRoutes prefix={prefix} rootPage={ShortestPathLinks} pages={pages}/>;

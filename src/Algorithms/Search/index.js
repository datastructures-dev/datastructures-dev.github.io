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
    "name": "Linear",
    "route": "linear",
    "page": DSADefaultPage,
  },
  {
    "name": "Binary",
    "route": "binary",
    "page": DSADefaultPage,
  },
  {
    "name": "Breadth First",
    "route": "breadth-first",
    "page": DSADefaultPage,
  },
  {
    "name": "Depth First",
    "route": "depth-first",
    "page": DSADefaultPage,
  },
];

export const SearchLinks  = () => {
  return (
    <Card>
      <h4>Search</h4>
      <GenerateLinks  prefix={prefix} pages={pages}/>
    </Card>
  );
}
export const SearchRoutes = () => <GenerateRoutes prefix={prefix} rootPage={SearchLinks} pages={pages}/>;

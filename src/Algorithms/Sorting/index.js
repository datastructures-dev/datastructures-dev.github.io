import React from 'react';
import {
  DSADefaultPage,
  GenerateLinks,
  GenerateRoutes,
} from '../../Routings.js';
import Card from '../../Components/Card.js';

const prefix = '/algorithms/sorting';
const pages = [
  {
    "name": "Bubble",
    "route": "bubble",
    "page": DSADefaultPage,
  },
  {
    "name": "Insertion",
    "route": "insertion",
    "page": DSADefaultPage,
  },
  {
    "name": "Merge",
    "route": "merge",
    "page": DSADefaultPage,
  },
  {
    "name": "Quick",
    "route": "quick",
    "page": DSADefaultPage,
  },
  
  {
    "name": "Radix",
    "route": "radix",
    "page": DSADefaultPage,
  },
];

export const SortingLinks  = () => {
  return (
    <Card>
      <h4>Sorting</h4>
      <GenerateLinks prefix={prefix} pages={pages}/>
    </Card>
  );
}
export const SortingRoutes = () => <GenerateRoutes prefix={prefix} rootPage={SortingLinks} pages={pages}/>;

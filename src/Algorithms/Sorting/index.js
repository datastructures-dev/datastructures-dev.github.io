import React from 'react';
import {
  DSADefaultPage,
  GenerateLinks,
  GenerateRoutes,
} from '../../Routings.js';

const prefix = '/algorithms/shortest-path';
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

export const SortingLinks  = () => <GenerateLinks  prefix={prefix} pages={pages}/>;
export const SortingRoutes = () => <GenerateRoutes prefix={prefix} rootPage={SortingLinks} pages={pages}/>;

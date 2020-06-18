import React from 'react';
import {
  DSADefaultPage,
  GenerateLinks,
  GenerateRoutes,
} from '../Routings.js';
import { SearchLinks, SearchRoutes, } from './Search';
import { SortingLinks, SortingRoutes, } from './Sorting';
import { ShortestPathLinks, ShortestPathRoutes, } from './Shortest-Path';

const prefix = "/algorithms";
const pages = [
  {
    "name": "Matchings",
    "route": "matchings",
    "page": DSADefaultPage,
  },
  {
    "name": "Linear Algebra",
    "route": "linear-algebra",
    "page": DSADefaultPage,
  },
];

export function AlgoLinks() {
  return (
    <>
      <h2>Algorithms</h2>
      <h4>Search Algorithms</h4>
      <SearchLinks />
      <h4>Sorting Algorithms</h4>
      <SortingLinks />
      <h4>Shortest Path Algorithms</h4>
      <ShortestPathLinks />
      <h4>Others</h4>
      <GenerateLinks prefix={prefix} pages={pages}/>
    </>
  );
}

export const AlgoRoutes = () => {
  return (
    <GenerateRoutes prefix={prefix} rootPage={AlgoLinks} pages={pages}>
      <SearchRoutes/>
      <SortingRoutes/>
      <ShortestPathRoutes/>
    </GenerateRoutes>
  );
}

import React from 'react';
import {
  DSADefaultPage,
  GenerateLinks,
  GenerateRoutes,
} from '../Routings.js';
import Card, { CardGrid } from '../Components/Card.js';
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
      <CardGrid>
        <SearchLinks />
        <SortingLinks />
        <ShortestPathLinks />
        <Card>
          <h4>Other Algorithms</h4>
          <GenerateLinks prefix={prefix} pages={pages}/>
        </Card>
      </CardGrid>
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

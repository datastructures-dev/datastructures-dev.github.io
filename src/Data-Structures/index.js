import React from 'react';
import {
  GenerateLinks,
  GenerateRoutes,
} from '../Routings.js';
import LinkedList from './linked-list.js';

function DSADefaultPage() {
  return (
    <>
      <h1>We haven't implemented this yet :-(</h1>
      <p>Maybe it's available at <a href="/old">/old</a></p>
      <p>Or you could help us implement it <a href="https://github.com/datastructures-dev/datastructures-dev.github.io/">here</a></p>
    </>
  );
}

const prefix = "/data-structures";
const dataStructures = [
  {
    "name": "Array",
    "route": "array",
    "page": DSADefaultPage,
  },
  {
    "name": "Queue",
    "route": "queue",
    "page": DSADefaultPage,
  },
  {
    "name": "Stack",
    "route": "stack",
    "page": DSADefaultPage,
  },
  {
    "name": "Linked List",
    "route": "linked-list",
    "page": LinkedList,
  },
  {
    "name": "Doubly Linked List",
    "route": "doubly-linked-list",
    "page": DSADefaultPage,
  },
  {
    "name": "Hash Table",
    "route": "hash-table",
    "page": DSADefaultPage,
  },
  {
    "name": "Heap",
    "route": "heap",
    "page": DSADefaultPage,
  },
  {
    "name": "Tree",
    "route": "tree",
    "page": DSADefaultPage,
  },
  {
    "name": "3-4-5 Tree & red-black tree",
    "route": "3-4-5-tree",
    "page": DSADefaultPage,
  },
  {
    "name": "Graph",
    "route": "graph",
    "page": DSADefaultPage,
  },
];

export function DSLinks() {
  return (
    <>
      <h2>Data Structures</h2>
      <ul>
        { GenerateLinks({
            "prefix": prefix,
            "pages": dataStructures,
        }).map((ds, i) => {
          return (
            <li key={i}>
              {ds}
            </li>
          )
        })}
      </ul>
    </>
  );
}

export const DSRoutes = () => <GenerateRoutes prefix={prefix} rootPage={DSLinks} pages={dataStructures} />;

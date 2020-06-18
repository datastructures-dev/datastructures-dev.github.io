import React from 'react';
import {
  DSADefaultPage,
  GenerateLinks,
  GenerateRoutes,
} from '../Routings.js';
import LinkedList from './linked-list.js';

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
      <GenerateLinks prefix={prefix} pages={dataStructures}/>
    </>
  );
}

export const DSRoutes = () => <GenerateRoutes prefix={prefix} rootPage={DSLinks} pages={dataStructures} />;

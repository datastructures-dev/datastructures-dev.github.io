import React from 'react';
import {
  DSADefaultPage,
  GenerateLinks,
  GenerateRoutes,
} from '../Routings.js';
import Card, { CardGrid } from '../Components/Card.js';
import LinkedList from './linked-list.js';
import Stack from './stack.js'
import Queue from './queue.js'
import Array from './array.js'
import Heap from './heap.js'

const prefix = "/data-structures";
const dataStructures = [
  {
    "name": "Array",
    "route": "array",
    "page": Array,
  },
  {
    "name": "Queue",
    "route": "queue",
    "page": Queue,
  },
  {
    "name": "Stack",
    "route": "stack",
    "page": Stack,
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
    "page": Heap,
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
    <CardGrid>
      <Card>
        <h4>Data Structures</h4>
        <GenerateLinks prefix={prefix} pages={dataStructures}/>
      </Card>
    </CardGrid>
  );
}

export const DSRoutes = () => <GenerateRoutes prefix={prefix} rootPage={DSLinks} pages={dataStructures} />;

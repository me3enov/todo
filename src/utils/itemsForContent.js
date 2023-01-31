import { nanoid } from 'nanoid';

export const itemsForContent = {
  [nanoid(10)]: {
    title: {
      text: 'Purchases',
      color: 'green'
    },
    items: [
      {
        id: nanoid(10),
        text: 'Pasta',
        checked: false
      },
      {
        id: nanoid(10),
        text: 'Potatoes',
        checked: false
      },
      {
        id: nanoid(10),
        text: 'Bitcoins',
        checked: false
      }
    ]
  },
  [nanoid(10)]: {
    title: {
      text: 'Frontend',
      color: 'blue'
    },
    items: [
      {
        id: nanoid(10),
        text: 'Learn JavaScript',
        checked: false
      },
      {
        id: nanoid(10),
        text: 'Explore Design Patterns',
        checked: false
      },
      {
        id: nanoid(10),
        text: 'ReactJS Hooks (useState, useReducer, useEffect etc',
        checked: false
      },
      {
        id: nanoid(10),
        text: 'Redux (redux-observable, redux-saga)',
        checked: false
      }
    ]
  },
  [nanoid(10)]: {
    title: {
      text: 'Films and TV series',
      color: 'pink'
    },
    items: [
      {
        id: nanoid(10),
        text: 'The Lord of the Rings: The Rings of Power',
        checked: false
      },
      {
        id: nanoid(10),
        text: 'House of the Dragon',
        checked: false
      },
      {
        id: nanoid(10),
        text: 'Elvis',
        checked: false
      }
    ]
  },
  [nanoid(10)]: {
    title: {
      text: 'Books',
      color: 'lightGreen'
    },
    items: [
      {
        id: nanoid(10),
        text: 'Grokking Algorithms: An Illustrated Guide for Programmers and Other Curious People',
        checked: false
      },
      {
        id: '2',
        text: 'Powerful: Building a Culture of Freedom and Responsibility',
        checked: false
      }
    ]
  },
  [nanoid(10)]: {
    title: {
      text: 'Private',
      color: 'gray'
    },
    items: []
  }
};

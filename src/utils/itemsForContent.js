import uuid from 'uuid/v4';

export const itemsForContent = {
  [uuid()]: {
    title: {
      text: 'Purchases',
      color: 'green'
    },
    items: [
      {
        id: uuid(),
        text: 'Pasta',
        checked: false
      },
      {
        id: uuid(),
        text: 'Potatoes',
        checked: false
      },
      {
        id: uuid(),
        text: 'Bitcoins',
        checked: false
      }
    ]
  },
  [uuid()]: {
    title: {
      text: 'Frontend',
      color: 'blue'
    },
    items: [
      {
        id: uuid(),
        text: 'Learn JavaScript',
        checked: false
      },
      {
        id: uuid(),
        text: 'Explore Design Patterns',
        checked: false
      },
      {
        id: uuid(),
        text: 'ReactJS Hooks (useState, useReducer, useEffect etc',
        checked: false
      },
      {
        id: uuid(),
        text: 'Redux (redux-observable, redux-saga)',
        checked: false
      }
    ]
  },
  [uuid()]: {
    title: {
      text: 'Films and TV series',
      color: 'pink'
    },
    items: [
      {
        id: uuid(),
        text: 'The Lord of the Rings: The Rings of Power',
        checked: false
      },
      {
        id: uuid(),
        text: 'House of the Dragon',
        checked: false
      },
      {
        id: uuid(),
        text: 'Elvis',
        checked: false
      }
    ]
  },
  [uuid()]: {
    title: {
      text: 'Books',
      color: 'lightGreen'
    },
    items: [
      {
        id: uuid(),
        text: 'Grokking Algorithms: An Illustrated Guide for Programmers and Other Curious People',
        checked: false
      },
      {
        id: uuid(),
        text: 'Powerful: Building a Culture of Freedom and Responsibility',
        checked: false
      }
    ]
  },
  [uuid()]: {
    title: {
      text: 'Private',
      color: 'gray'
    },
    items: []
  }
};

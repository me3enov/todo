import React, { useState } from 'react';
import { DragDropContext } from 'react-beautiful-dnd';

import { ListOfBoards } from '../ListOfBoards';

import classNames from 'classnames/bind';
import styles from './content.css';
const cx = classNames.bind(styles);

export const Content = ({ itemsForContent }) => {
  const [columns, setColumns] = useState(itemsForContent);

  const className = cx({
    content: true
  });

  const onDragEnd = (result, columns, setColumns) => {
    if (!result.destination) return;
    const { source, destination } = result;

    if (source.droppableId !== destination.droppableId) {
      const sourceColumn = columns[source.droppableId];
      const destColumn = columns[destination.droppableId];
      const sourceItems = [...sourceColumn.items];
      const destItems = [...destColumn.items];
      const [removed] = sourceItems.splice(source.index, 1);
      destItems.splice(destination.index, 0, removed);
      setColumns({
        ...columns,
        [source.droppableId]: {
          ...sourceColumn,
          items: sourceItems
        },
        [destination.droppableId]: {
          ...destColumn,
          items: destItems
        }
      });
    } else {
      const column = columns[source.droppableId];
      const copiedItems = [...column.items];
      const [removed] = copiedItems.splice(source.index, 1);
      copiedItems.splice(destination.index, 0, removed);
      setColumns({
        ...columns,
        [source.droppableId]: {
          ...column,
          items: copiedItems
        }
      });
    }
  };

  return (
    <main className={className}>
      <DragDropContext onDragEnd={(result) => onDragEnd(result, columns, setColumns)}>
        <ListOfBoards boards={columns} />
      </DragDropContext>
    </main>
  );
};

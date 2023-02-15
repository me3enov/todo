import React from 'react';
import styles from './listOfBoards.css';
import { Board } from './Board';

interface IListOfBoardsProps {
  boards: {
    [key: string]: {
      title: {
        text: string;
        color: string;
      };
      items: Array<{
        id: string;
        text: string;
        checked: boolean;
      }>;
    };
  };
}

export const ListOfBoards = ({ boards }: IListOfBoardsProps) => {
  return (
    <ul className={styles.listOfBoards}>
      {Object.entries(boards).map(([boardId, board]) => {
        return <Board key={boardId} board={board}></Board>;
      })}
    </ul>
  );
};

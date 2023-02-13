import React, { useState } from 'react';
import styles from './board.css';
import { HeaderOfBoard } from './HeaderOfBoard';
import { ListOfTasks } from '../../ListOfTasks';
import { ContainerAddTask } from './ContainerAddTask';

type Tasks = {
  id: string;
  text: string;
  checked: boolean;
};

interface IBoardProps {
  board: {
    title: {
      text: string;
      color: string;
    };
    items: Array<Tasks>;
  };
}

export const Board = ({ board }: IBoardProps) => {
  const [tasks, setTasks] = useState<Tasks[]>(board.items);

  return (
    <li className={styles.board} aria-label={board.title.text}>
      <HeaderOfBoard color={board.title.color} text={board.title.text} />
      <ListOfTasks tasks={tasks} onSetTasks={setTasks} />
      <ContainerAddTask tasks={tasks} onSetTasks={setTasks} />
    </li>
  );
};

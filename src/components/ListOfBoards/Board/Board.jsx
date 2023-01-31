import { useState } from 'react';
import { HeaderOfBoard } from './HeaderOfBoard';
import { ListOfTasks } from '../../ListOfTasks';
import { ContainerAddTask } from './ContainerAddTask';

import classNames from 'classnames/bind';
import styles from './board.css';
const cx = classNames.bind(styles);

export const Board = ({ board }) => {
  const [tasks, setTasks] = useState(board.items);

  const className = cx({
    board: true
  });

  return (
    <div className={className} aria-label={board.name}>
      <HeaderOfBoard color={board.title.color} isTitleForHeader={board.title.text} />
      <ListOfTasks tasks={tasks} onSetTasks={setTasks} />
      <ContainerAddTask tasks={tasks} onSetTasks={setTasks} />
    </div>
  );
};

import React from 'react';
import styles from './listOfTasks.css';
import { Task } from './Task';

type ListOfTasks = {
  tasks: Array<Task>;
  onSetTasks: (tasks: Task[]) => void;
};

type Task = {
  id: string;
  text: string;
  checked: boolean;
};

export const ListOfTasks = ({ tasks, onSetTasks }: ListOfTasks) => {
  return (
    <ul className={styles.listOfTasks}>
      {tasks.map((task) => {
        return <Task key={task.id} task={task} tasks={tasks} onSetTasks={onSetTasks} />;
      })}
    </ul>
  );
};

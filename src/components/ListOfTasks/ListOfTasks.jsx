import { Task } from './Task';

import classNames from 'classnames/bind';
import styles from './listOfTasks.css';
const cx = classNames.bind(styles);

export const ListOfTasks = ({ tasks, onSetTasks }) => {
  const className = cx({
    listOfTasks: true
  });
  return (
    <ul className={className}>
      {tasks.map((task) => {
        return <Task key={task.id} task={task} tasks={tasks} onSetTasks={onSetTasks} />;
      })}
    </ul>
  );
};

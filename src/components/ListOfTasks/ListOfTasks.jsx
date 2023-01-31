import { Droppable } from 'react-beautiful-dnd';

import { Task } from './Task';

import classNames from 'classnames/bind';
import styles from './listOfTasks.css';
const cx = classNames.bind(styles);

export const ListOfTasks = ({ boardId, tasks, onSetTasks }) => {
  const className = cx({
    listOfTasks: true
  });
  return (
    <Droppable key={boardId} droppableId={boardId}>
      {(provided, snapshot) => {
        return (
          <ul className={className} {...provided.droppableProps} ref={provided.innerRef}>
            {tasks.map((task, index) => {
              return (
                <Task
                  key={task.id}
                  index={index}
                  task={task}
                  tasks={tasks}
                  onSetTasks={onSetTasks}
                />
              );
            })}
          </ul>
        );
      }}
    </Droppable>
  );
};

import { Draggable } from 'react-beautiful-dnd';

import { useState } from 'react';
import { Checkbox } from './Checkbox';
import { TaskText } from './TaskText';
import { ButtonRemoveTask } from '../../Buttons/ButtonRemoveTask';
import { PopupRemoveTask } from '../../Popups/PopupRemoveTask';

import classNames from 'classnames/bind';
import styles from './task.css';
const cx = classNames.bind(styles);

export const Task = ({ index, task, tasks, onSetTasks }) => {
  const [isOpenPopup, setIsOpenPopup] = useState(false);
  const [isChecked, setIsChecked] = useState(task.checked);

  const className = cx({
    task: true
  });

  const handleOpenPopup = () => {
    setIsOpenPopup(true);
  };

  const handleClosePopup = () => {
    setIsOpenPopup(false);
  };

  const handleChangeCheckbox = () => {
    task.checked = !task.checked;
    setIsChecked(!isChecked);
  };

  const handleKeyDown = (event) => {
    if (event.code === 'Space' || event.code === 'Enter') {
      task.checked = !task.checked;
      setIsChecked(!isChecked);
    }
  };

  return (
    <Draggable key={task.id} draggableId={task.id} index={index}>
      {(provided, snapshot) => {
        return (
          <li
            className={className}
            ref={provided.innerRef}
            {...provided.draggableProps}
            {...provided.dragHandleProps}>
            <Checkbox
              isLabelForCheckbox={`Check ${task.text}`}
              isChecked={isChecked}
              onChangeCheckbox={handleChangeCheckbox}
              onKeyDownCheckbox={handleKeyDown}
            />
            <TaskText isNameOfTask={task.text} />
            <ButtonRemoveTask onOpenPopup={handleOpenPopup} />
            {isOpenPopup ? (
              <PopupRemoveTask
                task={task}
                tasks={tasks}
                isOpenPopup={isOpenPopup}
                onClosePopup={handleClosePopup}
                onSetTasks={onSetTasks}
              />
            ) : null}
          </li>
        );
      }}
    </Draggable>
  );
};

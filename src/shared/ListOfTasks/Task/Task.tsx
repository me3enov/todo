import React from 'react';
import styles from './task.css';
import { useState } from 'react';
import { Checkbox } from './Checkbox';
import { TaskText } from './TaskText';
import { ButtonRemoveTask } from '../../Buttons/ButtonRemoveTask';
import { PopupRemoveTask } from '../../Popups/PopupRemoveTask';

type Task = {
  task: TaskItem;
  tasks: Array<TaskItem>;
  onSetTasks: (tasks: TaskItem[]) => void;
};

type TaskItem = {
  id: string;
  text: string;
  checked: boolean;
};

export const Task = ({ task, tasks, onSetTasks }: Task) => {
  const [isOpenPopup, setIsOpenPopup] = useState<boolean>(false);
  const [isChecked, setIsChecked] = useState<boolean>(task.checked);
  const [isShown, setIsShown] = useState<boolean>(false);

  const handleOpenPopup = (): void => {
    setIsOpenPopup(true);
  };

  const handleClosePopup = (): void => {
    setIsOpenPopup(false);
  };

  const handleChangeCheckbox = (): void => {
    setIsChecked(!isChecked);
  };

  const handleKeyDown = (event: KeyboardEvent): void => {
    if (event.code === 'Space' || event.code === 'Enter') {
      setIsChecked(!isChecked);
    }
  };

  const handleBlur = () => {
    setIsShown(false);
  };

  return (
    <li
      className={styles.task}
      onMouseEnter={() => setIsShown(true)}
      onMouseLeave={() => setIsShown(false)}
    >
      <Checkbox
        labelForCheckbox={`Check ${task.text}`}
        isChecked={isChecked}
        onChangeCheckbox={handleChangeCheckbox}
        onKeyDownCheckbox={handleKeyDown}
        onFocus={() => setIsShown(true)}
      />
      <TaskText nameOfTask={task.text} />
      {isShown && <ButtonRemoveTask onOpenPopup={handleOpenPopup} onBlur={handleBlur} />}
      {isOpenPopup && (
        <PopupRemoveTask
          task={task}
          tasks={tasks}
          isOpenPopup={isOpenPopup}
          onClosePopup={handleClosePopup}
          onSetTasks={onSetTasks}
        />
      )}
    </li>
  );
};

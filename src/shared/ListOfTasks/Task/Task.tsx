import React, { useState, KeyboardEvent } from 'react';
import styles from './task.less';
import { Checkbox } from './Checkbox';
import { Button } from '../../Button';
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

  const handleChange = (): void => {
    setIsChecked(!isChecked);
  };

  const handleKeyDown = (event: KeyboardEvent<HTMLSpanElement>): void => {
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
        onChange={handleChange}
        onKeyDown={handleKeyDown}
        onFocus={() => setIsShown(true)}
      />
      <p className={styles.taskText}>{task.text}</p>
      {isShown && <Button className={styles.buttonRemoveTask} type={'button'} aria-label={'Remove task'} onClick={handleOpenPopup} onBlur={handleBlur} />}
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

import React from 'react';
import styles from './containerAddTask.css';
import { useState } from 'react';
import { ButtonAddTask } from '../../../Buttons/ButtonAddTask/ButtonAddTask';
import { PopupAddTask } from '../../../Popups/PopupAddTask/PopupAddTask';

interface ITaskProps {
  id: string;
  text: string;
  checked: boolean;
}

type ContainerAddTask = {
  tasks: ITaskProps[];
  onSetTasks: (task: ITaskProps[]) => void;
};

export const ContainerAddTask = ({ tasks, onSetTasks }: ContainerAddTask) => {
  const [isOpenPopup, setIsOpenPopup] = useState<boolean>(true);

  const handleOpenPopupAddTask = (): void => {
    setIsOpenPopup(false);
  };

  const handleClosePopupAddTask = (): void => {
    setIsOpenPopup(true);
  };

  const handleAddTask = (taskForTasks: ITaskProps): void => {
    onSetTasks([taskForTasks, ...tasks]);
    setIsOpenPopup(false);
  };

  return (
    <div className={styles.containerAddTask}>
      {isOpenPopup ? (
        <ButtonAddTask onOpenPopupAddTask={handleOpenPopupAddTask} />
      ) : (
        <PopupAddTask
          isOpenPopup={isOpenPopup}
          onAddTask={handleAddTask}
          onClosePopup={handleClosePopupAddTask}
        />
      )}
    </div>
  );
};

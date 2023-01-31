import { useState } from 'react';
import { ButtonAddTask } from '../../../Buttons/ButtonAddTask/ButtonAddTask';
import { PopupAddTask } from '../../../Popups/PopupAddTask/PopupAddTask';

import classNames from 'classnames/bind';
import styles from './containerAddTask.css';
const cx = classNames.bind(styles);

export const ContainerAddTask = ({ tasks, onSetTasks }) => {
  const [isOpenPopup, setIsOpenPopup] = useState(true);

  const className = cx({
    containerAddTask: true
  });

  const handleOpenPopupAddTask = () => {
    setIsOpenPopup(false);
  };

  const handleClosePopupAddTask = () => {
    setIsOpenPopup(true);
  };

  const handleAddTask = (taskForTasks) => {
    onSetTasks([taskForTasks, ...tasks]);
    setIsOpenPopup(false);
  };

  const buttonAddTask = () => <ButtonAddTask onOpenPopupAddTask={handleOpenPopupAddTask} />;

  const popupAddTask = () => {
    return (
      <PopupAddTask
        isOpenPopup={isOpenPopup}
        onAddTask={handleAddTask}
        onClosePopup={handleClosePopupAddTask}
      />
    );
  };

  return <div className={className}> {isOpenPopup ? buttonAddTask() : popupAddTask()} </div>;
};

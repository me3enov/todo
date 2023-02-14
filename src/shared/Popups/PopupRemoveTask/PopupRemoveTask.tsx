import React from 'react';
import styles from './popupRemoveTask.css';
import { PopupWithForm } from '../PopupWithForm/PopupWithForm';
import { Button } from '../../Button';
import { TitleOfContainer } from '../../Form/TitleOfContainer';

type Task = {
  id: string;
  text: string;
  checked: boolean;
};

type PopupRemoveTask = {
  task: Task;
  tasks: Array<Task>;
  isOpenPopup: boolean;
  onClosePopup: () => void;
  onSetTasks: (tasks: Task[]) => void;
};

export const PopupRemoveTask = ({ task, tasks, isOpenPopup, onClosePopup, onSetTasks }: PopupRemoveTask) => {
  const handleSubmit = (event: any) => {
    event.preventDefault();
    onSetTasks(tasks.filter((itemOfTasks) => itemOfTasks.id !== task.id));
    onClosePopup();
  };

  return (
    <PopupWithForm
      styleForForm={styles.form}
      isOpenPopup={isOpenPopup}
      onClosePopup={onClosePopup}
      onSubmitForm={handleSubmit}
    >
      <TitleOfContainer nameForTitleOfForm={task.text} />
      <Button className={styles.buttonRemove} type={'submit'} aria-label={'Remove Task'}>{'Remove Task'}</Button>
    </PopupWithForm>
  );
};
